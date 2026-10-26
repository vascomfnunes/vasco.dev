// Import styles
import './css/main.css'
import 'animate.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'aos/dist/aos.css'

// Import AOS and email.js
import AOS from 'aos'
import './js/email.js'

// Initialize AOS with configuration
document.addEventListener('DOMContentLoaded', () => {
  // Navbar and photo scroll behavior
  const navbar = document.getElementById('main-nav')
  const photo = document.getElementById('profile-photo')
  const scrollThreshold = 30 // For navbar
  const fadeStartThreshold = 30 // Start even earlier
  const fadeEndThreshold = 400 // End much later for more gradual effect
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

  const updateScrollEffects = () => {
    navbar?.classList.toggle('transparent', window.scrollY > scrollThreshold)

    // Navbar shrink
    if (window.scrollY > scrollThreshold) {
      navbar?.classList.add('scrolled')
    } else {
      navbar?.classList.remove('scrolled')
    }

    // Keep the layout fixed while gently fading and lifting the portrait.
    const fadeProgress = reducedMotion.matches ? 0 : Math.min(
      Math.max((window.scrollY - fadeStartThreshold) / (fadeEndThreshold - fadeStartThreshold), 0), 1)

    if (photo) {
      photo.style.opacity = String(1 - fadeProgress * 0.3)
      photo.style.transform = `translateY(${-16 * fadeProgress}px)`
    }
  }
  let scrollFramePending = false

  window.addEventListener('scroll', () => {
    if (scrollFramePending) return

    scrollFramePending = true

    window.requestAnimationFrame(() => {
      scrollFramePending = false
      updateScrollEffects()
    })
  }, { passive: true })

  reducedMotion.addEventListener('change', updateScrollEffects)
  updateScrollEffects()

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

  const setMenuOpen = (open) => {
    if (!mobileMenu || !mobileMenuButton) return

    mobileMenu.inert = !open
    mobileMenu.classList.toggle('open', open)
    mobileMenuButton.setAttribute('aria-expanded', String(open))
  }

  mobileMenuButton?.addEventListener('click', () => {
    setMenuOpen(mobileMenuButton.getAttribute('aria-expanded') !== 'true')
  })

  mobileMenu?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuOpen(false)
      mobileMenuButton?.focus()
    }
  })

  // Close mobile menu when clicking a link
  const mobileLinks = mobileMenu?.querySelectorAll('a')

  mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
      setMenuOpen(false)
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