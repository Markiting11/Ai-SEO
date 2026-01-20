function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12" data-name="footer" data-file="components/Footer.js">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 rounded bg-[var(--primary-color)] flex items-center justify-center text-white">
                                <span className="font-bold">A</span>
                            </div>
                            <span className="font-bold text-lg">
                                <span className="text-white">Anwar Ali</span> <span className="text-[var(--primary-color)]">Sehar</span>
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Empowering local businesses with smart SEO strategies and custom AI-powered tools. Think Local, Build Smart, Grow Digital.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://web.facebook.com/arshad.ali.7146557" target="_blank" className="hover:text-[var(--primary-color)] transition-colors">
                                <div className="icon-facebook"></div>
                            </a>
                            <a href="https://www.linkedin.com/in/anwar-sehar" target="_blank" className="hover:text-[var(--primary-color)] transition-colors">
                                <div className="icon-linkedin"></div>
                            </a>
                            <a href="https://github.com/Markiting11" target="_blank" className="hover:text-[var(--primary-color)] transition-colors">
                                <div className="icon-github"></div>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="services.html" className="hover:text-[var(--primary-color)]">Local SEO</a></li>
                            <li><a href="services.html" className="hover:text-[var(--primary-color)]">Web Development</a></li>
                            <li><a href="services.html" className="hover:text-[var(--primary-color)]">AI Tool Development</a></li>
                            <li><a href="services.html" className="hover:text-[var(--primary-color)]">Web App Development</a></li>
                            <li><a href="services.html" className="hover:text-[var(--primary-color)]">Training & Mentorship</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="about.html" className="hover:text-[var(--primary-color)]">About Me</a></li>
                            <li><a href="portfolio.html" className="hover:text-[var(--primary-color)]">Portfolio</a></li>
                            <li><a href="blog.html" className="hover:text-[var(--primary-color)]">Blog</a></li>
                            <li><a href="contact.html" className="hover:text-[var(--primary-color)]">Contact</a></li>
                            <li><a href="admin.html" className="hover:text-[var(--primary-color)]">Admin Login</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-3">
                                <div className="icon-map-pin mt-1 text-[var(--primary-color)]"></div>
                                <span>Based in Pakistan, serving globally</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="icon-phone text-[var(--primary-color)]"></div>
                                <span>+92 345 984 2097</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="icon-mail text-[var(--primary-color)]"></div>
                                <a href="mailto:Arshad2097@gmail.com" className="hover:text-white">Arshad2097@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Anwar Ali Sehar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}