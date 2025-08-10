import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer
      className="relative py-10 text-white overflow-hidden"
      style={{ backgroundColor: '#222D51', fontFamily: 'Poppins' }}
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ 
            backgroundColor: '#40BEEE',
            animation: 'float 8s ease-in-out infinite'
          }}
        ></div>
        <div
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-3xl opacity-10 animate-pulse delay-300"
          style={{ 
            backgroundColor: '#3D53A3',
            animation: 'float 10s ease-in-out infinite reverse'
          }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full opacity-40 animate-bounce delay-1000"
          style={{ 
            backgroundColor: '#40BEEE',
            boxShadow: '0 0 15px #40BEEE'
          }}
        ></div>
        <div
          className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full opacity-30 animate-bounce delay-500"
          style={{ 
            backgroundColor: '#40BEEE',
            boxShadow: '0 0 10px #40BEEE'
          }}
        ></div>
        <div
          className="absolute top-1/4 right-1/3 w-1.5 h-1.5 rounded-full opacity-25 animate-bounce delay-1500"
          style={{ 
            backgroundColor: '#3D53A3',
            boxShadow: '0 0 8px #3D53A3'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        {/* Professionally Optimized Logo Area */}
        <div className="mb-5 animate-fadeIn">
          <div className="inline-block transform hover:scale-105 transition-all duration-700 cursor-pointer group">
            <div className="relative">
              {/* Professional logo container with proper sizing and effects */}
              <div className="relative bg-white/85 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl transform group-hover:shadow-3xl transition-all duration-700">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3D53A3]/20 via-transparent to-[#40BEEE]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img
                  src="src/assets/CompaniesLogo/logo1.png"
                  alt="VoidStack Logo"
                  className="h-30 w-60 object-contain mx-auto transform transition-all duration-700 group-hover:scale-110 relative z-10"
                  style={{
                    filter: "contrast(1.2) saturate(1.15) brightness(1.1)",
                    maxWidth: "280px"
                  }}
                />
                
                {/* Subtle glow effect around logo */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                     style={{
                       background: 'radial-gradient(circle at center, rgba(64, 190, 238, 0.3) 0%, transparent 70%)',
                       filter: 'blur(20px)'
                     }}>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Tagline */}
        <div className="mb-16 animate-slideUp">
          <p
            className="text-2xl md:text-3xl mb-5 opacity-95 transform hover:scale-105 transition-all duration-500 leading-relaxed tracking-wide"
            style={{ 
              fontWeight: 500, 
              color: '#40BEEE',
              textShadow: '0 4px 20px rgba(64, 190, 238, 0.25)'
            }}
          >
            Enhance Your Void Into Vision.
          </p>
          <div
            className="w-80 h-1 mx-auto rounded-full relative overflow-hidden"
            style={{
              background: 'linear-gradient(90deg, #3D53A3 0%, #40BEEE 100%)',
              boxShadow: '0 4px 15px rgba(64, 190, 238, 0.3)'
            }}
          >
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              style={{
                animation: 'shimmer 3s ease-in-out infinite',
                transform: 'translateX(-100%)'
              }}
            ></div>
          </div>
        </div>

        {/* Enhanced Social Links */}
        <div className="mb-16 flex justify-center space-x-6 animate-fadeIn delay-200">
          {[
            { icon: <Facebook size={20} />, bg: '#3D53A3', hoverBg: '#4A67C7', shadow: '#3D53A3' },
            { icon: <Twitter size={20} />, bg: '#40BEEE', hoverBg: '#5CC8F0', shadow: '#40BEEE' },
            { icon: <Linkedin size={20} />, bg: '#3D53A3', hoverBg: '#4A67C7', shadow: '#3D53A3' },
            { icon: <Instagram size={20} />, bg: '#40BEEE', hoverBg: '#5CC8F0', shadow: '#40BEEE' },
          ].map((item, i) => (
            <div
              key={i}
              className="w-14 h-14 rounded-2xl flex items-center justify-center cursor-pointer transform hover:scale-110 hover:-translate-y-3 transition-all duration-500 relative overflow-hidden group"
              style={{
                backgroundColor: item.bg,
                boxShadow: `0 10px 25px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = item.hoverBg;
                e.currentTarget.style.boxShadow = `0 15px 35px ${item.shadow}40, 0 0 25px ${item.shadow}60`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = item.bg;
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)';
              }}
            >
              <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="absolute inset-0 bg-white/15 rounded-2xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Divider */}
        <div className="relative mb-12">
          <div
            className="w-3/4 mx-auto h-0.5 relative overflow-hidden rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
          >
            <div 
              className="absolute inset-0 bg-gradient-to-r from-[#3D53A3] via-[#40BEEE] to-[#3D53A3] opacity-60"
              style={{
                animation: 'slideShine 4s ease-in-out infinite'
              }}
            ></div>
          </div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3D53A3] to-[#40BEEE] opacity-70"></div>
          </div>
        </div>

        {/* Enhanced Copyright */}
        <div className="bg-black/30 rounded-2xl p-8 backdrop-blur-xl animate-fadeIn delay-300 border border-white/8 relative overflow-hidden group hover:bg-black/40 transition-all duration-500">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3D53A3] to-[#40BEEE] opacity-15"></div>
          </div>
          
          <p className="opacity-90 text-lg relative z-10 transform group-hover:scale-105 transition-all duration-300 mb-2" style={{ fontWeight: 500 }}>
            © {new Date().getFullYear()} Voidstack Technologies. All rights reserved.
          </p>
          <p className="text-base opacity-70 relative z-10 tracking-wider transform group-hover:scale-105 transition-all duration-300" style={{ fontWeight: 400 }}>
            Crafted with passion • Powered by innovation
          </p>
          
          <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-[#40BEEE]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-[#3D53A3]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Enhanced Bottom Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 relative overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, #3D53A3 0%, #40BEEE 50%, #3D53A3 100%)',
        }}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          style={{
            animation: 'slideGlow 6s ease-in-out infinite'
          }}
        ></div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes slideShine {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        
        @keyframes slideGlow {
          0%, 100% { transform: translateX(-200%); }
          50% { transform: translateX(200%); }
        }
      `}</style>
    </footer>
  );
}

export default Footer;