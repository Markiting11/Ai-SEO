function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const currentPath = window.location.pathname;
    
    const isActive = (path) => {
        if (path === '/' && (currentPath === '/' || currentPath === '/index.html')) return true;
        return currentPath.includes(path);
    };

    const navLinks = [
        { name: 'Home', path: 'index.html' },
        { name: 'About', path: 'about.html' },
        { name: 'Services', path: 'services.html' },
        { name: 'Portfolio', path: 'portfolio.html' },
        { name: 'Blog', path: 'blog.html' },
        { name: 'Contact', path: 'contact.html' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100" data-name="header" data-file="components/Header.js">
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="index.html" className="flex items-center space-x-3 group">
                        <img 
                            src="https://app.trickle.so/storage/public/images/usr_196e96caa8000001/da6113d9-5f32-4231-92ea-9e8bd0c7811c.png" 
                            alt="Anwar Ali Sehar Logo" 
                            className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="flex flex-col">
                            <span className="font-bold text-lg leading-none transition-colors">
                                <span className="text-slate-900">Anwar Ali</span> <span className="text-[var(--primary-color)]">Sehar</span>
                            </span>
                            <span className="text-xs font-medium">
                                <span className="text-[var(--primary-color)]">SEO &</span> <span className="text-slate-900">AI Solutions</span>
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.path}
                                className={`text-sm font-medium transition-colors hover:text-[var(--primary-color)] ${isActive(link.path) ? 'text-[var(--primary-color)]' : 'text-slate-600'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="contact.html" className="btn btn-primary text-sm py-2 px-4">
                            Work With Me
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden p-2 text-slate-600 hover:text-[var(--primary-color)]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className={isMenuOpen ? "icon-x text-2xl" : "icon-menu text-2xl"}></div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg">
                    <div className="px-4 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.path}
                                className={`block text-base font-medium ${isActive(link.path) ? 'text-[var(--primary-color)]' : 'text-slate-600'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="contact.html" className="btn btn-primary w-full text-center mt-4">
                            Work With Me
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}