function ServicesList() {
    const services = [
        {
            id: 'seo',
            title: 'Local SEO Mastery',
            icon: 'icon-map-pin',
            description: 'Put your business on the map literally. I specialize in optimizing Google Business Profiles and local citations to ensure customers find you first.',
            features: ['Google Business Profile Optimization', 'Local Keyword Research', 'Citation Building & Management', 'Review Management Strategy', 'Monthly Performance Reports'],
            color: 'emerald',
            image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'web',
            title: 'Web Development',
            icon: 'icon-layout',
            description: 'Your website is your digital storefront. I build lightning-fast, secure, and mobile-responsive websites that look great and convert visitors into buyers.',
            features: ['Custom Design & Development', 'Responsive (Mobile-First) Layouts', 'Speed Optimization', 'SEO-Friendly Structure', 'CMS Integration (WordPress/Custom)'],
            color: 'blue',
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'ai',
            title: 'AI Tools & Automation',
            icon: 'icon-cpu',
            description: 'Leverage the power of Artificial Intelligence. I develop custom AI tools and chatbots that automate repetitive tasks, saving you time and money.',
            features: ['Custom Chatbot Development', 'OpenAI/GPT Integration', 'Automated Content Generation', 'Workflow Automation Scripts', 'Data Analysis Tools'],
            color: 'purple',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'training',
            title: 'Training & Mentorship',
            icon: 'icon-graduation-cap',
            description: 'Want to learn how to do it yourself? I offer personalized training sessions on SEO strategies and basic web development to empower you and your team.',
            features: ['1-on-1 Mentorship', 'SEO Workshops for Teams', 'Coding Basics (HTML/CSS/JS)', 'Freelancing Guidance', 'Career Roadmap Planning'],
            color: 'orange',
            image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ];

    const getColorClasses = (color) => {
        const maps = {
            emerald: { text: 'text-[var(--primary-color)]', bg: 'bg-[var(--primary-color)]/10', border: 'border-[var(--primary-color)]/20', btn: 'bg-[var(--primary-color)] hover:bg-[var(--primary-dark)]' },
            blue: { text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200', btn: 'bg-blue-600 hover:bg-blue-700' },
            purple: { text: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200', btn: 'bg-purple-600 hover:bg-purple-700' },
            orange: { text: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200', btn: 'bg-orange-600 hover:bg-orange-700' },
        };
        return maps[color] || maps.emerald;
    };

    return (
        <section id="service-list" className="section-padding bg-white" data-name="services-list" data-file="components/ServicesList.js">
            <div className="container-custom space-y-24">
                {services.map((service, index) => {
                    const colors = getColorClasses(service.color);
                    const isEven = index % 2 === 0;
                    
                    return (
                        <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative group">
                                    <div className={`absolute -inset-4 ${colors.bg} rounded-2xl transform ${isEven ? 'rotate-2' : '-rotate-2'} transition-transform group-hover:rotate-0`}></div>
                                    <img 
                                        src={service.image} 
                                        alt={service.title} 
                                        className="relative rounded-2xl shadow-lg w-full object-cover h-80 lg:h-96"
                                    />
                                </div>
                            </div>
                            
                            {/* Content Side */}
                            <div className="w-full lg:w-1/2">
                                <div className={`inline-flex items-center justify-center p-3 rounded-xl ${colors.bg} ${colors.text} mb-6`}>
                                    <div className={`${service.icon} text-3xl`}></div>
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                
                                <div className="space-y-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-slate-700">
                                            <div className={`icon-check ${colors.text} mr-3 w-5 h-5`}></div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <a href="contact.html" className={`inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all ${colors.btn} shadow-md hover:shadow-lg transform hover:-translate-y-1`}>
                                    Get Started
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}