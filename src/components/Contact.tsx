import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to experience automotive excellence? Let's start your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
                <p className="text-gray-400">Mon-Fri 9am-6pm EST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-400">info@velocityx.com</p>
                <p className="text-gray-400">sales@velocityx.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Visit Showroom</h3>
                <p className="text-gray-400">123 Performance Drive</p>
                <p className="text-gray-400">Los Angeles, CA 90210</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 border border-white/10">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:border-red-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your dream car..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-red-600/50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/10 text-center text-gray-400">
        <p>&copy; 2025 VelocityX. Crafted for automotive excellence.</p>
      </div>
    </section>
  );
}
