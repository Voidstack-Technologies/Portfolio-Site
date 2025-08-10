function Header({ scrollToSection }) {
  return (
    <header
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/90 shadow-xl border-b border-white/30 transition-all duration-500"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Brand */}
          <div
            className="flex items-center space-x-3 cursor-pointer group transform transition-all duration-500 hover:scale-105"
            onClick={() => scrollToSection("hero")}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500">
              <img
                src="CompaniesLogo/logo1.png"
                alt="VoidStack Logo"
                className="h-18 w-40 object-contain transform transition-all duration-500"
                style={{
                  filter: "drop-shadow(0 4px 12px rgba(61, 83, 163, 0.2))"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#3D53A3]/10 to-[#40BEEE]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-12">
            <button
              onClick={() => scrollToSection("hero")}
              className="relative font-semibold text-lg transition-all duration-500 hover:text-[#40BEEE] group transform hover:scale-105"
              style={{ color: "#3D53A3", fontWeight: 600 }}
            >
              <span className="relative z-10">Portfolio</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#3D53A3] to-[#40BEEE] transition-all duration-500 group-hover:w-full group-hover:left-0 rounded-full shadow-sm"></span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#3D53A3]/5 to-[#40BEEE]/5 opacity-0 group-hover:opacity-100 transition-all duration-500 -m-2"></div>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="relative font-semibold text-lg transition-all duration-500 hover:text-[#40BEEE] group transform hover:scale-105"
              style={{ color: "#2D3748", fontWeight: 600 }}
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#40BEEE] to-[#3D53A3] transition-all duration-500 group-hover:w-full group-hover:left-0 rounded-full shadow-sm"></span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#40BEEE]/5 to-[#3D53A3]/5 opacity-0 group-hover:opacity-100 transition-all duration-500 -m-2"></div>
            </button>
          </nav>
        </div>
      </div>
      
      {/* Subtle bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3D53A3]/20 to-transparent"></div>
    </header>
  );
}

export default Header;