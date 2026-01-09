import { motion } from 'framer-motion'
import { Heart, Instagram, Palette, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      'Product Marketing',
      'AI Marketing Reels',
      'Brand Identity',
      'Business Cards',
      'Digital Portfolio',
      'Social Media Content',
    ],
    Company: [
      'About Us',
      'Our Process',
      'Portfolio',
      'Pricing',
      'Contact',
    ],
    Resources: [
      'Blog',
      'Case Studies',
      'FAQs',
      'Support',
    ],
    Legal: [
      'Privacy Policy',
      'Terms of Service',
      'Refund Policy',
    ],
  }

  return (
    <footer className="relative bg-deep-black border-t border-electric-purple border-opacity-20 pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
      {/* Purple Glow at Top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 sm:w-96 h-1 bg-purple-gradient blur-sm" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-3 sm:mb-4">PIXORA</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                Premium AI-powered graphic design agency creating stunning visuals that transform brands.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📞 +91 9054364058</p>
                <p>📧 chauhanrushil45@gmail.com</p>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">{category}</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm sm:text-base text-gray-400 hover:text-neon-purple transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect p-6 sm:p-8 rounded-2xl border border-electric-purple border-opacity-30 mb-10 sm:mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Stay Updated</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              Subscribe to our newsletter for design tips, industry insights, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 sm:py-3 bg-white bg-opacity-5 border border-electric-purple border-opacity-30 rounded-lg focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple focus:ring-opacity-50 transition-all text-sm sm:text-base"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 sm:py-3 bg-purple-gradient text-white font-semibold rounded-lg hover-glow transition-all whitespace-nowrap text-sm sm:text-base"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <motion.a
            href="https://www.instagram.com/pixora.gd/?igsh=MXJwNnQzMW9hZWMyeg=="
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            className="w-10 h-10 sm:w-12 sm:h-12 glass-effect border border-electric-purple border-opacity-30 rounded-lg flex items-center justify-center hover:border-neon-purple hover-glow transition-all group"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-pink-500 transition-colors" />
          </motion.a>
          <motion.a
            href="https://www.behance.net/rushilchauhan1/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            className="w-10 h-10 sm:w-12 sm:h-12 glass-effect border border-electric-purple border-opacity-30 rounded-lg flex items-center justify-center hover:border-neon-purple hover-glow transition-all group"
          >
            <img src="/behance-icon.png" alt="Behance" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
          </motion.a>
          <motion.a
            href="https://wa.me/919054364058"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            className="w-10 h-10 sm:w-12 sm:h-12 glass-effect border border-electric-purple border-opacity-30 rounded-lg flex items-center justify-center hover:border-neon-purple hover-glow transition-all group"
          >
            <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
          </motion.a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-electric-purple border-opacity-20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
            <p className="text-center sm:text-left">
              © {currentYear} PIXORA Graphics Designing. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-neon-purple fill-neon-purple animate-pulse" /> by PIXORA
            </p>
          </div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6 sm:mt-8"
        >
          <p className="text-base sm:text-lg bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold italic">
            "Show your product like a brand, not a listing"
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
