(function () {
  'use strict' // Start of use strict

  function animate(target) {
    window.scrollTo({
      top: target.offsetTop - 56,
      behavior: 'smooth'
    })
  }

  // Smooth scrolling using native scrollTo
  document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])').forEach(link => {
    link.addEventListener('click', function(e) {
      if (
        location.pathname.replace(/^\//, '') ===
          this.pathname.replace(/^\//, '') &&
        location.hostname === this.hostname
      ) {
        e.preventDefault()
        const target = document.querySelector(this.hash) || 
                      document.querySelector(`[name=${this.hash.slice(1)}]`)
        
        if (target) {
          animate(target)
        }
      }
    })
  })

  // Decrease header on scroll and scroll to top
  window.addEventListener('scroll', function() {
    const height = window.scrollY
    const backToTop = document.getElementById('back-to-top')
    const headerTitle = document.getElementById('header-title')
    const navItems = document.querySelectorAll('.nav-item')
    const mainNav = document.getElementById('main-nav')

    if (height > 50) {
      backToTop.style.display = 'block'
      headerTitle.classList.add('smaller-title')
      navItems.forEach(item => item.classList.add('smaller-nav-item'))
      mainNav.classList.remove('bg-dark')
      mainNav.classList.add('dark-background', 'shadow')
    } else {
      backToTop.style.display = 'none'
      headerTitle.classList.remove('smaller-title')
      navItems.forEach(item => item.classList.remove('smaller-nav-item'))
      mainNav.classList.add('bg-dark')
      mainNav.classList.remove('dark-background', 'shadow')
    }
  })

  // Back to top button
  document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })

  // Closes responsive menu when a scroll trigger link is clicked
  document.querySelectorAll('.js-scroll-trigger').forEach(link => {
    link.addEventListener('click', function() {
      const navbarCollapse = document.querySelector('.navbar-collapse')
      if (navbarCollapse) {
        navbarCollapse.classList.remove('show')
      }
    })
  })

  // Activate scrollspy to add active class to navbar items on scroll
  const mainNav = document.getElementById('main-nav')
  if (mainNav) {
    const spy = new bootstrap.ScrollSpy(document.body, {
      target: '#main-nav',
      offset: 56
    })
  }
})() // End of use strict
