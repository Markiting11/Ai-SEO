function ContactCTA() {
    return (
        <section className="py-20 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-dark)] relative overflow-hidden" data-name="contact-cta" data-file="components/ContactCTA.js">
            <div className="absolute top-0 right-0 p-12 opacity-10">
                <div className="icon-message-circle text-9xl text-white"></div>
            </div>
            
            <div className="container-custom relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Grow Smarter?</h2>
                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
                    Whether you're a local business owner needing SEO or a student looking to build real skills, I'm here to help.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="contact.html" className="btn bg-white text-[var(--primary-color)] hover:bg-slate-50 text-lg px-8 shadow-lg">
                        Get In Touch
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=923459842097&text&type=phone_number&app_absent=0" target="_blank" className="btn bg-slate-900 text-white hover:bg-slate-800 text-lg px-8 shadow-lg border-none">
                        <div className="icon-message-circle mr-2 w-5 h-5 text-green-400"></div>
                        WhatsApp Me
                    </a>
                </div>
            </div>
        </section>
    );
}