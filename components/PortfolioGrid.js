function PortfolioGrid() {
    const [filter, setFilter] = React.useState('All');
    const [items, setItems] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        // Fetch all items initially
        DB.getPortfolioItems(100).then(data => {
            setItems(data);
            setLoading(false);
        });
    }, []);

    const categories = ['All', 'Website', 'AI Tool', 'SEO', 'E-Commerce'];

    const filteredItems = filter === 'All' 
        ? items 
        : items.filter(item => item.objectData.category === filter || item.objectData.category.includes(filter));

    if (loading) {
        return (
            <div className="py-20 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
            </div>
        );
    }

    return (
        <section className="section-padding bg-slate-50" data-name="portfolio-grid" data-file="components/PortfolioGrid.js">
            <div className="container-custom">
                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                filter === cat 
                                    ? 'bg-[var(--primary-color)] text-white shadow-md' 
                                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                {filteredItems.length === 0 ? (
                    <div className="text-center py-12 text-slate-500">No projects found in this category yet.</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredItems.map((item) => (
                            <div key={item.objectId} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full">
                                <div className="relative h-56 overflow-hidden bg-slate-200">
                                    {item.objectData.image ? (
                                        <img 
                                            src={item.objectData.image} 
                                            alt={item.objectData.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-300">
                                            <div className="icon-image text-5xl"></div>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <a href={item.objectData.link} target="_blank" className="p-3 bg-white rounded-full text-slate-900 hover:text-[var(--primary-color)] transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                            <div className="icon-external-link text-xl"></div>
                                        </a>
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/95 text-xs font-bold uppercase tracking-wide text-slate-900 rounded shadow-sm">
                                            {item.objectData.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[var(--primary-color)] transition-colors">
                                        {item.objectData.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-1">
                                        {item.objectData.description}
                                    </p>
                                    <div className="pt-4 border-t border-slate-100 mt-auto">
                                        <a 
                                            href={item.objectData.link} 
                                            target="_blank" 
                                            className="inline-flex items-center text-sm font-semibold text-[var(--primary-color)] hover:text-[var(--primary-dark)]"
                                        >
                                            View Project <div className="icon-arrow-right ml-1 w-4 h-4"></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}