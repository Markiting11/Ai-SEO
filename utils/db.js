// Database utility functions wrapping Trickle API
const DB = {
    async getPortfolioItems(limit = 6) {
        try {
            const result = await trickleListObjects('portfolio', 100, true);
            let items = result.items || [];
            
            // If no items in DB, return some mock data for display initially
            if (items.length === 0) {
                return [
                    {
                        objectId: 'mock1',
                        objectData: {
                            title: 'Graphic Designer Portfolio',
                            category: 'Website',
                            description: 'A vibrant and creative portfolio showcasing graphic design work with an immersive gallery layout.',
                            image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                            link: '#'
                        }
                    },
                    {
                        objectId: 'mock2',
                        objectData: {
                            title: 'Cosmetics Brand Store',
                            category: 'E-Commerce',
                            description: 'Modern e-commerce website for a cosmetics brand, focused on product presentation, smooth navigation, and conversion-ready design.',
                            image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                            link: 'https://shecosmetics.netlify.app/'
                        }
                    },
                    {
                        objectId: 'mock3',
                        objectData: {
                            title: 'Polio Data Web App',
                            category: 'Web App',
                            description: 'A comprehensive data visualization dashboard for tracking and analyzing health statistics in real-time.',
                            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                            link: '#'
                        }
                    },
                    {
                        objectId: 'mock4',
                        objectData: {
                            title: 'Psychologist Portfolio',
                            category: 'Website',
                            description: 'A clean, calm, and professional portfolio website designed for a psychologist.',
                            image: 'https://app.trickle.so/storage/public/images/usr_196e96caa8000001/91fab16c-e45a-4bfe-a55f-a3d7ab4661bc.png',
                            link: 'https://savera-naeem.lovable.app/'
                        }
                    }
                ].slice(0, limit);
            }
            return items.slice(0, limit);
        } catch (error) {
            console.error('Error fetching portfolio:', error);
            return [];
        }
    },

    async getLatestBlogs(limit = 3) {
        try {
             const result = await trickleListObjects('blog', limit, true);
             let items = result.items || [];
             
             if (items.length === 0) {
                 return [
                     {
                         objectId: 'demo-blog-1',
                         createdAt: new Date().toISOString(),
                         objectData: {
                             title: 'Why Local SEO is Crucial for Small Business Growth in 2026',
                             slug: 'In a digital-first world, appearing in local search results is no longer optional. Learn the key strategies to dominate your local market.',
                             category: 'Local SEO',
                             cover_image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                             status: 'published'
                         }
                     },
                     {
                         objectId: 'demo-blog-2',
                         createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
                         objectData: {
                             title: 'Automating Your Workflow with AI Tools',
                             slug: 'Discover how custom AI solutions can save your team hours of manual work every week. A guide for efficiency-focused business owners.',
                             category: 'AI Tools',
                             cover_image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                             status: 'published'
                         }
                     }
                 ].slice(0, limit);
             }
             
             return items;
        } catch (error) {
            console.error('Error fetching blogs:', error);
            return [];
        }
    },
    
    async saveMessage(data) {
        try {
            return await trickleCreateObject('message', data);
        } catch (error) {
            throw error;
        }
    }
};