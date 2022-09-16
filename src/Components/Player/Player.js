import React from 'react'
import SideBar from '../SideBar/SideBar'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import { SpotifyBody } from './styles'

const Player = () => {
  return (
    <>
      <SpotifyBody>
        <SideBar/>
        <Body/>
      </SpotifyBody>
      <Footer/>
    </>
  )
}

export default Player