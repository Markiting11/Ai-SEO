function AdminSidebar() {
    const navItems = [
        { name: 'Dashboard', icon: 'icon-layout-dashboard', active: true },
        { name: 'Blog Posts', icon: 'icon-file-text', active: false },
        { name: 'Portfolio', icon: 'icon-folder-kanban', active: false },
        { name: 'Messages', icon: 'icon-mail', badge: 3, active: false },
        { name: 'Analytics', icon: 'icon-chart-bar', active: false },
        { name: 'Settings', icon: 'icon-settings', active: false },
    ];

    return (
        <aside className="hidden md:flex w-64 flex-col bg-slate-900 border-r border-slate-800" data-name="admin-sidebar" data-file="components/AdminSidebar.js">
            <div className="h-16 flex items-center px-6 border-b border-slate-800">
                <div className="flex items-center space-x-2 text-white">
                    <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center font-bold">A</div>
                    <span className="font-bold text-lg tracking-tight">Admin<span className="text-emerald-500">Panel</span></span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
                <nav className="px-3 space-y-1">
                    {navItems.map((item) => (
                        <a 
                            key={item.name}
                            href="#"
                            className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                                item.active 
                                    ? 'bg-emerald-500/10 text-emerald-400' 
                                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                            }`}
                        >
                            <div className={`${item.icon} mr-3 w-5 h-5 flex-shrink-0 ${item.active ? 'text-emerald-400' : 'text-slate-500 group-hover:text-white'}`}></div>
                            <span className="flex-1">{item.name}</span>
                            {item.badge && (
                                <span className="bg-emerald-500 text-white py-0.5 px-2 rounded-full text-xs font-bold">
                                    {item.badge}
                                </span>
                            )}
                        </a>
                    ))}
                </nav>

                <div className="mt-8 px-6">
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Quick Actions</h3>
                    <div className="space-y-2">
                        <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                            <div className="icon-plus-circle mr-3 w-4 h-4"></div>
                            New Blog Post
                        </button>
                        <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                            <div className="icon-cloud-upload mr-3 w-4 h-4"></div>
                            Upload Project
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-4 border-t border-slate-800">
                <div className="flex items-center">
                    <img 
                        src="https://app.trickle.so/storage/public/images/usr_196e96caa8000001/a295c978-3017-4d2d-a66f-75aadc4fcab6.png" 
                        alt="Profile" 
                        className="h-9 w-9 rounded-full border border-slate-600 object-cover"
                    />
                    <div className="ml-3">
                        <p className="text-sm font-medium text-white">Anwar Ali</p>
                        <p className="text-xs text-slate-500">Super Admin</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}