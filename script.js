'use strict'

function quitLogin() {
    document.getElementById('login-container').classList.add('disguise')
    document.getElementById('MainPage-container').classList.add('appear')
    document.getElementById('MainPage-container').style.display = "block"
}

function Login() {
    document.getElementById('login-container').classList.remove('disguise')
    document.getElementById('login-container').classList.add('appear')
}

