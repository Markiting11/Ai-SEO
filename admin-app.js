function AdminApp() {
    // Simple state to simulate authentication for demo purposes
    // In a real app, this would check a token in localStorage or cookie
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        // Check for existing session
        const session = localStorage.getItem('admin_session');
        if (session === 'true') {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const handleLogin = (success) => {
        if (success) {
            localStorage.setItem('admin_session', 'true');
            setIsAuthenticated(true);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_session');
        setIsAuthenticated(false);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {isAuthenticated ? (
                <div className="flex h-screen overflow-hidden">
                    <AdminSidebar />
                    <div className="flex-1 flex flex-col overflow-hidden">
                        <AdminHeader onLogout={handleLogout} />
                        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-6">
                            <AdminDashboard />
                        </main>
                    </div>
                </div>
            ) : (
                <AdminLogin onLogin={handleLogin} />
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AdminApp />);