function Hero() {
    return (
        <section className="relative pt-10 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-slate-50" data-name="hero" data-file="components/Hero.js">
            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center space-x-2 bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/20 rounded-full px-4 py-1.5 mb-8">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] animate-pulse"></span>
                            <span className="text-xs font-semibold text-[var(--primary-dark)] uppercase tracking-wide">Available for new projects</span>
                        </div>
                        
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                            Grow Your Local Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-dark)]">Smart SEO & AI</span>
                        </h1>
                        
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            I help businesses grow online using Local SEO, digital marketing, and custom AI tools designed to solve real problems—simple, secure, and effective.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="contact.html" className="btn btn-primary w-full sm:w-auto shadow-lg shadow-[var(--primary-color)]/30">
                                Start Growing Today
                                <div className="icon-arrow-right ml-2 w-5 h-5"></div>
                            </a>
                            <a href="portfolio.html" className="btn btn-outline w-full sm:w-auto">
                                View My Tools
                            </a>
                        </div>
                        
                        <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 text-slate-400">
                            <div className="flex items-center space-x-2">
                                <div className="icon-circle-check text-[var(--primary-color)]"></div>
                                <span className="text-sm font-medium">Local SEO</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="icon-circle-check text-[var(--primary-color)]"></div>
                                <span className="text-sm font-medium">AI Tools</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="icon-circle-check text-[var(--primary-color)]"></div>
                                <span className="text-sm font-medium">Business Growth</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="flex-1 relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-500">
                             <img 
                                src="https://app.trickle.so/storage/public/images/usr_196e96caa8000001/a295c978-3017-4d2d-a66f-75aadc4fcab6.png" 
                                alt="Anwar Ali Sehar" 
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Decorative background elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--primary-color)]/20 rounded-full blur-3xl opacity-50 z-0"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--primary-color)]/20 rounded-full blur-3xl opacity-50 z-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}