// Simple animation for the adopt buttons
        document.querySelectorAll('.adopt-btn').forEach(button => {
            button.addEventListener('click', function() {
                alert(`Thank you for your interest in adopting ${this.previousElementSibling.previousElementSibling.textContent}! Our team will contact you shortly.`);
            });
        });
