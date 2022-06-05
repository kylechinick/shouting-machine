$(document).ready(function () {
  $('form').submit(function () {
    event.preventDefault();
    const userMessage = $('#message-field').val();
    if (!userMessage) {
      alert('No message provided, nothing to shout about!');
    } else {
      const shoutMessage = userMessage.toUpperCase();
      $('#shout-message').text(shoutMessage);
      document.getElementById('shout-form').reset();
    }
  });
});
