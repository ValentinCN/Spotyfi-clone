import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './Components/Login/Login';
import Player from './Components/Player/Player';
import { getTokenFromUrl } from './spotifyLogic';
import { SET_USER, selecUser } from './features/UserSlice'
import SpotifyWebApi from 'spotify-web-api-js';
import { SET_PLAYLIST } from './features/PlaylistSlice';
import { SET_TOKEN, selecToken } from './features/TokenSlice';

const spotify = new SpotifyWebApi()

function App() {
  const token = useSelector(selecToken)
  const user = useSelector(selecUser)
  const dispatch = useDispatch()
  
  useEffect(()=>{ 
    const hash = getTokenFromUrl();
    const _token = hash.access_token;

    if(_token){
      dispatch(SET_TOKEN(_token)) 
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => dispatch(SET_USER(user)))
      console.log("token = ", _token)
      spotify.getPlaylist('37i9dQZF1EIYa2QVGwSE9r').then(playlist=>dispatch(SET_PLAYLIST(playlist)))
      //https://open.spotify.com/playlist/37i9dQZF1EIYa2QVGwSE9r?si=eb279857915b4275
      //spotify.getPlaylist("0u5Y6FpmHPJHJ67B52OXv8").then(playlist=>dispatch(SET_PLAYLIST(playlist)))
    }



  },[dispatch])
  
  return (
    <div>
      {
        token ? <Player/> : <Login/>
      }
    </div>
  );
}

export default App;
