function AdminLogin({ onLogin }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Simulate API call delay
        setTimeout(() => {
            // Demo validation
            if (email === 'admin@anwarali.com' && password === 'admin123') {
                onLogin(true);
            } else {
                setError('Invalid credentials. Try admin@anwarali.com / admin123');
                setLoading(false);
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-slate-900" data-name="admin-login" data-file="components/AdminLogin.js">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative z-10 border border-slate-800/10">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 mb-4">
                        <div className="icon-lock-keyhole text-3xl text-emerald-600"></div>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Admin Portal</h2>
                    <p className="text-slate-500 text-sm mt-2">Secure access for Anwar Ali Sehar</p>
                </div>

                {error && (
                    <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg flex items-center animate-shake">
                        <div className="icon-circle-alert mr-2"></div>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <div className="icon-mail text-slate-400"></div>
                            </div>
                            <input 
                                type="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input-field pl-10"
                                placeholder="name@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-1.5">
                            <label className="block text-sm font-medium text-slate-700">Password</label>
                            <a href="#" className="text-xs font-medium text-emerald-600 hover:text-emerald-500">Forgot password?</a>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <div className="icon-key text-slate-400"></div>
                            </div>
                            <input 
                                type="password" 
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-field pl-10"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input 
                            id="remember-me" 
                            type="checkbox" 
                            className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-slate-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600">
                            Remember me
                        </label>
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className={`w-full btn btn-primary py-3 text-base shadow-lg shadow-emerald-200 ${loading ? 'opacity-80 cursor-wait' : ''}`}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <div className="animate-spin -ml-1 mr-2 h-4 w-4 text-white border-2 border-white border-t-transparent rounded-full"></div>
                                Authenticating...
                            </span>
                        ) : (
                            'Sign In to Dashboard'
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center border-t border-slate-100 pt-6">
                    <p className="text-xs text-slate-400">
                        &copy; {new Date().getFullYear()} Anwar Ali Sehar. All rights reserved. <br/>
                        <a href="index.html" className="text-emerald-600 hover:underline mt-2 inline-block">Back to Website</a>
                    </p>
                </div>
            </div>
        </div>
    );
}