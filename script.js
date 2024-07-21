document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = form.elements["name"].value;
        const email = form.elements["email"].value;
        const message = form.elements["message"].value;

        if (name && email && message) {
            alert("Thank you for your message, " + name + "!");
            form.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});
