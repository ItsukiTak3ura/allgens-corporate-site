'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface CounterProps {
  target: number
  duration?: number
  delay?: number
  className?: string
}

export function Counter({ target, duration = 2000, delay = 0, className = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (!inView) return

    let animationFrame: number

    const timer = setTimeout(() => {
      let startTime: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(easeOutQuart * target)
        
        setCount(currentCount)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }, delay)

    return () => {
      clearTimeout(timer)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [inView, target, duration, delay])

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  )
}
