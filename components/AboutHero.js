function AboutHero() {
    return (
        <section className="relative py-20 bg-slate-900 overflow-hidden" data-name="about-hero" data-file="components/AboutHero.js">
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
            <div className="container-custom relative z-10 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 text-[var(--primary-color)] text-sm font-semibold mb-4 backdrop-blur-sm">
                    My Journey
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    More Than Just A <span className="text-[var(--primary-color)]">Developer</span>
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    I am a digital problem solver, bridging the gap between local businesses and modern technology through SEO and Artificial Intelligence.
                </p>
            </div>
        </section>
    );
}