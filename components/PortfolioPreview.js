function PortfolioPreview() {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        DB.getPortfolioItems(3).then(data => setItems(data));
    }, []);

    return (
        <section className="section-padding bg-slate-50" data-name="portfolio-preview" data-file="components/PortfolioPreview.js">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
                        <p className="text-slate-600 max-w-xl">
                            A selection of websites, tools, and SEO campaigns that have driven real growth.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <a href="portfolio.html" className="btn btn-outline">
                            View All Projects
                        </a>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <div key={item.objectId} className="card group">
                            <div className="relative h-48 bg-slate-200 overflow-hidden">
                                {item.objectData.image ? (
                                    <img 
                                        src={item.objectData.image} 
                                        alt={item.objectData.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                                        <div className="icon-image text-4xl"></div>
                                    </div>
                                )}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold uppercase tracking-wide text-slate-900 rounded-md shadow-sm">
                                        {item.objectData.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[var(--primary-color)] transition-colors">
                                    {item.objectData.title}
                                </h3>
                                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                                    {item.objectData.description}
                                </p>
                                <a 
                                    href={item.objectData.link} 
                                    target="_blank" 
                                    className="inline-flex items-center text-sm font-semibold text-[var(--primary-color)] hover:text-[var(--primary-dark)]"
                                >
                                    Visit Site <div className="icon-external-link ml-1 w-3 h-3"></div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}