import React from 'react'

function Login() {
    return (
        <div class="login-page">
            <div class="form">
                <form class="login-form">
                    <input type="text" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Login</button>
                    <p class="message">Not registered? <a href="#">Create an account</a></p>
                </form>
            </div>
        </div>
    )
}

export default Login