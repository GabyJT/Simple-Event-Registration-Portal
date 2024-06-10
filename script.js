// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get the form element by its ID
    const form = document.getElementById('registrationForm');

    // Get the div where registration details will be displayed
    const registrationDisplay = document.getElementById('registrationDisplay');

    // Add an event listener to handle form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior (page reload)
        event.preventDefault();

        // Get the values entered by the user
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const eventDate = document.getElementById('eventDate').value;
        const mealPreferences = document.querySelectorAll('input[name="mealPreference"]:checked');

        // Validate that all fields are filled out
        if (!name || !email || !eventDate || mealPreferences.length === 0) {
            // If any field is empty, show an alert and return early
            alert('Please fill out all fields.');
            return;
        }

        // Collect meal preferences into an array
        const preferences = [];
        mealPreferences.forEach((preference) => {
            preferences.push(preference.value);
        });

        // Create a new div element for this registration entry
        const registrationEntry = document.createElement('div');
        registrationEntry.classList.add('registration-entry');

        // Create and append elements for name, email, event date, and preferences
        const regName = document.createElement('h3');
        regName.textContent = `Name: ${name}`;
        registrationEntry.appendChild(regName);

        const regEmail = document.createElement('p');
        regEmail.textContent = `Email: ${email}`;
        registrationEntry.appendChild(regEmail);

        const regDate = document.createElement('p');
        regDate.textContent = `Event Date: ${eventDate}`;
        registrationEntry.appendChild(regDate);

        const regPreferences = document.createElement('p');
        regPreferences.textContent = `Meal Preferences: ${preferences.join(', ')}`;
        registrationEntry.appendChild(regPreferences);

        // Append the registration entry div to the registration display area
        registrationDisplay.appendChild(registrationEntry);

        // Clear the form fields after submission
        form.reset();
    });
});
