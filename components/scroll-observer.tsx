"use client"

import { useEffect } from "react"

export function ScrollObserver() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add staggered animation delay
          const delay = index * 0.1
          const target = entry.target as HTMLElement
          target.style.animationDelay = `${delay}s`
          target.classList.add("animate-section-reveal")
          target.classList.remove("opacity-0")
          
          // Add micro-interaction for cards
          const cards = target.querySelectorAll('.group')
          cards.forEach((card, cardIndex) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in-up')
            }, cardIndex * 100)
          })
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll("section[data-observe]")
    sections.forEach((section) => {
      section.classList.add("opacity-0")
      observer.observe(section)
    })

    // Enhanced scroll effects
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallax = document.querySelectorAll('.animate-parallax-float')
      
      parallax.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1)
        const el = element as HTMLElement
        el.style.transform = `translateY(${scrolled * speed}px)`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}
