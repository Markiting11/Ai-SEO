function AboutApp() {
    try {
        return (
            <div className="flex flex-col min-h-screen">
                <Header />
                <main>
                    <AboutHero />
                    <AboutBio />
                    <AboutStats />
                    <ContactCTA />
                </main>
                <VoiceAssistant />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('AboutApp component error:', error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AboutApp />);