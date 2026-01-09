import { motion } from 'framer-motion'
import { Check, Star, Zap } from 'lucide-react'

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹999',
      period: 'one-time',
      description: 'Perfect for individuals and small projects',
      features: [
        '1 Brand Logo Design',
        '2 Social Media Posts',
        '1 Business Card Design',
        'Basic Support',
        '2 Revisions',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '₹1499',
      period: 'per month',
      description: 'Ideal for growing businesses and consistent content',
      features: [
        '8 Social Media Leading Posts',
        '4 Reel Editing',
        'All Festival Posts/Month',
        'Priority Support',
        'Unlimited Revisions',
        'Content Calendar',
        'Analytics Report',
      ],
      highlighted: true,
      badge: '⭐ MOST POPULAR',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'Tailored solutions for large-scale projects',
      features: [
        'Complete Brand Identity',
        'AI Product Photography',
        'Marketing Reel Production',
        'Website Design',
        'Dedicated Account Manager',
        '24/7 Premium Support',
        'Custom Solutions',
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-purple-900/5 to-deep-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Simple, <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Transparent Pricing</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Choose the perfect plan for your needs. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: plan.highlighted ? 1.05 : 1.02, y: -10 }}
              className={`relative ${plan.highlighted ? 'lg:-mt-8' : ''}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-gradient rounded-full text-xs sm:text-sm font-bold shadow-neon z-10">
                  {plan.badge}
                </div>
              )}

              <div
                className={`glass-effect p-6 sm:p-8 rounded-3xl border-2 ${
                  plan.highlighted
                    ? 'border-neon-purple shadow-neon-lg'
                    : 'border-electric-purple border-opacity-30'
                } hover-glow h-full flex flex-col relative overflow-hidden`}
              >
                {/* Glow Effect */}
                {plan.highlighted && (
                  <div className="absolute inset-0 bg-glow-gradient opacity-50 pointer-events-none" />
                )}

                {/* Plan Name */}
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">{plan.price}</span>
                      {plan.period !== 'contact us' && (
                        <span className="text-sm sm:text-base text-gray-400">/{plan.period}</span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-neon-purple flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('contact')}
                    className={`w-full py-3 sm:py-4 rounded-full font-semibold transition-all text-sm sm:text-base cursor-pointer ${
                      plan.highlighted
                        ? 'bg-purple-gradient text-white shadow-neon'
                        : 'glass-effect border border-electric-purple text-white hover:border-neon-purple'
                    }`}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 px-4">
            All plans include high-quality designs, professional support, and satisfaction guarantee
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-neon-purple" />
              <span className="text-sm sm:text-base text-gray-300">Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-neon-purple" />
              <span className="text-sm sm:text-base text-gray-300">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-neon-purple" />
              <span className="text-sm sm:text-base text-gray-300">100% Satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
