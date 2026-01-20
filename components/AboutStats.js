function AboutStats() {
    const stats = [
        { label: 'Projects Completed', value: '100+', icon: 'icon-folder-check' },
        { label: 'Happy Clients', value: '50+', icon: 'icon-users' },
        { label: 'Years Experience', value: '5+', icon: 'icon-calendar-check' },
        { label: 'Support Available', value: '24/7', icon: 'icon-clock' },
    ];

    return (
        <section className="py-16 bg-slate-900 text-white" data-name="about-stats" data-file="components/AboutStats.js">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group p-6 rounded-xl hover:bg-slate-800 transition-colors duration-300">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--primary-color)]/10 text-[var(--primary-color)] mb-4 group-hover:scale-110 transition-transform">
                                <div className={`${stat.icon} text-2xl`}></div>
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-slate-400">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}