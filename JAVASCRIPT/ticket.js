const form = document.querySelector('.ticket-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the form values
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const tickets = form.elements.tickets.value;
    const payment = form.elements.payment.value;
    const message = form.elements.message.value;

    // Perform form validation
    if (!name || !email || !tickets || !payment) {
        window.alert('Please fill in all required fields.');
        return;
    }

    // Perform form submission
    // Replace this with your own code to submit the form
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Number of Tickets:', tickets);
    console.log('Payment Method:', payment);
    console.log('Message:', message);

    // Reset the form
    form.reset();
});