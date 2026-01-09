import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import {
  Sparkles,
  Video,
  PenTool,
  CreditCard,
  Briefcase,
  Share2,
} from 'lucide-react'

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// 3D Icon Component
const Icon3D = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <MeshDistortMaterial
          color="#8B00FF"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Product Marketing Posts & AI Models',
      description: 'AI-Powered Product Visuals, Virtual Product Photoshoots, AI Human-Model Product Creatives, Product Imaging & Visualization',
      features: ['AI Product Photography', 'Virtual Models', 'Smart Visualization'],
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      icon: Video,
      title: 'AI-Powered Marketing Reels',
      description: 'AI-Driven Video Content, Smart Visual Automation, Reach-Optimized Content, Trend-Based AI Reels',
      features: ['AI Video Generation', 'Auto Optimization', 'Trend Analysis'],
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      icon: PenTool,
      title: 'Brand Identity Creation 🔥',
      description: 'Complete brand transformation from naming to visual identity. Create a memorable presence that stands out.',
      features: ['Brand Naming', 'Logo Design', 'Visual Identity'],
      gradient: 'from-pink-600 to-red-600',
      featured: true,
    },
    {
      icon: CreditCard,
      title: 'Business Card Design',
      description: 'Minimal, Professional, and Impactful designs. All types of printable cards that make lasting impressions.',
      features: ['Minimal Design', 'Professional', 'Print-Ready'],
      gradient: 'from-green-600 to-teal-600',
    },
    {
      icon: Briefcase,
      title: 'Digital Portfolio & Look-Book',
      description: 'Responsive Portfolio Websites and stunning Portfolio Look-Book Slides that showcase your work beautifully.',
      features: ['Responsive Design', 'Look-Books', 'Web Portfolios'],
      gradient: 'from-yellow-600 to-orange-600',
    },
    {
      icon: Share2,
      title: 'Social Media Content Design',
      description: '8 Social Media Posts, 4 Reel Editing, All Festival Posts per month - Complete social media management.',
      features: ['8 Posts/Month', '4 Reels/Month', 'Festival Posts'],
      gradient: 'from-indigo-600 to-purple-600',
      price: '₹1499/month',
      popular: true,
    },
  ]

  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Premium Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Elevate your brand with our comprehensive suite of AI-powered design solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative group"
              style={{ perspective: '1000px' }}
            >
              <div
                className={`relative glass-effect p-6 sm:p-8 rounded-2xl border-2 ${
                  service.featured || service.popular
                    ? 'border-neon-purple'
                    : 'border-electric-purple border-opacity-30'
                } hover-glow overflow-hidden h-full flex flex-col`}
              >
                {/* Popular/Featured Badge */}
                {(service.featured || service.popular) && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 bg-purple-gradient rounded-full text-xs font-bold">
                    {service.featured ? '🔥 HOT' : '⭐ POPULAR'}
                  </div>
                )}

                {/* 3D Canvas Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <Canvas>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#8B00FF" />
                    <Icon3D />
                  </Canvas>
                </div>

                {/* Icon */}
                <div className="relative z-10 mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-gradient rounded-2xl flex items-center justify-center shadow-neon group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-neon-purple rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                {service.price && (
                  <div className="relative z-10 mt-auto">
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">{service.price}</div>
                  </div>
                )}

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-glow-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-purple-gradient text-white font-semibold rounded-full hover-glow transition-all text-base sm:text-lg cursor-pointer"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
