function BlogHero() {
    return (
        <section className="relative py-20 bg-slate-900 overflow-hidden" data-name="blog-hero" data-file="components/BlogHero.js">
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1499750310159-5b5f22693851?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90"></div>
            <div className="container-custom relative z-10 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 text-[var(--primary-color)] text-sm font-semibold mb-4 backdrop-blur-sm">
                    Knowledge Hub
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Insights on <span className="text-[var(--primary-color)]">SEO & AI</span>
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    Practical guides, industry updates, and strategies to help you navigate the digital landscape.
                </p>
            </div>
        </section>
    );
}