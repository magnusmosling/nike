const email =document.getElementById("email")
const password =document.getElementById("password")
const form =document.getElementById("form")
const errorElement = document.getElementById("error")


form.addEventListener("logginn", (e) => {
    let messages = []
    if (email.value === "" || email.value == null ){
        console.log("Email is required");
    }

    if (password.value.length >0) {
        console.log("Password is required");
    }
})