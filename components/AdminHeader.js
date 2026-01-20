function AdminHeader({ onLogout }) {
    return (
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 z-10" data-name="admin-header" data-file="components/AdminHeader.js">
            <div className="flex items-center md:hidden">
                <button className="text-slate-500 hover:text-slate-700">
                    <div className="icon-menu text-2xl"></div>
                </button>
            </div>

            <div className="flex items-center">
                <div className="hidden md:flex items-center text-slate-400 text-sm">
                    <span className="mr-2">Pages</span>
                    <div className="icon-chevron-right w-4 h-4 mr-2"></div>
                    <span className="font-medium text-slate-800">Dashboard</span>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
                    <div className="icon-bell text-xl"></div>
                    <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                </button>
                
                <div className="h-6 w-px bg-slate-200 mx-2"></div>
                
                <a href="index.html" target="_blank" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center">
                    View Website
                    <div className="icon-external-link ml-1 w-3 h-3"></div>
                </a>
                
                <button 
                    onClick={onLogout}
                    className="flex items-center text-sm font-medium text-slate-600 hover:text-red-600 transition-colors"
                >
                    <div className="icon-log-out mr-1 w-4 h-4"></div>
                    Logout
                </button>
            </div>
        </header>
    );
}