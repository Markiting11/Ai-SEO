function FixData() {
    const [status, setStatus] = React.useState('Ready to fix');
    const [logs, setLogs] = React.useState([]);

    const addLog = (msg) => setLogs(prev => [...prev, msg]);

    const fixImages = async () => {
        setStatus('Fixing...');
        setLogs([]);
        addLog('Starting database update...');

        try {
            // 1. Fetch all portfolio items
            addLog('Fetching portfolio items...');
            const result = await trickleListObjects('portfolio', 100, true);
            const items = result.items || [];
            addLog(`Found ${items.length} items in database.`);

            // 2. Define the correct images mapping
            const imageMap = {
                'Cosmetics Brand Store': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'Graphic Designer Portfolio': 'https://images.unsplash.com/photo-1626785774573-4b799314346d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'Polio Data Web App': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            };

            let updatedCount = 0;

            // 3. Iterate and update
            for (const item of items) {
                const title = item.objectData.title;
                
                // Check if this item needs an update (based on title match)
                // We use a partial match or exact match strategy
                let matchedKey = Object.keys(imageMap).find(key => title.includes(key));
                
                if (matchedKey) {
                    const newImage = imageMap[matchedKey];
                    
                    // Only update if image is different or missing
                    if (item.objectData.image !== newImage) {
                        addLog(`Updating "${title}"...`);
                        
                        await trickleUpdateObject('portfolio', item.objectId, {
                            ...item.objectData,
                            image: newImage
                        });
                        updatedCount++;
                        addLog(`Success: Updated image for "${title}"`);
                    } else {
                        addLog(`Skipping "${title}" (Image already correct).`);
                    }
                } else {
                    addLog(`Skipping "${title}" (No match found in fix map).`);
                }
            }

            setStatus('Completed');
            addLog(`----------------------------------------`);
            addLog(`Process Finished! Total records updated: ${updatedCount}`);
            
        } catch (error) {
            console.error(error);
            setStatus('Error');
            addLog(`Error: ${error.message}`);
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-2xl font-bold mb-6 text-slate-900">Database Image Fixer</h1>
            <p className="mb-6 text-slate-600">
                This utility will verify your portfolio items in the database and update any broken images with the correct high-quality versions.
            </p>
            
            <button 
                onClick={fixImages}
                disabled={status === 'Fixing...'}
                className={`px-6 py-3 rounded-lg font-bold text-white transition-colors ${
                    status === 'Fixing...' ? 'bg-slate-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'
                }`}
            >
                {status === 'Fixing...' ? 'Processing...' : 'Start Fix Process'}
            </button>

            <div className="mt-8 bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400 min-h-[200px] max-h-[400px] overflow-y-auto">
                {logs.length === 0 ? (
                    <span className="text-slate-500">// Logs will appear here...</span>
                ) : (
                    logs.map((log, i) => <div key={i} className="mb-1">&gt; {log}</div>)
                )}
            </div>
            
            {status === 'Completed' && (
                <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                    <p className="text-emerald-600 font-medium mb-4">Fix applied successfully! The database is now updated.</p>
                    <a href="index.html" className="inline-block px-6 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
                        Return to Homepage
                    </a>
                </div>
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FixData />);