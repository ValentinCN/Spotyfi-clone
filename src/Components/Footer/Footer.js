import React from 'react'
import { FooterContainer,FooterLeft,FooterCenter,FooterRight } from './styles'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import RepeatIcon from '@material-ui/icons/Repeat'
import VolumeUp from '@material-ui/icons/VolumeUp'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import { Grid, Slider } from '@material-ui/core'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <img src='https://silenciowp.s3.amazonaws.com/wp-content/uploads/2021/04/Duki-portadadesdeelfindelmundo-600-300x300.jpg' alt='cover'/>
        <div>
          <h4>Volando Bajito</h4>
          <p>Duketo!!</p>
        </div>
      </FooterLeft>
      <FooterCenter>
        <ShuffleIcon className='shuffle'/>
        <SkipPreviousIcon className='icon'/>
        <PlayCircleOutlineIcon className='icon'/>
        <SkipNextIcon className='icon'/>
        <RepeatIcon className='repeat'/>
      </FooterCenter>
      <FooterRight>
        <Grid container spacing={2}>
          <Grid item><PlaylistPlayIcon/></Grid>
          <Grid item><VolumeDownIcon/></Grid>
          <Grid item xs><Slider defaultValue={70} valueLabelDisplay="auto"/></Grid>
          <Grid item><VolumeUp/></Grid>
        </Grid>
      </FooterRight>
    </FooterContainer>
  )
}

export default Footer