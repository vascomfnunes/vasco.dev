document.querySelector('button#form-btn')?.addEventListener('click', function(e) {
  e.preventDefault()
  
  const emailInput = document.querySelector('#email')
  const messageInput = document.querySelector('#message')
  const errorElement = document.querySelector('#form-error')
  const successElement = document.querySelector('#form-success')
  const submitButton = document.querySelector('#form-btn')
  const contactForm = document.querySelector('#contact-form')

  // Reset previous messages
  errorElement.textContent = ''
  errorElement.classList.add('hidden')
  successElement.textContent = ''
  successElement.classList.add('hidden')

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(emailInput.value)) {
    errorElement.textContent = 'Please enter a valid email address.'
    errorElement.classList.remove('hidden')
    emailInput.focus()
    return
  }

  // Validate message length (minimum 20 characters)
  if (messageInput.value.length < 20) {
    errorElement.textContent = 'Message must be at least 20 characters long.'
    errorElement.classList.remove('hidden')
    messageInput.focus()
    return
  }

  // Show loading state
  submitButton.disabled = true
  const originalButtonText = submitButton.innerHTML
  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'

  // Submit form
  fetch(contactForm.action, {
    method: 'POST',
    body: new FormData(contactForm),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    if (data.ok) {
      // Success
      successElement.textContent = 'Message sent successfully! I\'ll get back to you soon.'
      successElement.classList.remove('hidden')
      contactForm.reset()
    } else {
      // API-level error
      throw new Error('Failed to send message')
    }
  })
  .catch(error => {
    // Show error
    errorElement.textContent = 'Failed to send message. Please try again later.'
    errorElement.classList.remove('hidden')
  })
  .finally(() => {
    // Reset button state
    submitButton.disabled = false
    submitButton.innerHTML = originalButtonText
  })
})

// Real-time validation
document.querySelector('#email')?.addEventListener('input', function(e) {
  const errorElement = document.querySelector('#email-error')
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (this.value && !emailRegex.test(this.value)) {
    errorElement.textContent = 'Please enter a valid email address'
    errorElement.classList.remove('hidden')
  } else {
    errorElement.textContent = ''
    errorElement.classList.add('hidden')
  }
})

document.querySelector('#message')?.addEventListener('input', function(e) {
  const errorElement = document.querySelector('#message-error')
  const remainingChars = 20 - this.value.length

  if (this.value && remainingChars > 0) {
    errorElement.textContent = `${remainingChars} more characters needed`
    errorElement.classList.remove('hidden')
  } else {
    errorElement.textContent = ''
    errorElement.classList.add('hidden')
  }
})
