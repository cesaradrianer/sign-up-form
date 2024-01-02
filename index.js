const password = document.getElementById('password')
const confirmPassword = document.getElementById('password_confirm')
const submitBtn = document.getElementById('submit_button')

submitBtn.addEventListener('onclick', (e) => {

    e.preventDefault()

    if (password.value != confirmPassword.value) {

        confirmPassword.title = "This password doesn't match what you wrote in the first password field"

    } else {

    }

})