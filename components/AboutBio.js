function AboutBio() {
    return (
        <section className="section-padding bg-white" data-name="about-bio" data-file="components/AboutBio.js">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-[var(--primary-color)]/20 rounded-2xl transform rotate-3"></div>
                            <img 
                                src="https://app.trickle.so/storage/public/images/usr_196e96caa8000001/a295c978-3017-4d2d-a66f-75aadc4fcab6.png" 
                                alt="Anwar Ali Sehar Profile" 
                                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                                <div className="flex items-center space-x-3">
                                    <div className="p-3 bg-[var(--primary-color)]/10 rounded-lg">
                                        <div className="icon-award text-[var(--primary-color)] text-xl"></div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium">Experience</p>
                                        <p className="text-lg font-bold text-slate-900">5+ Years</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">My Mission is to Help You Grow</h2>
                        <div className="space-y-6 text-slate-600 leading-relaxed">
                            <p>
                                Hello! I'm <strong>Anwar Ali Sehar</strong>. Based in Pakistan, I specialize in helping local businesses and startups find their footing in the digital world. My approach is simple: <strong>Technology should solve problems, not create them.</strong>
                            </p>
                            <p>
                                With a strong background in <strong>Web Development</strong> and <strong>Local SEO</strong>, I realized that many businesses were struggling not because they lacked a product, but because they lacked visibility. I started focusing on strategies that put local brands on the map.
                            </p>
                            <p>
                                Recently, I've pivoted towards <strong>Artificial Intelligence</strong>. I believe AI is the great equalizer, allowing small teams to do big things. I now build custom AI tools that automate workflows, making enterprise-level efficiency accessible to everyone.
                            </p>
                            <div className="pt-4">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Core Competencies:</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        'Local SEO Strategy', 'MERN Stack Development',
                                        'AI Tool Integration', 'Python Automation',
                                        'Business Consulting', 'Performance Optimization'
                                    ].map(skill => (
                                        <li key={skill} className="flex items-center text-sm">
                                            <div className="icon-circle-check text-[var(--primary-color)] mr-2 w-4 h-4"></div>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}