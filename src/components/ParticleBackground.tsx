const ParticleBackground = () => {
  return (
    <div className="particles-bg fixed inset-0 z-0 pointer-events-none">
      {/* Animated purple particles using pure CSS */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-electric-purple rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle ${10 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* Purple glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-purple opacity-10 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple opacity-10 blur-[100px] rounded-full animate-pulse" 
        style={{ animationDelay: '2s' }} 
      />
    </div>
  )
}

export default ParticleBackground
