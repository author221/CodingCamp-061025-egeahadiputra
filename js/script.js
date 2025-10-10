

greet();


function greet() {
    const name = prompt("Please enter your name:");
    document.getElementById("welcome-speech").innerHTML = name;
}

function validateForm() {
    /// ini adalah function untuk validasi form
    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let message = document.getElementById("message-input").value;

    /// cek apakah nama kosong
    if (name === "" || email === "" || message ===  "" ) {
        alert("Please fill in all fields.");
        return
    }
    alert ("Thank you for your message, " + name + "!");
}