import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const logoData = [
  { id: 1, category: 'Logo', image: '/Logo&Designs/logo/logo-1.png' },
  { id: 2, category: 'Logo', image: '/Logo&Designs/logo/logo-2.png' },
  { id: 3, category: 'Logo', image: '/Logo&Designs/logo/logo-3.png' },
  { id: 4, category: 'Logo', image: '/Logo&Designs/logo/logo-4.png' },
  { id: 5, category: 'Logo', image: '/Logo&Designs/logo/logo-5.png' },
  { id: 6, category: 'Logo', image: '/Logo&Designs/logo/logo-6.png' },
  { id: 7, category: 'Logo', image: '/Logo&Designs/logo/logo-7.png' },
  { id: 8, category: 'Logo', image: '/Logo&Designs/logo/logo-8.png' },
  { id: 9, category: 'Logo', image: '/Logo&Designs/logo/logo-9.png' },
  { id: 10, category: 'Logo', image: '/Logo&Designs/logo/logo-10.png' },
  { id: 11, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/1.png' },
  { id: 12, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/2.png' },
  { id: 13, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/3.png' },
  { id: 14, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/4.png' },
  { id: 15, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/5.png' },
  { id: 16, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/6.png' },
  { id: 17, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/7.png' },
  { id: 18, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/8.png' },
  { id: 19, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/9.png' },
  { id: 20, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/10.png' },
  { id: 21, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/11.png' },
  { id: 22, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/12.png' },
  { id: 23, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/13.png' },
  { id: 24, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/14.png' },
  { id: 25, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/15.png' },
  { id: 26, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/16.png' },
  { id: 27, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/17.png' },
  { id: 28, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/18.png' },
  { id: 29, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/19.png' },
  { id: 30, category: 'Flyers & Banners', image: '/Logo&Designs/flyers&banners/20.png' },
  { id: 31, category: 'Vector Art', image: '/Logo&Designs/vectorArt/vector-1.png' },
  { id: 32, category: 'Vector Art', image: '/Logo&Designs/vectorArt/vector-2.png' },
  { id: 33, category: 'Vector Art', image: '/Logo&Designs/vectorArt/vector-3.png' },
  { id: 34, category: 'Vector Art', image: '/Logo&Designs/vectorArt/vector-4.png' },
  { id: 35, category: 'Vector Art', image: '/Logo&Designs/vectorArt/vector-5.png' },
  { id: 36, category: 'Typography', image: '/Logo&Designs/typography/typo-1.png' },
  { id: 37, category: 'Typography', image: '/Logo&Designs/typography/typo-2.png' },
  { id: 38, category: 'Typography', image: '/Logo&Designs/typography/typo-3.png' },
  { id: 39, category: 'Typography', image: '/Logo&Designs/typography/typo-4.png' },
  { id: 40, category: 'Typography', image: '/Logo&Designs/typography/typo-5.png' },
  { id: 41, category: 'Minimalist Art', image: '/Logo&Designs/minimalistArt/minimal-1.png' },
  { id: 42, category: 'Minimalist Art', image: '/Logo&Designs/minimalistArt/minimal-2.png' },
  { id: 43, category: 'Minimalist Art', image: '/Logo&Designs/minimalistArt/minimal-3.png' },
  { id: 44, category: 'Minimalist Art', image: '/Logo&Designs/minimalistArt/minimal-4.png' },
  { id: 45, category: 'Minimalist Art', image: '/Logo&Designs/minimalistArt/minimal-5.png' },
  { id: 46, category: 'Minimalist Art', image: '/Logo&Designs/minimalistArt/minimal-6.png' },
  { id: 47, category: 'Minimalist Art', image: '/Logo&Designs/minimalistArt/minimal-7.png' },
  { id: 48, category: 'Cards & Covers', image: '/Logo&Designs/cards&covers/cover-1.png' },
  { id: 49, category: 'Cards & Covers', image: '/Logo&Designs/cards&covers/cover-2.png' },
  { id: 50, category: 'Cards & Covers', image: '/Logo&Designs/cards&covers/cover-3.png' },
  { id: 51, category: 'UI/UX Designs', image: '/Logo&Designs/UIUX_Designs/d1.png', link: 'https://www.figma.com/proto/ni6bJvj3GW5c6TIQAmaiBT/U-Transport-Mockup?node-id=0-1&t=2xo2S31zhs3YBREd-1' },
  { id: 52, category: 'UI/UX Designs', image: '/Logo&Designs/UIUX_Designs/d2.png', link: 'https://www.figma.com/proto/ddBnDxHPBCobFIEZ4FaNPo/YourCart-Mockup?node-id=0-1&t=YeAoEptwbnYjQWBI-1' },
  { id: 53, category: 'UI/UX Designs', image: '/Logo&Designs/UIUX_Designs/d3.png', link: 'https://www.figma.com/proto/qpjB3cOlVswGpncfIejEL3/NFT-Marketplace?node-id=0-1&t=Lep4mt7eR2KY36kj-1' },
  { id: 54, category: 'UI/UX Designs', image: '/Logo&Designs/UIUX_Designs/d4.png', link: 'https://www.figma.com/proto/2UL3Xht7eU82zPBX58RXMV/LLP?node-id=3-25&t=DhdkxqugwsXZe4yC-1' },
  { id: 55, category: 'UI/UX Designs', image: '/Logo&Designs/UIUX_Designs/d5.png', link: '' },
];

function Logos() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const categories = [
    'All', 'UI/UX Designs', 'Logo', 'Flyers & Banners', 'Vector Art', 'Typography',
    'Minimalist Art', 'Cards & Covers'
  ];

  const filteredItems = activeCategory === 'All'
    ? logoData
    : logoData.filter(item => item.category === activeCategory);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#f8fafc", fontFamily: "Poppins" }}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ background: "linear-gradient(145deg, #40BEEE, #3D53A3)" }}
        ></div>
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-pulse delay-1000"
          style={{ background: "linear-gradient(145deg, #3D53A3, #40BEEE)" }}
        ></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full opacity-50 animate-bounce" style={{ backgroundColor: "#40BEEE" }}></div>
        <div className="absolute top-2/3 left-1/4 w-3 h-3 rounded-full opacity-50 animate-bounce delay-700" style={{ backgroundColor: "#3D53A3" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-5 bg-gradient-to-r from-slate-700 via-blue-800 to-slate-700 bg-clip-text text-transparent leading-[1.3]"
            style={{ fontWeight: 700 }}>
            Logo & <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Designs</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our creative works — where modern aesthetics meet brand identity.
          </p>
          <div
            className="w-28 h-1 mx-auto mt-6 rounded-full"
            style={{
              background: "linear-gradient(90deg, #3D53A3 0%, #40BEEE 100%)",
            }}
          ></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`relative px-8 py-3 rounded-full font-medium transition-all duration-500 transform hover:scale-105 shadow-lg ${activeCategory === category
                  ? "text-white"
                  : "text-gray-700 bg-white border border-gray-200 hover:border-blue-300"
                }`}
              style={{
                backgroundColor: activeCategory === category ? "#3D53A3" : undefined,
                fontWeight: 500,
              }}
            >
              {activeCategory === category && (
                <div
                  className="absolute inset-0 rounded-full animate-pulse"
                  style={{
                    background:
                      "linear-gradient(45deg, rgba(61,83,163,0.8), rgba(64,190,238,0.8))",
                    opacity: 0.4,
                  }}
                ></div>
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentItems.map((item, index) => (
            <a
              key={item.id}
              href={item.link || ''}
              target={item.link ? "_blank" : undefined}
              rel={item.link ? "noopener noreferrer" : undefined}
              className={`group cursor-pointer transform hover:scale-[1.03] transition-all duration-500 ${item.link ? 'block' : 'no-underline'}`}
              style={{ animationDelay: `${index * 100}ms` }}
              aria-label={item.link ? `Visit ${item.category} design ${item.id} at ${item.link}` : `View ${item.category} design ${item.id}`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl bg-white backdrop-blur-sm border border-gray-100">
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.link ? `UI/UX Design ${item.id} linking to ${item.link}` : `Design ${item.id}`}
                    className="w-full h-64 object-contain transition-all duration-500 group-hover:scale-110"
                  />

                  {/* Overlay Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500 flex items-end p-4 rounded-2xl">
                    <div className="w-full flex justify-between items-center">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium">
                        {item.category}
                      </span>
                      {item.link && (
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                          <span className="w-3 h-3 border-2 border-white rounded-full animate-spin border-t-transparent"></span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-transform transform hover:scale-110 bg-white shadow-lg border border-gray-200 hover:border-blue-400"
            >
              <ChevronLeft size={20} />
            </button>

            {[...Array(Math.min(5, totalPages))].map((_, index) => {
              const pageNumber =
                currentPage <= 3
                  ? index + 1
                  : currentPage >= totalPages - 2
                    ? totalPages - 4 + index
                    : currentPage - 2 + index;

              if (pageNumber > totalPages) return null;

              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`w-12 h-12 rounded-full font-semibold transition-transform hover:scale-110 shadow-md ${currentPage === pageNumber
                      ? "bg-gradient-to-br from-blue-700 to-blue-500 text-white"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300"
                    }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-transform transform hover:scale-110 bg-white shadow-lg border border-gray-200 hover:border-blue-400"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Counter */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-blue-600">
              {(currentPage - 1) * itemsPerPage + 1}-
              {Math.min(currentPage * itemsPerPage, filteredItems.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-blue-600">
              {filteredItems.length}
            </span>{" "}
            designs
          </p>
        </div>
      </div>
    </section>
  );

}

export default Logos;