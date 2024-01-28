function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username != "" && password != "") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcomeText").style.display = "block";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
