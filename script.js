function getFormvalue() {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the form element by its ID
    var form = document.getElementById('form1');

    // Get the values of the first name and last name input fields
    var firstName = form.elements['fname'].value;
    var lastName = form.elements['lname'].value;

    // Concatenate the names with a space in between
    var fullName = firstName + ' ' + lastName;

    // Display the full name using alert
    alert(fullName);
}