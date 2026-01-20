function ServicesApp() {
    try {
        return (
            <div className="flex flex-col min-h-screen">
                <Header />
                <main>
                    <ServicesHero />
                    <ServicesList />
                    <ContactCTA />
                </main>
                <VoiceAssistant />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('ServicesApp component error:', error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ServicesApp />);