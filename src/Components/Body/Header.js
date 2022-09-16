import React from 'react'
import { HeaderContainer, HeaderLeft, HeaderRight } from './styles'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux/es/exports'
import {selecUser} from '../../features/UserSlice'

const Header = () => {
  const user = useSelector(selecUser)
  return (
    <HeaderContainer>
        <HeaderLeft>
            <SearchIcon/>
            <input type="text" placeholder='Search for artist, songs, or other'/>
        </HeaderLeft>
        <HeaderRight>
            <Avatar src={user?.user?.images[0]?.url} alt={user?.user?.id} />
            <h4>
            {user?.user?.display_name}
            </h4>
        </HeaderRight>
    </HeaderContainer>
  )
}

export default Header