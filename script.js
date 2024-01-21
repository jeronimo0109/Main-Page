'use strict'

function quitLogin() {
    document.getElementById('login-container').classList.add('disguise')
}

function Login() {
    document.getElementById('login-container').classList.remove('disguise')
    document.getElementById('login-container').classList.add('appear')
}

