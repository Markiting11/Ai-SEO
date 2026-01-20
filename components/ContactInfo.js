function ContactInfo() {
    return (
        <div className="lg:w-1/3 bg-slate-900 text-white p-8 lg:p-12" data-name="contact-info" data-file="components/ContactInfo.js">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-8">
                <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--primary-color)]/20 flex items-center justify-center flex-shrink-0 text-[var(--primary-color)]">
                        <div className="icon-mail text-xl"></div>
                    </div>
                    <div>
                        <p className="text-sm text-slate-400 mb-1">Email Me</p>
                        <a href="mailto:Arshad2097@gmail.com" className="font-medium hover:text-[var(--primary-color)] transition-colors">Arshad2097@gmail.com</a>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--primary-color)]/20 flex items-center justify-center flex-shrink-0 text-[var(--primary-color)]">
                        <div className="icon-phone text-xl"></div>
                    </div>
                    <div>
                        <p className="text-sm text-slate-400 mb-1">Call/WhatsApp</p>
                        <p className="font-medium">+92 345 984 2097</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--primary-color)]/20 flex items-center justify-center flex-shrink-0 text-[var(--primary-color)]">
                        <div className="icon-map-pin text-xl"></div>
                    </div>
                    <div>
                        <p className="text-sm text-slate-400 mb-1">Location</p>
                        <p className="font-medium">Pakistan (Serving Globally)</p>
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-12 border-t border-slate-800">
                <h4 className="font-bold mb-4">Connect on Social</h4>
                <div className="flex space-x-4">
                    <a href="https://web.facebook.com/arshad.ali.7146557" target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                        <div className="icon-facebook"></div>
                    </a>
                    <a href="https://www.linkedin.com/in/anwar-sehar" target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                        <div className="icon-linkedin"></div>
                    </a>
                    <a href="https://github.com/Markiting11" target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                        <div className="icon-github"></div>
                    </a>
                </div>
            </div>
        </div>
    );
}