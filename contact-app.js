function ContactApp() {
    try {
        return (
            <div className="flex flex-col min-h-screen">
                <Header />
                <main>
                    <ContactHero />
                    <section className="section-padding bg-white relative z-10 -mt-20 pt-0">
                        <div className="container-custom">
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
                                <ContactInfo />
                                <ContactForm />
                            </div>
                        </div>
                    </section>
                </main>
                <VoiceAssistant />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('ContactApp component error:', error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContactApp />);