function getFormvalue() {
    //Write your code here

	let form = document.getElementById("form1");

	let firstName = form.name["fname"].value;
	let lastName = form.name["lname"].value;
	let output = firstName+ " " + lastName;
	alert(output);
}
