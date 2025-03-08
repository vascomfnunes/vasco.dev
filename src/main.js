// Import styles
import './css/main.css'
import 'animate.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'aos/dist/aos.css'

// Import AOS
import AOS from 'aos'

// Initialize AOS with configuration
document.addEventListener('DOMContentLoaded', () => {
  // Prevent initial scroll if there's a hash
  if (window.location.hash) {
    window.scrollTo(0, 0)
    setTimeout(() => {
      window.location.hash = ''
    }, 1)
  }

  // Navbar and photo scroll behavior
  const navbar = document.getElementById('main-nav')
  const photo = document.getElementById('profile-photo')
  const scrollThreshold = 30 // For navbar
  const fadeStartThreshold = 30 // Start even earlier
  const fadeEndThreshold = 400 // End much later for more gradual effect
  const zIndexThreshold = 30 // Match fadeStartThreshold to switch z-index immediately
  
  // Initial photo size (matching your HTML classes)
  const initialSize = window.innerWidth >= 768 ? 320 : 256 // 80px or 64px based on viewport
  const finalSize = initialSize * 0.2 // Shrink to 40% of original size

  window.addEventListener('scroll', () => {
    // Z-index change and navbar transparency
    if (window.scrollY > zIndexThreshold) {
      photo?.classList.add('behind')
      navbar?.classList.add('transparent')
    } else {
      photo?.classList.remove('behind')
      navbar?.classList.remove('transparent')
    }

    // Navbar shrink
    if (window.scrollY > scrollThreshold) {
      navbar?.classList.add('scrolled')
    } else {
      navbar?.classList.remove('scrolled')
    }

    // Gradual photo fade out with resize
    if (window.scrollY > fadeStartThreshold) {
      const fadeProgress = Math.min(
        (window.scrollY - fadeStartThreshold) / (fadeEndThreshold - fadeStartThreshold),
        1
      )
      if (photo) {
        const currentSize = initialSize - ((initialSize - finalSize) * fadeProgress)
        photo.style.opacity = Math.max(1 - (fadeProgress * 0.8), 0.2)
        photo.style.transform = `translateY(${-40 * fadeProgress}px)`
        photo.style.filter = `blur(${4 * fadeProgress}px)`
        photo.style.width = `${currentSize}px`
        photo.style.height = `${currentSize}px`
      }
    } else {
      if (photo) {
        photo.style.opacity = 1
        photo.style.transform = 'translateY(0)'
        photo.style.filter = 'blur(0)'
        photo.style.width = `${initialSize}px`
        photo.style.height = `${initialSize}px`
      }
    }
  })

  AOS.init({
    // Global settings
    duration: 800,
    easing: 'ease-out-quad',
    once: false,
    mirror: false,
    offset: 120,
    delay: 100,
  })

  // Mobile menu toggle with smooth animation
  const mobileMenuButton = document.getElementById('mobile-menu-button')
  const mobileMenu = document.getElementById('mobile-menu')

  mobileMenuButton?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('open')
  })

  // Close mobile menu when clicking a link
  const mobileLinks = mobileMenu?.querySelectorAll('a')
  mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.remove('open')
    })
  })
})

// Back to top functionality
document.getElementById('back-to-top')?.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear()