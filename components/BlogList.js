function BlogList() {
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        DB.getLatestBlogs(100).then(data => {
            setPosts(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div className="py-24 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
            </div>
        );
    }

    return (
        <section className="section-padding bg-slate-50" data-name="blog-list" data-file="components/BlogList.js">
            <div className="container-custom">
                {posts.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 text-slate-400 mb-4">
                            <div className="icon-book-open text-3xl"></div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">No Articles Yet</h3>
                        <p className="text-slate-600">Check back soon for the latest updates and insights.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map(post => (
                            <article key={post.objectId} className="card group h-full flex flex-col">
                                <div className="relative h-48 overflow-hidden bg-slate-200">
                                    {post.objectData.cover_image ? (
                                        <img 
                                            src={post.objectData.cover_image} 
                                            alt={post.objectData.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                                            <div className="icon-image text-4xl"></div>
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/95 text-xs font-bold uppercase tracking-wide text-slate-900 rounded shadow-sm">
                                            {post.objectData.category || 'General'}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center text-sm text-slate-500 mb-3 space-x-4">
                                        <span className="flex items-center">
                                            <div className="icon-calendar w-4 h-4 mr-1"></div>
                                            {new Date(post.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[var(--primary-color)] transition-colors line-clamp-2">
                                        {post.objectData.title}
                                    </h2>
                                    <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-1">
                                        {post.objectData.slug} 
                                        {/* Using slug as a short description placeholder if no excerpt field */}
                                    </p>
                                    <a href="#" className="inline-flex items-center text-sm font-semibold text-[var(--primary-color)] hover:text-[var(--primary-dark)] mt-auto">
                                        Read Article <div className="icon-arrow-right ml-1 w-4 h-4"></div>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}