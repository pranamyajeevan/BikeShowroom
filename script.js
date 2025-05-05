document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('book.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('response').textContent = data;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').textContent = 'An error occurred. Please try again later.';
    });
});
