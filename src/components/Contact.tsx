import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Loader2, Instagram } from 'lucide-react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })

      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Failed to send email:', error)
      setIsSubmitting(false)
      // You can add error state handling here if needed
      alert('Failed to send message. Please try again.')
    }
  }

  const services = [
    'Product Marketing Posts & AI Models',
    'AI-Powered Marketing Reels',
    'Brand Identity Creation',
    'Business Card Design',
    'Digital Portfolio & Look-Book',
    'Social Media Content (₹1499/month)',
  ]

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-electric-purple opacity-20 blur-[80px] sm:blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-neon-purple opacity-20 blur-[80px] sm:blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Let's Create <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Something Amazing</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Ready to elevate your brand? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Get In Touch</h3>
              <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              <motion.a
                href="tel:+919054364058"
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass-effect rounded-xl border border-electric-purple border-opacity-30 hover:border-opacity-100 hover-glow transition-all group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-400">Phone</div>
                  <div className="text-base sm:text-lg font-semibold">+91 9054364058</div>
                </div>
              </motion.a>

              <motion.a
                href="mailto:chauhanrushil45@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass-effect rounded-xl border border-electric-purple border-opacity-30 hover:border-opacity-100 hover-glow transition-all group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs sm:text-sm text-gray-400">Email</div>
                  <div className="text-sm sm:text-base lg:text-lg font-semibold truncate">chauhanrushil45@gmail.com</div>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass-effect rounded-xl border border-electric-purple border-opacity-30"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-gradient rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-400">Location</div>
                  <div className="text-base sm:text-lg font-semibold">Ranip ,Ahmedabad ,Gujrat</div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Follow Us</h4>
              <div className="flex gap-3 sm:gap-4">
                <motion.a
                  href="https://www.instagram.com/pixora.gd/?igsh=MXJwNnQzMW9hZWMyeg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 glass-effect border border-electric-purple border-opacity-30 rounded-lg flex items-center justify-center hover:border-opacity-100 hover-glow transition-all group"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-pink-500 transition-colors" />
                </motion.a>
                <motion.a
                  href="https://www.behance.net/rushilchauhan1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 glass-effect border border-electric-purple border-opacity-30 rounded-lg flex items-center justify-center hover:border-opacity-100 hover-glow transition-all group"
                >
                  <img src="/behance-icon.png" alt="Behance" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                </motion.a>
                <motion.a
                  href="https://wa.me/919054364058"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 glass-effect border border-electric-purple border-opacity-30 rounded-lg flex items-center justify-center hover:border-opacity-100 hover-glow transition-all group"
                >
                  <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-effect p-6 sm:p-8 rounded-2xl border border-electric-purple border-opacity-30 space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-5 border border-electric-purple border-opacity-30 rounded-lg focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple focus:ring-opacity-50 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-5 border border-electric-purple border-opacity-30 rounded-lg focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple focus:ring-opacity-50 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-5 border border-electric-purple border-opacity-30 rounded-lg focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple focus:ring-opacity-50 transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold mb-2">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-5 border border-electric-purple border-opacity-30 rounded-lg focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple focus:ring-opacity-50 transition-all"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-deep-black">
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white bg-opacity-5 border border-electric-purple border-opacity-30 rounded-lg focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple focus:ring-opacity-50 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || submitted}
                whileHover={{ scale: isSubmitting || submitted ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting || submitted ? 1 : 0.95 }}
                className={`w-full py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 ${
                  submitted
                    ? 'bg-green-600 text-white'
                    : 'bg-purple-gradient text-white hover-glow'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring' }}
                    >
                      ✓
                    </motion.div>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
