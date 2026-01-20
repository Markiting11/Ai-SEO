function PortfolioApp() {
    try {
        return (
            <div className="flex flex-col min-h-screen">
                <Header />
                <main>
                    <PortfolioHero />
                    <PortfolioGrid />
                    <ContactCTA />
                </main>
                <VoiceAssistant />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('PortfolioApp component error:', error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PortfolioApp />);