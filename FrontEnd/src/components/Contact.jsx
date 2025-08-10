import { Phone, Mail, MessageCircle } from 'lucide-react';

function Contact() {
  return (
     <section id="contact" className="relative py-24 overflow-hidden" style={{ fontFamily: 'Poppins' }}>
    {/* Dynamic Background with Gradient Mesh */}
    <div className="absolute inset-0" 
         style={{ 
           background: `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)`,
         }}></div>
    
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 -right-32 w-80 h-80 rounded-full opacity-10 animate-pulse" 
           style={{ backgroundColor: '#3D53A3' }}></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 animate-pulse delay-1000" 
           style={{ backgroundColor: '#40BEEE' }}></div>
      <div className="absolute top-1/3 left-1/4 w-6 h-6 rounded-full opacity-20 animate-bounce delay-300"
           style={{ backgroundColor: '#40BEEE' }}></div>
      <div className="absolute top-2/3 right-1/4 w-4 h-4 rounded-full opacity-30 animate-bounce delay-700"
           style={{ backgroundColor: '#3D53A3' }}></div>
      <div className="absolute bottom-1/3 left-1/2 w-3 h-3 rounded-full opacity-25 animate-bounce delay-500"
           style={{ backgroundColor: '#40BEEE' }}></div>
    </div>

    {/* Floating Geometric Shapes */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/6 w-2 h-16 bg-gradient-to-b from-blue-400 to-transparent opacity-30 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/6 w-2 h-20 bg-gradient-to-b from-cyan-400 to-transparent opacity-20 -rotate-45 animate-pulse delay-500"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Enhanced Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-slate-700 via-blue-800 to-slate-700 bg-clip-text text-transparent" 
            style={{ fontWeight: 700 }}>
          Contact <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Us</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontWeight: 400 }}>
          Ready to transform your vision into reality? Let's start a conversation about your next project
        </p>
        <div className="flex justify-center mt-8">
          <div className="w-32 h-1 rounded-full"
               style={{ background: 'linear-gradient(90deg, #3D53A3 0%, #40BEEE 100%)' }}></div>
        </div>
      </div>

      {/* Enhanced Contact Cards Grid */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div className="group relative">
            {/* Gradient Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
            
            <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
                 style={{ animationDelay: '0.1s' }}>
              
              {/* Card Background Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 transform rotate-12 group-hover:rotate-45 transition-transform duration-700"
                   style={{ backgroundColor: '#3D53A3' }}></div>
              
              <div className="relative p-8 text-center">
                {/* Enhanced Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
                  <a
                    href="tel:+918758706895"
                    className="relative w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-2xl"
                    style={{ background: 'linear-gradient(135deg, #3D53A3 0%, #40BEEE 100%)' }}
                  >
                    <Phone size={28} className="text-white transform group-hover:rotate-12 transition-transform duration-300" />
                    
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
                  </a>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300" 
                    style={{ color: '#222D51', fontWeight: 700 }}>
                  Phone
                </h3>
                
                <a
                  href="tel:+918758706895"
                  className="inline-block text-lg font-medium hover:text-blue-500 transition-all duration-300 hover:scale-105 transform"
                  style={{ color: '#333333', fontWeight: 500 }}
                >
                  +91 82386 38297
                </a>
                
                {/* Status Indicator */}
                <div className="flex items-center justify-center mt-4 space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500 font-medium">Available Now</span>
                </div>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
            
            <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
                 style={{ animationDelay: '0.2s' }}>
              
              <div className="absolute top-0 left-0 w-32 h-32 opacity-5 transform -rotate-12 group-hover:-rotate-45 transition-transform duration-700"
                   style={{ backgroundColor: '#40BEEE' }}></div>
              
              <div className="relative p-8 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse delay-300"></div>
                  <a
                    href="mailto:voidstacktech@gmail.com"
                    className="relative w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-2xl"
                    style={{ background: 'linear-gradient(135deg, #40BEEE 0%, #3D53A3 100%)' }}
                  >
                    <Mail size={28} className="text-white transform group-hover:-rotate-12 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
                  </a>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-600 transition-colors duration-300" 
                    style={{ color: '#222D51', fontWeight: 700 }}>
                  Email
                </h3>
                
                <a
                  href="mailto:voidstacktech@gmail.com"
                  className="inline-block text font-medium hover:text-cyan-500 transition-all duration-300 hover:scale-105 transform break-words"
                  style={{ color: '#333333', fontWeight: 500 }}
                >
                  voidstacktech@gmail.com
                </a>
                
                <div className="flex items-center justify-center mt-4 space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                  <span className="text-xs text-gray-500 font-medium">Quick Response</span>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
            
            <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
                 style={{ animationDelay: '0.3s' }}>
              
              <div className="absolute bottom-0 right-0 w-28 h-28 opacity-5 transform rotate-45 group-hover:rotate-90 transition-transform duration-700"
                   style={{ backgroundColor: '#25D366' }}></div>
              
              <div className="relative p-8 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse delay-500"></div>
                  <a
                    href="https://wa.me/+918758706895"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-2xl"
                    style={{ background: 'linear-gradient(135deg, #25D366 0%, #3D53A3 100%)' }}
                  >
                    <MessageCircle size={28} className="text-white transform group-hover:rotate-12 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
                  </a>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors duration-300" 
                    style={{ color: '#222D51', fontWeight: 700 }}>
                  WhatsApp
                </h3>
                
                <a
                  href="https://wa.me/+918758706895"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-lg font-medium hover:text-green-500 transition-all duration-300 hover:scale-105 transform"
                  style={{ color: '#333333', fontWeight: 500 }}
                >
                  +91 87587 06895
                </a>
                
                <div className="flex items-center justify-center mt-4 space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-400"></div>
                  <span className="text-xs text-gray-500 font-medium">Instant Chat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="text-center mt-20">
        <div className="inline-flex items-center space-x-6 px-10 py-6 rounded-2xl bg-white/80 backdrop-blur-md shadow-2xl border border-white/50">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400"></div>
            </div>
            <span className="text-gray-700 font-medium" style={{ fontWeight: 500 }}>
              We typically respond within 2 hours
            </span>
          </div>
          <div className="w-px h-8 bg-gray-300"></div>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold hover:from-blue-400 hover:to-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Project
          </button>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Contact;