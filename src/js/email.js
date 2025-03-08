document.querySelector('button#form-btn')?.addEventListener('click', function(e) {
  e.preventDefault()
  
  const emailInput = document.querySelector('#email')
  const messageInput = document.querySelector('#message')
  const errorElement = document.querySelector('#form-error')
  const contactForm = document.querySelector('#contact-form')

  if (emailInput.value.length < 3 || messageInput.value.length < 10) {
    errorElement.textContent = 'Please fill both fields.'
    return
  }

  contactForm.submit()
})
