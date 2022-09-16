import React from 'react'
import { SideBarContainer, PlayLists} from './styles'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import SidebarChoice from './SidebarChoice'

//el title se pasa como props "por eso en minúscula"
//y el Icon como componente "por eso en Mayúscula"


const SideBar = () => {
  return (
    <SideBarContainer>
        <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo"/>
        <SidebarChoice title="Home" Icon={HomeIcon}/>
        <SidebarChoice title="Search" Icon={SearchIcon}/>
        <SidebarChoice title="Your Library" Icon={LibraryMusicIcon}/>
        <PlayLists> </PlayLists>
        <hr/>
        <SidebarChoice title="Trap 2022"/>
        <SidebarChoice title="Music Chill"/>
        <SidebarChoice title="Ysy a mix"/>
    </SideBarContainer>
  )
}

export default SideBar