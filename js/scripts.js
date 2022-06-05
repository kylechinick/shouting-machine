$(document).ready(function () {
  $('form').submit(function () {
    event.preventDefault();
    console.log('Form submitted');
    const userMessage = $('#message-field').val();
    if (!userMessage) {
      console.log('No message provided, nothing to shout about!');
    } else {
      const shoutMessage = userMessage.toUpperCase();
      console.log(shoutMessage);
    }
  });
});
