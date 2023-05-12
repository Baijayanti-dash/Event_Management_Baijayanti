// Get the form element
var form = document.querySelector('.contact-form');

// Add an event listener to the form's submit event
form.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form inputs
    var nameInput = form.elements['Name'];
    var emailInput = form.elements['Email'];
    var subjectInput = form.elements['Subject'];
    var commentInput = form.elements['Comment'];

    // Validate the form inputs
    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        nameInput.focus();
        return;
    }
    if (emailInput.value.trim() === '') {
        alert('Please enter your email address.');
        emailInput.focus();
        return;
    }
    if (subjectInput.value.trim() === '') {
        alert('Please enter a subject.');
        subjectInput.focus();
        return;
    }
    if (commentInput.value.trim() === '') {
        alert('Please enter a comment.');
        commentInput.focus();
        return;
    }

    // If all inputs are valid, submit the form
    form.submit();
});
