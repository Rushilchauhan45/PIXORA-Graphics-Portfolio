import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

// Scroll to section helper
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-16 sm:py-20 lg:py-0">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      {/* Purple Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-purple-600 opacity-20 blur-[60px] sm:blur-[80px] lg:blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-purple-500 opacity-20 blur-[60px] sm:blur-[80px] lg:blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-lg rounded-full border border-purple-500"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">AI-Powered Design Agency</span>
            </motion.div>

            {/* Mobile/Tablet - Logo beside text */}
            <div className="flex items-center gap-4 sm:gap-6 lg:hidden">
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                <span className="glitch" data-text="PIXORA">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">PIXORA</span>
                </span>
                <br />
                <span className="text-white">Graphics</span>
                <br />
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Designing</span>
              </h1>

              {/* Logo beside text - mobile only */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 flex-shrink-0"
              >
                <img
                  src="/pixora-logo.png"
                  alt="PIXORA Logo"
                  className="w-full h-full object-cover drop-shadow-2xl"
                  style={{ 
                    clipPath: 'circle(50% at 50% 50%)',
                    borderRadius: '50%'
                  }}
                />
                <div className="absolute inset-0 bg-purple-600 opacity-40 blur-[50px] rounded-full -z-10 animate-pulse" />
              </motion.div>
            </div>

            {/* Desktop - Normal heading */}
            <h1 className="hidden lg:block text-6xl xl:text-7xl font-bold leading-tight">
              <span className="glitch" data-text="PIXORA">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">PIXORA</span>
              </span>
              <br />
              <span className="text-white">Graphics</span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Designing</span>
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-xl">
              Show your product like a <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">brand</span>, not a listing
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-400">
              The future of marketing starts here. Your brand deserves a name and face with meaning.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all text-sm sm:text-base cursor-pointer"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('portfolio')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-lg border border-purple-500 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-sm sm:text-base cursor-pointer"
              >
                View Portfolio
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">500+</div>
                <div className="text-xs sm:text-sm text-gray-400">Projects Done</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">200+</div>
                <div className="text-xs sm:text-sm text-gray-400">Happy Clients</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">24/7</div>
                <div className="text-xs sm:text-sm text-gray-400">Support</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Logo for Desktop only */}
          <div className="hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative w-96 h-96 xl:w-[450px] xl:h-[450px]"
            >
              <motion.img
                src="/pixora-logo.png"
                alt="PIXORA Graphics Designing"
                className="w-full h-full object-cover drop-shadow-2xl"
                style={{ 
                  clipPath: 'circle(50% at 50% 50%)',
                  borderRadius: '50%'
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Multi-layer glow effects */}
              <div className="absolute inset-0 bg-purple-600 opacity-50 blur-[80px] rounded-full -z-10 animate-pulse" />
              <div className="absolute inset-0 bg-pink-500 opacity-30 blur-[100px] rounded-full -z-20 animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute inset-0 bg-blue-500 opacity-20 blur-[120px] rounded-full -z-30 animate-pulse" style={{ animationDelay: '2s' }} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-8 h-8 text-purple-400" />
      </motion.div>
    </section>
  )
}

export default Hero
