document.getElementById("login-submit").addEventListener("click", function () {
	//get user's email
	const emailField = document.getElementById("user-email");
	const userEmail = emailField.value;

	//get user's password
	const passwordField = document.getElementById("user-password");
	const userPassword = passwordField.value;

	//Check email and password

	if (userEmail == "example@abc.com" && userPassword == "12345") {
		window.location.href = "banking.html";
	}
});
