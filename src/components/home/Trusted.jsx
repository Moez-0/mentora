import { useState, useEffect, useRef } from 'react'

const TrustedByCarousel = () => {
  const logos = [
    { name: 'Maison des tpe', logo: 'https://www.maisontpe.fr/_next/image?url=%2Fimages%2FLogo-mtpe.png&w=256&q=75' },
    { name: 'Maison des tpe', logo: 'https://www.maisontpe.fr/_next/image?url=%2Fimages%2FLogo-mtpe.png&w=256&q=75' },
    { name: 'Maison des tpe', logo: 'https://www.maisontpe.fr/_next/image?url=%2Fimages%2FLogo-mtpe.png&w=256&q=75' },
    { name: 'Maison des tpe', logo: 'https://www.maisontpe.fr/_next/image?url=%2Fimages%2FLogo-mtpe.png&w=256&q=75' },
    { name: 'Maison des tpe', logo: 'https://www.maisontpe.fr/_next/image?url=%2Fimages%2FLogo-mtpe.png&w=256&q=75' },
    { name: 'Maison des tpe', logo: 'https://www.maisontpe.fr/_next/image?url=%2Fimages%2FLogo-mtpe.png&w=256&q=75' },
    { name: 'Maison des tpe', logo: 'https://www.maisontpe.fr/_next/image?url=%2Fimages%2FLogo-mtpe.png&w=256&q=75' },
    { name: 'Maison des tpe', logo: 'https://www.maisontpe.fr/_next/image?url=%2Fimages%2FLogo-mtpe.png&w=256&q=75' },


  ]

  const [pause, setPause] = useState(false)
  const carouselRef = useRef(null)
  const speed = 50 

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let animationId
    let lastTimestamp
    let position = 0

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      const delta = timestamp - lastTimestamp
      lastTimestamp = timestamp

      if (!pause) {
        position += (speed * delta) / 1000
        if (position >= carousel.scrollWidth / 2) {
          position = 0
        }
        carousel.style.transform = `translateX(-${position}px)`
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [pause])

  const doubledLogos = [...logos, ...logos]

  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-teal-600">Trusted by</h2>
        </div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          <div 
            ref={carouselRef}
            className="flex items-center space-x-12 py-4"
            style={{ width: 'fit-content' }}
          >
            {doubledLogos.map((company, index) => (
              <div 
                key={`${company.name}-${index}`} 
                className="flex-shrink-0 px-6 py-2 grayscale hover:grayscale-0 transition-all duration-300"
                style={{ filter: 'brightness(0) invert(0.7)' }}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 object-contain"
                  style={{ maxWidth: '180px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedByCarousel