document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        const name = form.elements["name"].value;
        const email = form.elements["email"].value;
        const message = form.elements["message"].value;

        if (name && email && message) {
            try {
                const response = await fetch('http://localhost:5055/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, message })
                });
                
                if (response.ok) {
                    alert("Thank you for your message, " + name + "!");
                    form.reset();
                } else {
                    alert("There was an error sending your message. Please try again later.");
                }
            } catch (error) {
                alert("There was an error sending your message. Please try again later.");
            }
        } else {
            alert("Please fill out all fields.");
        }
    });
});
