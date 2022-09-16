import React from 'react'
import { LoginContainer, LoginButton } from './styles'
import { loginUrl } from '../../spotifyLogic'


const Login = () => {
  
  return (
    <LoginContainer>
        <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt='logo'/>
        <LoginButton href={loginUrl}>Login with spotify</LoginButton>
    </LoginContainer>
  )
}

export default Login