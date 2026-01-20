function ServicesPreview() {
    const services = [
        {
            icon: 'icon-map-pin',
            title: 'Local SEO',
            description: 'Dominating local search results with Google Business Profile optimization and targeted keywords to bring customers to your door.',
            colorClass: 'text-[var(--primary-color)]',
            bgClass: 'bg-[var(--primary-color)]/10',
            hoverBorder: 'hover:border-[var(--primary-color)]/30'
        },
        {
            icon: 'icon-monitor',
            title: 'Web Development',
            description: 'Building fast, responsive, and modern websites that convert visitors into loyal clients using the latest technologies.',
            colorClass: 'text-blue-600',
            bgClass: 'bg-blue-100',
            hoverBorder: 'hover:border-blue-200'
        },
        {
            icon: 'icon-wand',
            title: 'AI Tools & Apps',
            description: 'Developing custom AI-powered web apps and automation tools to streamline your workflows and solve unique business problems.',
            colorClass: 'text-purple-600',
            bgClass: 'bg-purple-100',
            hoverBorder: 'hover:border-purple-200'
        },
        {
            icon: 'icon-chart-bar',
            title: 'Business Growth',
            description: 'Strategic consulting and data-driven lead generation systems designed to scale your revenue and optimize operations.',
            colorClass: 'text-orange-600',
            bgClass: 'bg-orange-100',
            hoverBorder: 'hover:border-orange-200'
        }
    ];

    return (
        <section className="section-padding bg-white" data-name="services-preview" data-file="components/ServicesPreview.js">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">What I Do</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Combining technical expertise with local market understanding to deliver comprehensive digital solutions.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className={`p-6 rounded-2xl bg-white border border-slate-100 shadow-sm ${service.hoverBorder} hover:shadow-xl transition-all duration-300 group hover:-translate-y-2`}>
                            <div className={`w-14 h-14 rounded-xl ${service.bgClass} flex items-center justify-center mb-6 transition-colors duration-300`}>
                                <div className={`${service.icon} text-2xl ${service.colorClass}`}></div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                                {service.description}
                            </p>
                            <a href="services.html" className={`inline-flex items-center font-semibold text-sm ${service.colorClass} hover:opacity-80 transition-opacity`}>
                                Learn more <div className="icon-arrow-right ml-1 w-4 h-4"></div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}