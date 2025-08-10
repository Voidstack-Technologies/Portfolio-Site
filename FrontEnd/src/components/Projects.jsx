import { ExternalLink } from 'lucide-react';

const projectData = [
  {
    id: 1,
    title: 'Fluidra',
    description: 'A next-generation e-commerce solution with seamless navigation, optimized performance, and a delightful shopping experience.',
    image: '/ProjectMockups/2.png',
    link: 'https://www.fluidra.com'
  },
  {
    id: 2,
    title: 'Pool Supply Unlimited',
    description: 'An elegant and fully responsive restaurant website with online reservations, an interactive menu, and immersive imagery.',
    image: '/ProjectMockups/3.png',
    link: 'https://www.poolsupplyunlimited.com/pool'
  },
  {
    id: 3,
    title: 'Chop Barbershop',
    description: 'A user-friendly healthcare platform with secure appointment booking, patient dashboards, and telemedicine integration.',
    image: '/ProjectMockups/9.png',
    link: 'https://www.chopbarbershop.com/'
  },
  {
    id: 4,
    title: 'South Dakota School of Mines & Technology',
    description: 'A professional data visualization dashboard with real-time analytics, custom filters, and clean UI components.',
    image: '/ProjectMockups/5.png',
    link: 'https://www.sdsmt.edu/index.html'
  },
  {
    id: 5,
    title: 'Novo Nordisk',
    description: 'A high-conversion landing page tailored for mobile app launches with animated mockups and CTA-driven design.',
    image: '/ProjectMockups/6.png',
    link: 'https://www.novonordisk.com/'
  },
  {
   id: 6,
    title: 'Oleana Restaurant',
    description: 'A user-friendly healthcare platform with secure appointment booking, patient dashboards, and telemedicine integration.',
    image: '/ProjectMockups/10.png',
    link: 'https://www.oleanarestaurant.com/' 
  },
  {
    id: 7,
    title: 'Jude\'s Barbershop',
    description: 'A user-friendly healthcare platform with secure appointment booking, patient dashboards, and telemedicine integration.',
    image: '/ProjectMockups/8.png',
    link: 'https://www.judesbarbershop.com/'
  },
  {
    id: 8,
    title: 'CG School',
    description: 'A creative showcase for a professional photographer featuring dynamic galleries and smooth scrolling animations.',
    image: '/ProjectMockups/4.png',
    link: 'https://cgschool.in/EngDefault.aspx'
  },
  { 
    id: 9,
    title: 'Los Angeles Public Library',
    description: 'A user-friendly healthcare platform with secure appointment booking, patient dashboards, and telemedicine integration.',
    image: '/ProjectMockups/7.png',
    link: 'https://www.lapl.org/'
  },
];



function Projects() {

  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleLetsTalkClick = () => {
    alert('Contact form would open here!');
  };

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden"
      style={{
        backgroundColor: '#222D51',
        fontFamily: 'Poppins',
      }}
    >
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/10 blur-[200px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-cyan-400/10 blur-[150px]"></div>
      </div>

      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore a curated selection of our work — blending creativity, technology, and strategy to deliver experiences that truly connect.
          </p>
          <div className="w-40 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 bg-white"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300/3D53A3/FFFFFF?text=Project+Image';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                {/* Top Right Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white opacity-0 group-hover:opacity-100 transform group-hover:rotate-180 transition-all duration-500">
                  <ExternalLink size={16} />
                </div>
              </div>

              {/* Content */}
              <div className="relative bg-white rounded-b-2xl p-6 flex flex-col justify-between min-h-[200px]">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#222D51] group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => handleProjectClick(project.link)}
                    className="inline-flex items-center px-5 py-2.5 rounded-lg font-semibold text-white overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer z-10 relative"
                    style={{
                      background: 'linear-gradient(135deg, #3D53A3 0%, #40BEEE 100%)',
                    }}
                  >
                    <span className="mr-2">View Project</span>
                    <ExternalLink size={18} className="transition-transform group-hover:translate-x-1" />
                  </button>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-xs text-gray-500">Live</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 px-8 py-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">
            <span className="text-gray-300 font-medium">
              Ready to start your project?
            </span>
            <button 
              onClick={handleLetsTalkClick}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-semibold hover:from-blue-400 hover:to-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-md cursor-pointer"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
