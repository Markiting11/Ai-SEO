function ContactForm() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        service: 'General Inquiry',
        message: ''
    });
    const [status, setStatus] = React.useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        
        try {
            await DB.saveMessage({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                content: `Service Interest: ${formData.service}\n\nMessage: ${formData.message}`
            });
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', service: 'General Inquiry', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="lg:w-2/3 p-8 lg:p-12" data-name="contact-form" data-file="components/ContactForm.js">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            
            {status === 'success' && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg flex items-center">
                    <div className="icon-circle-check mr-2 text-xl"></div>
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                </div>
            )}

            {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center">
                    <div className="icon-circle-alert mr-2 text-xl"></div>
                    Something went wrong. Please try again or email me directly.
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                        <input 
                            type="email" 
                            name="email" 
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                        <input 
                            type="tel" 
                            name="phone" 
                            value={formData.phone}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="+1 (555) 000-0000"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Interested In</label>
                        <select 
                            name="service" 
                            value={formData.service}
                            onChange={handleChange}
                            className="input-field"
                        >
                            <option>General Inquiry</option>
                            <option>Local SEO Service</option>
                            <option>Web Development</option>
                            <option>AI Tool Development</option>
                            <option>Training / Mentorship</option>
                            <option>Work With Me (Hiring)</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea 
                        name="message" 
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="input-field resize-none"
                        placeholder="Tell me about your project or how I can help..."
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className={`btn btn-primary w-full md:w-auto ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {status === 'submitting' ? (
                        <span className="flex items-center">
                            <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                            Sending...
                        </span>
                    ) : (
                        <span className="flex items-center">
                            Send Message
                            <div className="icon-send ml-2 w-4 h-4"></div>
                        </span>
                    )}
                </button>
            </form>
        </div>
    );
}