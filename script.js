const togglepassword = document.getElementById("togglePassword");
// Show or hide the password when clicked
togglepassword.addEventlistener("click",function() {
    if (password.type === "password") {
        password.type = "text";
        togglepassword.textContent = "Hide";
    }else {
        password.type = "password";
        togglepassword.textContent = "show"
    }
});
// Handle the Sign In form
const form = document.querySelector("form");
form.addeventListener("submit", function (event){
    alert("Your form has been submitted successfully!");
});