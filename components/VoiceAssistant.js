function VoiceAssistant() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isListening, setIsListening] = React.useState(false);
    const [isSpeaking, setIsSpeaking] = React.useState(false);
    const [transcript, setTranscript] = React.useState('');
    const [response, setResponse] = React.useState('');
    const [language, setLanguage] = React.useState('en-US'); // Default English
    const [status, setStatus] = React.useState('idle'); // idle, listening, processing, speaking
    const [autoMode, setAutoMode] = React.useState(true); // Continuous conversation mode

    const recognitionRef = React.useRef(null);
    const synthRef = React.useRef(window.speechSynthesis);
    // Keep track of mounted state to prevent state updates after unmount
    const isMounted = React.useRef(true);

    // Context for the AI to understand the website
    const websiteContext = `
        You are the intelligent Voice Assistant for Anwar Ali Sehar's personal brand website.
        Anwar is a Local SEO Specialist and AI Solutions Architect based in Pakistan.
        
        Key Information:
        - Services: Local SEO (Google Business Profile, Citations), Web Development (React, Modern Tech), AI Tools & Automation (Chatbots, Workflow Automation), Training & Mentorship.
        - Portfolio: Includes projects like 'Cosmetics Brand Store', 'Polio Data Web App', 'Graphic Designer Portfolio', and various SEO campaigns.
        - Contact: Email (Arshad2097@gmail.com), Phone/WhatsApp (+92 345 984 2097).
        - Location: Pakistan, serving globally.
        - Mission: "Think Local, Build Smart, Grow Digital."
        
        CRITICAL LANGUAGE INSTRUCTIONS:
        - DETECT the language of the user's input.
        - If the input is in URDU (or Roman Urdu), YOU MUST REPLY IN URDU.
        - If the input is in HINDI, YOU MUST REPLY IN HINDI.
        - If the input is in ENGLISH, reply in ENGLISH.
        - Do NOT mix languages unless necessary for technical terms.
        
        Conversation Style:
        - Keep your responses CONCISE (1-3 sentences maximum) for voice output.
        - Be helpful, professional, and friendly.
        - If the user greets you, greet them back warmly in their language.
    `;

    React.useEffect(() => {
        isMounted.current = true;
        // Initialize Speech Recognition
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false; // We handle the loop manually for better turn-taking
            recognitionRef.current.interimResults = false;
            
            recognitionRef.current.onstart = () => {
                if (isMounted.current) {
                    setIsListening(true);
                    setStatus('listening');
                    setTranscript('');
                }
            };

            recognitionRef.current.onend = () => {
                if (isMounted.current) {
                    setIsListening(false);
                    // Note: We don't restart here automatically because we might be processing a result.
                    // The restart logic happens after TTS finishes or if no result was found (handled below).
                }
            };

            recognitionRef.current.onresult = async (event) => {
                const text = event.results[0][0].transcript;
                if (isMounted.current) {
                    setTranscript(text);
                    setStatus('processing');
                    await processWithAI(text);
                }
            };

            recognitionRef.current.onerror = (event) => {
                console.error('Speech recognition error', event.error);
                if (isMounted.current) {
                    setStatus('error');
                    setIsListening(false);
                    // If it was a no-speech error in auto mode, maybe just go back to idle to avoid infinite loops of errors
                    // or try again after a longer delay. For now, let's go idle.
                    setTimeout(() => {
                        if (isMounted.current && isOpen && autoMode && event.error === 'no-speech') {
                             // Optional: could restart listening here if we want to be very persistent
                             setStatus('idle'); 
                        } else {
                            setStatus('idle');
                        }
                    }, 2000);
                }
            };
        }

        return () => {
            isMounted.current = false;
            if (recognitionRef.current) {
                recognitionRef.current.abort();
            }
            if (synthRef.current) {
                synthRef.current.cancel();
            }
        };
    }, [language, autoMode, isOpen]); 

    const startListening = () => {
        if (!recognitionRef.current) {
            alert('Speech recognition is not supported in this browser.');
            return;
        }
        
        // Stop any current speech or recognition
        if (synthRef.current.speaking) {
            synthRef.current.cancel();
            setIsSpeaking(false);
        }
        try {
            recognitionRef.current.abort(); // Ensure clean state
        } catch(e) {}

        setTimeout(() => {
            try {
                if (isMounted.current && isOpen) {
                    recognitionRef.current.lang = language;
                    recognitionRef.current.start();
                }
            } catch (e) {
                console.error("Start error", e);
            }
        }, 100);
    };

    const stopAll = () => {
        if (recognitionRef.current) recognitionRef.current.abort();
        if (synthRef.current) synthRef.current.cancel();
        setIsListening(false);
        setIsSpeaking(false);
        setStatus('idle');
    };

    const processWithAI = async (text) => {
        try {
            const aiResponse = await invokeAIAgent(websiteContext, text);
            if (isMounted.current) {
                setResponse(aiResponse);
                speakResponse(aiResponse);
            }
        } catch (error) {
            console.error('AI Processing Error:', error);
            if (isMounted.current) {
                setStatus('error');
                const errMsg = language === 'ur-PK' ? 'Maaf kijiyega, koi ghalti hui hai.' : 'Sorry, I encountered an error.';
                setResponse(errMsg);
                speakResponse(errMsg);
            }
        }
    };

    const speakResponse = (text) => {
        setStatus('speaking');
        setIsSpeaking(true);
        
        // Get available voices
        const voices = synthRef.current.getVoices();
        
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Improve Voice Selection logic
        // Try to find a voice that matches the language
        let selectedVoice = voices.find(v => v.lang === language);
        
        // Fallback for Urdu/Hindi if exact match not found (often Hindi voices work for Urdu)
        if (!selectedVoice && (language === 'ur-PK' || language === 'hi-IN')) {
             selectedVoice = voices.find(v => v.lang.includes('hi') || v.lang.includes('ur'));
        }
        
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }
        
        utterance.lang = language;
        utterance.rate = 1.0; // Normal speed

        utterance.onend = () => {
            if (isMounted.current) {
                setIsSpeaking(false);
                if (isOpen && autoMode) {
                    // Continuous Conversation: Start listening again automatically
                    setStatus('idle'); // Brief reset
                    setTimeout(() => {
                        startListening();
                    }, 800); // Small delay to separate turn-taking
                } else {
                    setStatus('idle');
                }
            }
        };

        utterance.onerror = () => {
            if (isMounted.current) {
                setIsSpeaking(false);
                setStatus('idle');
            }
        };

        synthRef.current.speak(utterance);
    };

    // Close handler
    const handleClose = () => {
        setIsOpen(false);
        stopAll();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4" data-name="voice-assistant" data-file="components/VoiceAssistant.js">
            
            {/* Expanded Interface */}
            {isOpen && (
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 w-80 mb-2 transform transition-all duration-300 animate-in slide-in-from-bottom-5">
                    <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                        <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${status === 'listening' ? 'bg-red-500 animate-pulse' : 'bg-[var(--primary-color)]'}`}></div>
                            <h3 className="font-bold text-slate-800">Voice Assistant</h3>
                        </div>
                        <div className="flex items-center space-x-2">
                             {/* Auto-mode toggle (hidden for simplicity, default ON is requested behavior) 
                             <button onClick={() => setAutoMode(!autoMode)} className={`text-xs px-2 py-0.5 rounded ${autoMode ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                                {autoMode ? 'Auto' : 'Manual'}
                             </button>
                             */}
                            <button onClick={handleClose} className="text-slate-400 hover:text-slate-600">
                                <div className="icon-x w-4 h-4"></div>
                            </button>
                        </div>
                    </div>

                    {/* Language Selector */}
                    <div className="flex justify-center space-x-2 mb-6 bg-slate-100 p-1 rounded-lg">
                        <button 
                            onClick={() => { setLanguage('en-US'); stopAll(); }}
                            className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${language === 'en-US' ? 'bg-white text-[var(--primary-color)] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            English
                        </button>
                        <button 
                            onClick={() => { setLanguage('ur-PK'); stopAll(); }}
                            className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${language === 'ur-PK' ? 'bg-white text-[var(--primary-color)] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Urdu
                        </button>
                        <button 
                            onClick={() => { setLanguage('hi-IN'); stopAll(); }}
                            className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${language === 'hi-IN' ? 'bg-white text-[var(--primary-color)] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Hindi
                        </button>
                    </div>

                    {/* Status Visualizer */}
                    <div className="h-32 flex flex-col items-center justify-center text-center space-y-3 relative">
                        {status === 'idle' && (
                            <button onClick={startListening} className="flex flex-col items-center group">
                                <div className="w-16 h-16 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center group-hover:bg-[var(--primary-color)]/20 transition-colors mb-2">
                                    <div className="icon-mic text-4xl text-[var(--primary-color)]"></div>
                                </div>
                                <p className="text-sm text-slate-500">Tap to start</p>
                            </button>
                        )}
                        {status === 'listening' && (
                            <>
                                <div className="relative cursor-pointer" onClick={stopAll}>
                                    <div className="absolute -inset-4 bg-red-500/20 rounded-full animate-ping"></div>
                                    <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center relative z-10 border border-red-100">
                                        <div className="icon-mic text-4xl text-red-500"></div>
                                    </div>
                                </div>
                                <p className="text-sm text-red-500 font-medium mt-2">Listening ({language.split('-')[0]})...</p>
                                <p className="text-xs text-slate-400">Tap to stop</p>
                            </>
                        )}
                        {status === 'processing' && (
                            <>
                                <div className="w-16 h-16 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center">
                                    <div className="icon-loader text-4xl text-[var(--primary-color)] animate-spin"></div>
                                </div>
                                <p className="text-sm text-[var(--primary-color)] font-medium mt-2">Thinking...</p>
                            </>
                        )}
                        {status === 'speaking' && (
                            <>
                                <div className="relative cursor-pointer" onClick={stopAll}>
                                    <div className="w-16 h-16 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center">
                                         <div className="icon-volume-2 text-4xl text-[var(--primary-color)] animate-bounce"></div>
                                    </div>
                                </div>
                                <p className="text-sm text-[var(--primary-color)] font-medium mt-2">Speaking...</p>
                                <p className="text-xs text-slate-400">Tap to stop</p>
                            </>
                        )}
                        {status === 'error' && (
                            <button onClick={startListening} className="flex flex-col items-center">
                                <div className="icon-circle-alert text-4xl text-red-500 mb-2"></div>
                                <p className="text-sm text-red-500">Error. Tap to retry.</p>
                            </button>
                        )}
                    </div>

                    {/* Transcript Area */}
                    {(transcript || response) && (
                        <div className="mt-4 p-3 bg-slate-50 rounded-lg text-xs space-y-2 max-h-32 overflow-y-auto border border-slate-100">
                            {transcript && (
                                <p className="text-slate-500 border-l-2 border-slate-300 pl-2">
                                    <span className="font-bold">You:</span> {transcript}
                                </p>
                            )}
                            {response && (
                                <p className="text-slate-800 border-l-2 border-[var(--primary-color)] pl-2">
                                    <span className="font-bold">AI:</span> {response}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            )}

            {/* Floating Action Button */}
            <div className="flex items-center space-x-4">
                {isOpen && status === 'listening' ? (
                     <button 
                        onClick={stopAll}
                        className="w-14 h-14 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition-all transform hover:scale-105 flex items-center justify-center animate-pulse"
                    >
                        <div className="icon-square text-2xl fill-current"></div>
                    </button>
                ) : isOpen ? (
                    <button 
                        onClick={() => { setIsOpen(false); stopAll(); }}
                        className="w-14 h-14 rounded-full bg-slate-800 text-white shadow-lg hover:bg-slate-900 transition-all transform hover:scale-105 flex items-center justify-center"
                    >
                        <div className="icon-x text-2xl"></div>
                    </button>
                ) : (
                     <button 
                        onClick={() => { setIsOpen(true); setTimeout(() => startListening(), 500); }}
                        className="w-14 h-14 rounded-full bg-[var(--primary-color)] text-white shadow-lg shadow-emerald-500/30 hover:bg-[var(--primary-dark)] transition-all transform hover:scale-105 flex items-center justify-center group"
                    >
                        <div className="icon-mic text-2xl group-hover:scale-110 transition-transform"></div>
                        <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            Voice AI
                        </span>
                    </button>
                )}
            </div>
        </div>
    );
}