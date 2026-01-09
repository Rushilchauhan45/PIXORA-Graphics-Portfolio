import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

// Import images using ?url to get the path
import paridhan2 from '@/assets/portfolio/paridhan-2.png'
import paridhan3 from '@/assets/portfolio/paridhan-3.png'
import paridhan5 from '@/assets/portfolio/paridhan-5.png'
import paridhan6 from '@/assets/portfolio/paridhan-6.png'
import cardFront from '@/assets/portfolio/card-front.png'
import cardBack from '@/assets/portfolio/card-back.png'
import sipeatLogo from '@/assets/portfolio/sipeat-logo.png'
import crazyWorldLogo from '@/assets/portfolio/crazy-world.png'
import nlDevelopersLogo from '@/assets/portfolio/nl-developers.png'
import glFoodLogo from '@/assets/portfolio/gl-food-products.png'
import jodsEsportsLogo from '@/assets/portfolio/jods-esports.png'
import msEnterpriseLogo from '@/assets/portfolio/ms-enterprise.png'

const Portfolio = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [carouselIndex, setCarouselIndex] = useState<{ [key: number]: number }>({})

  const portfolioItems = [
    {
      id: 1,
      title: 'Paridhan Purple Texture Logo',
      image: paridhan6,
      description: 'Elegant purple fabric texture with embossed logo design',
    },
    
    {
      id: 3,
      title: 'Paridhan Minimal White Logo',
      image: paridhan2,
      description: 'Clean minimalist logo on white textured paper',
    },
    {
      id: 4,
      title: 'Paridhan Gradient Logo',
      image: paridhan3,
      description: 'Modern gradient logo with gold to pink transition',
    },
    
    {
      id: 6,
      title: 'Paridhan Label Mockup',
      image: paridhan5,
      description: 'Premium clothing label with elegant branding',
    },
    {
      id: 7,
      title: 'Paridhan Premium Visiting Card',
      images: [cardFront, cardBack],
      description: 'Luxury business card with front and back design',
      isCarousel: true,
    },
    {
      id: 8,
      title: 'Sip-Eat Brand Logo',
      image: sipeatLogo,
      description: 'Vibrant food service brand identity with playful design',
    },
    {
      id: 9,
      title: 'Crazy World YouTube Channel Logo',
      image: crazyWorldLogo,
      description: 'Fun and energetic logo for entertainment YouTube channel',
    },
    {
      id: 10,
      title: 'NL Developers RMC Plant Logo',
      image: nlDevelopersLogo,
      description: 'Professional construction company logo with cement mixer truck',
    },
    {
      id: 11,
      title: 'GL Food Products Brand Logo',
      image: glFoodLogo,
      description: 'Delicious dalwada centre branding with appetizing food illustration',
    },
    {
      id: 12,
      title: 'Jod\'s Esports Community Logo',
      image: jodsEsportsLogo,
      description: 'Fierce wolf emblem design for gaming and esports community',
    },
    {
      id: 13,
      title: 'MS Enterprise Corporate Logo',
      image: msEnterpriseLogo,
      description: 'Professional real estate and construction enterprise branding',
    },
  ]

  const handleCarouselNext = (itemId: number, totalImages: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setCarouselIndex(prev => ({
      ...prev,
      [itemId]: ((prev[itemId] || 0) + 1) % totalImages
    }))
  }

  const handleCarouselPrev = (itemId: number, totalImages: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setCarouselIndex(prev => ({
      ...prev,
      [itemId]: ((prev[itemId] || 0) - 1 + totalImages) % totalImages
    }))
  }

  return (
    <section id="portfolio" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Explore our creative journey through stunning projects that speak louder than words
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="columns-2 lg:columns-3 gap-3 sm:gap-4 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {portfolioItems.map((item, index) => {
              const currentIndex = carouselIndex[item.id] || 0
              const currentImage = item.isCarousel ? item.images![currentIndex] : item.image!
              
              const handleImageClick = () => {
                if (window.innerWidth >= 1024) { // Only open lightbox on desktop
                  setLightboxImage(currentImage)
                }
              }
              
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl lg:cursor-pointer break-inside-avoid mb-3 sm:mb-4 lg:mb-6"
                  onClick={handleImageClick}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={currentImage}
                      alt={item.title}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Carousel Controls */}
                    {item.isCarousel && item.images && (
                      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2 sm:px-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                        <button
                          onClick={(e) => handleCarouselPrev(item.id, item.images!.length, e)}
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-black bg-opacity-50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all z-30 pointer-events-auto"
                        >
                          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </button>
                        <button
                          onClick={(e) => handleCarouselNext(item.id, item.images!.length, e)}
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-black bg-opacity-50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all z-30 pointer-events-auto"
                        >
                          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </button>
                      </div>
                    )}
                    
                    {/* Carousel Indicators */}
                    {item.isCarousel && item.images && (
                      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
                        {item.images.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                              idx === currentIndex ? 'bg-white w-4 sm:w-6' : 'bg-white bg-opacity-50'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  
                  {/* Overlay - Hidden on mobile, visible on desktop */}
                  <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-300">{item.description}</p>
                    </div>
                    
                    {/* Zoom Icon */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 backdrop-blur-lg rounded-full flex items-center justify-center">
                        <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Border Glow */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-purple transition-all duration-300 rounded-2xl pointer-events-none" />
                </div>
              </motion.div>
            )
            })}
          </AnimatePresence>
        </motion.div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 sm:mt-16"
        >
          <motion.a
            href="https://www.behance.net/rushilchauhan1/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-purple-gradient rounded-full font-semibold text-sm sm:text-base shadow-neon hover:shadow-neon-lg transition-all"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.5 4.5h11v15h-11v-15zm1.5 1.5v12h8v-12H8zM20 7v10h-2V7h2zM4 7v10h2V7H4z"/>
            </svg>
            <span>See More at Behance</span>
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-4 right-4 sm:top-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all z-10"
                onClick={() => setLightboxImage(null)}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.button>
              
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={lightboxImage}
                alt="Portfolio item"
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-neon-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio
