function ServicesHero() {
    return (
        <section className="relative py-24 bg-slate-50" data-name="services-hero" data-file="components/ServicesHero.js">
            <div className="container-custom text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                    Services That Drive <span className="text-[var(--primary-color)]">Real Results</span>
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                    From ranking #1 on Google Maps to building custom AI software, I offer end-to-end digital solutions tailored for your business.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#service-list" className="btn btn-primary">Explore Services</a>
                    <a href="contact.html" className="btn btn-outline">Get a Quote</a>
                </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-emerald-500 blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
            </div>
        </section>
    );
}