const email = document.getElementById("email")
const password = document.getElementById("password")
const name = document.getElementById("name")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")





form.addEventListener("logginn", (e) => {
    let messages = []
    if ( email.value === "" || email.value == null) {
        messages.push("name is requred")
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(", ")
    }
})




