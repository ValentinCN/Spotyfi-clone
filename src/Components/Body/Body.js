import React from 'react'
import { BodyContainer, Info, InfoText, Icons, Songs } from './styles'
import Header from './Header'
import { useSelector } from 'react-redux'
import { selectPlaylist } from '../../features/PlaylistSlice'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavouriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SongRow from './SongRow'

const Body = () => {
  const playlist = useSelector(selectPlaylist);
  console.log("playlist=",playlist)
  return (
    <BodyContainer>
        <Header/>
        <Info>
          <img src={playlist?.images[0]?.url} alt=""/>
          <InfoText>
            <h4>Playlist</h4>
            <h4>Discover Weekly</h4>
            <p>{playlist?.name}</p>
          </InfoText>
        </Info>
        <Songs>
          <Icons>
            <PlayCircleFilledIcon className='playButton'/>
            <FavouriteIcon fontSize='large'/>
            <MoreHorizIcon fontSize="large"/>
          </Icons>
          {
            playlist?.tracks?.items.map((item, index) =>(
                <SongRow track={item.track} key={index}/>
            ))
          }
        </Songs>
    </BodyContainer>
  )
}

export default Body