$("button#form-btn").click(function() {
  event.preventDefault();
  if ($('#email').val().length < 3 || $('#message').val().length < 10) {
    $('#form-error').text("Please fill both fields.")
    return
  }

  $('#contact-form').submit() 
});
