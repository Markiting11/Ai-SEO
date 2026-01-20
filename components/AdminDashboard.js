function AdminDashboard() {
    const stats = [
        { title: 'Total Views', value: '12,450', change: '+12%', isPositive: true, icon: 'icon-eye', color: 'blue' },
        { title: 'New Messages', value: '45', change: '+5', isPositive: true, icon: 'icon-mail', color: 'emerald' },
        { title: 'Portfolio Clicks', value: '890', change: '-2%', isPositive: false, icon: 'icon-mouse-pointer-click', color: 'purple' },
        { title: 'Blog Reads', value: '3,200', change: '+18%', isPositive: true, icon: 'icon-book-open', color: 'orange' },
    ];

    React.useEffect(() => {
        // Simple chart initialization
        const ctx = document.getElementById('viewsChart');
        if (ctx) {
             // Destroy existing chart if any (though typically handled by React refs/cleanup in stricter setups)
            const existingChart = ChartJS.getChart(ctx);
            if (existingChart) existingChart.destroy();

            new ChartJS(ctx, {
                type: 'line',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Visitors',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: true,
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { beginAtZero: true, grid: { borderDash: [2, 4], color: '#f1f5f9' } },
                        x: { grid: { display: false } }
                    }
                }
            });
        }
    }, []);

    return (
        <div data-name="admin-dashboard" data-file="components/AdminDashboard.js">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
                <p className="text-slate-500">Welcome back, here's what's happening with your website today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className="card p-6 flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500 mb-1">{stat.title}</p>
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                            <span className={`text-xs font-bold ${stat.isPositive ? 'text-emerald-600' : 'text-red-500'} flex items-center`}>
                                <div className={stat.isPositive ? 'icon-trending-up mr-1 w-3 h-3' : 'icon-trending-down mr-1 w-3 h-3'}></div>
                                {stat.change} <span className="text-slate-400 font-normal ml-1">vs last week</span>
                            </span>
                        </div>
                        <div className={`p-3 rounded-lg bg-${stat.color}-50 text-${stat.color}-600`}>
                            <div className={`${stat.icon} text-xl`}></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart */}
                <div className="lg:col-span-2 card p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-slate-900">Traffic Analytics</h3>
                        <select className="bg-slate-50 border border-slate-200 text-slate-600 text-sm rounded-lg px-3 py-1 outline-none">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                            <option>This Year</option>
                        </select>
                    </div>
                    <div className="h-80 relative">
                        <canvas id="viewsChart"></canvas>
                    </div>
                </div>

                {/* Recent Activity / Messages */}
                <div className="card p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Recent Messages</h3>
                    <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm">
                                    {['JD', 'AS', 'MK'][i-1]}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-slate-900 truncate">
                                        {['John Doe', 'Sarah Smith', 'Mike Johnson'][i-1]}
                                    </p>
                                    <p className="text-xs text-slate-500 truncate mb-1">
                                        {['Looking for SEO services...', 'Question about AI tools', 'Partnership opportunity'][i-1]}
                                    </p>
                                    <p className="text-xs text-slate-400">2 hours ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 btn btn-outline text-sm py-2">
                        View All Messages
                    </button>
                </div>
            </div>
            
             <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-slate-900">Quick Post</h3>
                        <div className="icon-edit-3 text-slate-400"></div>
                    </div>
                    <div className="space-y-4">
                         <input type="text" placeholder="Post Title" className="input-field py-2" />
                         <textarea placeholder="What's on your mind?" className="input-field py-2 h-24 resize-none"></textarea>
                         <div className="flex justify-end">
                            <button className="btn btn-primary text-sm">Save Draft</button>
                         </div>
                    </div>
                </div>
                 <div className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-slate-900">System Status</h3>
                        <div className="icon-activity text-slate-400"></div>
                    </div>
                    <div className="space-y-4">
                         <div className="flex items-center justify-between">
                             <span className="text-sm text-slate-600">Database Connection</span>
                             <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                                 <div className="w-2 h-2 bg-emerald-500 rounded-full mr-1.5"></div>
                                 Operational
                             </span>
                         </div>
                         <div className="flex items-center justify-between">
                             <span className="text-sm text-slate-600">API Latency</span>
                             <span className="text-sm font-medium text-slate-900">24ms</span>
                         </div>
                         <div className="flex items-center justify-between">
                             <span className="text-sm text-slate-600">Last Backup</span>
                             <span className="text-sm font-medium text-slate-900">2 hours ago</span>
                         </div>
                         <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2">
                             <div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '98%'}}></div>
                         </div>
                         <p className="text-xs text-slate-400 text-center pt-1">System healthy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}