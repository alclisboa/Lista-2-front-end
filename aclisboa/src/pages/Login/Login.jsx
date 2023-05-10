import React from 'react'
import "./Login.scss"
const Login = () => {
  return (
    <div className='login'>
       <div className='wrapper' >
        <h1>Entrar</h1>
        <form>
            <input placeholder="E-mail"/>
            <input placeholder="Senha"/>
            <button><a className='link' href="/">ENTRAR</a></button>
            <a className='link' href="/">Esqueceu sua senha?</a>
            <a className='link' href="register">Não tem uma conta? Cadastra-se</a>   
        </form>
      </div>
    </div>
  )
}

export default Login
