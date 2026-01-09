import { motion } from 'framer-motion'
import { Lightbulb, Palette, Rocket, CheckCircle } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Discovery',
      description: 'We dive deep into your brand, understanding your vision, goals, and target audience.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Our AI-powered tools and creative experts craft stunning visuals tailored to your needs.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rocket,
      title: 'Development',
      description: 'We bring designs to life with cutting-edge technology and meticulous attention to detail.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: CheckCircle,
      title: 'Delivery',
      description: 'Your project is delivered on time, ready to make an impact and drive results.',
      color: 'from-green-500 to-teal-500',
    },
  ]

  return (
    <section id="process" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-electric-purple opacity-10 blur-[120px] sm:blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Creative Process</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            From concept to completion, we follow a proven workflow that delivers exceptional results
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Mobile/Tablet */}
          <div className="absolute left-8 sm:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-purple via-neon-purple to-electric-purple lg:hidden" />
          
          {/* Vertical Line - Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-purple via-neon-purple to-electric-purple hidden lg:block" />

          {/* Steps */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-row lg:flex-row items-start lg:items-center gap-6 sm:gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 pl-20 sm:pl-24 lg:pl-0 ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass-effect p-6 sm:p-8 rounded-2xl border border-electric-purple hover-glow inline-block w-full lg:w-auto"
                  >
                    <div className="text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                      STEP {index + 1}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">{step.title}</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-md mx-auto lg:mx-0">{step.description}</p>
                  </motion.div>
                </div>

                {/* Icon */}
                <div className="absolute left-0 lg:relative lg:left-auto z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-neon-lg`}
                  >
                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-2xl text-gray-300 mb-6">Ready to start your project?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-purple-gradient text-white font-semibold rounded-full hover-glow transition-all text-lg"
          >
            Let's Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
