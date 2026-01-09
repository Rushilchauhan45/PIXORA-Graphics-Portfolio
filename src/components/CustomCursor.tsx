import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      )
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <>
      {/* Main cursor ring with gradient */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        animate={{
          scale: isClicking ? 0.8 : isPointer ? 1.5 : 1,
          opacity: isPointer ? 1 : 0.8,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div
          className="relative"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
              isPointer
                ? 'border-pink-500 bg-pink-500/10'
                : 'border-purple-500 bg-purple-500/5'
            }`}
            style={{
              boxShadow: isPointer
                ? '0 0 20px rgba(236, 72, 153, 0.6), 0 0 40px rgba(236, 72, 153, 0.3)'
                : '0 0 15px rgba(139, 0, 255, 0.5), 0 0 30px rgba(139, 0, 255, 0.2)',
            }}
          />
        </div>
      </motion.div>

      {/* Trailing effect */}
      <motion.div
        className="fixed pointer-events-none z-40"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        animate={{
          scale: isPointer ? 2 : 1.5,
          opacity: isPointer ? 0.3 : 0.2,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      >
        <div
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className={`w-12 h-12 rounded-full blur-md ${
              isPointer ? 'bg-pink-500/40' : 'bg-purple-500/30'
            }`}
          />
        </div>
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        animate={{
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              isPointer ? 'bg-pink-500' : 'bg-purple-500'
            }`}
            style={{
              boxShadow: isPointer
                ? '0 0 10px rgba(236, 72, 153, 0.8)'
                : '0 0 8px rgba(139, 0, 255, 0.8)',
            }}
          />
        </div>
      </motion.div>

      {/* Particles on click */}
      {isClicking && (
        <motion.div
          className="fixed pointer-events-none z-50"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="w-16 h-16 rounded-full border-2 border-purple-500" />
          </div>
        </motion.div>
      )}
    </>
  )
}

export default CustomCursor
