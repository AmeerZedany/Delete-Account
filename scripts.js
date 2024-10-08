document.getElementById('delete-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const feedbackMessage = document.getElementById('feedback-message');

    try {
        const response = await fetch('https://52.29.118.89:8081/api/account/delete', {  // Ensure this is HTTPS
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            feedbackMessage.textContent = 'Your account has been successfully deleted.';
            feedbackMessage.style.color = 'green';
        } else {
            const error = await response.json();
            feedbackMessage.textContent = `Error: ${error.message}`;
        }
    } catch (error) {
        console.error('Error details:', error);
        feedbackMessage.textContent = 'An unexpected error occurred. Please try again later.';
    }
});
