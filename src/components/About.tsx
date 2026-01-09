import { motion } from 'framer-motion'
import { Target, Zap, Users, TrendingUp } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Brand Focused',
      description: 'We create identities that resonate with your audience',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI-Powered',
      description: 'Cutting-edge AI technology for stunning visuals',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client First',
      description: 'Your vision, our expertise, perfect harmony',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Results Driven',
      description: 'Data-backed designs that convert and engage',
    },
  ]

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-purple-gradient" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Let Your Work Speak <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">With Confidence</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            PIXORA is where creativity meets technology. We specialize in AI-powered design solutions 
            that transform your brand into an unforgettable experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect p-6 sm:p-8 rounded-2xl border border-electric-purple hover-glow cursor-pointer group"
            >
              <div className="text-neon-purple mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 sm:mt-16 text-center px-4"
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent italic">
            "Let your content speak before you do"
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
