function checkPassword() {
    let password = document.getElementById("passwordInput").value;

    if (password === "lambuuu") {
       document.getElementById("passwordScreen").style.display = "none";
       document.getElementById("main").style.display = "block";
    } else {
        alert("Wrong password ❌");
    }
}