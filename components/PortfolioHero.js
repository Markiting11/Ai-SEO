function PortfolioHero() {
    return (
        <section className="bg-slate-900 py-20 text-center" data-name="portfolio-hero" data-file="components/PortfolioHero.js">
            <div className="container-custom">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Selected <span className="text-[var(--primary-color)]">Works</span>
                </h1>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    A collection of projects where I've helped businesses and individuals achieve their digital goals through design, code, and strategy.
                </p>
            </div>
        </section>
    );
}