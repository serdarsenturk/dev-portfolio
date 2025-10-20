"use client"

import { useEffect } from "react"

export function ScrollObserver() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-section-reveal")
          entry.target.classList.remove("opacity-0")
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll("section[data-observe]")
    sections.forEach((section) => {
      section.classList.add("opacity-0")
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
