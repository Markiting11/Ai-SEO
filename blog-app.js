function BlogApp() {
    try {
        return (
            <div className="flex flex-col min-h-screen">
                <Header />
                <main>
                    <BlogHero />
                    <BlogList />
                    <ContactCTA />
                </main>
                <VoiceAssistant />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('BlogApp component error:', error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BlogApp />);