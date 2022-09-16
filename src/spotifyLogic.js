// window.location.hash = retorna la parte ancla de un URL
//ejemplo: http://www.example.com/test.htm#part2 = retornará #part2

//el ".subtring(1) extrae el primer caracter, e imprime el resto de la cadena hasta el final"
//ejemplo: const hello="hello world", hello.substring retornará = "ello world"

//el slpit("&") divide un string en un array de cadenas, separados por "&"

//reduce ejecuta una función reductora sobre cada elemento del array y da como resultado un solo valor

export const getTokenFromUrl = ()=>{
    return window.location.hash.substring(1).split("&")
        .reduce((initial, item)=>{
            let parts = item.split("=")
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial
        }, {})
}


//http://localhost:3000/#access_token=BQBRZz_Vv-g5np7Gis1isBQtCXPy6UK9Sz80PqYhSmmDHuo3BxPTFXeWNVtI0oBcPvGh5LN028tksJDrJW5gIrVi0QSsaHMUzxBZuqHyDqEEa9lv6HNNnwDTs5pDU7Ngc5oAc9hOJMhBoxO8EiqKCjb7sFLY0S1gfBwcIVvxU7pz1qUhiskK5PRa44OipsSZw128BO9CPEoDk_-R53P8uXWA&token_type=Bearer&expires_in=3600
//window.location.hash = #access_token=BQBRZz_Vv-g5np7Gis1isBQtCXPy6UK9Sz80PqYhSmmDHuo3BxPTFXeWNVtI0oBcPvGh5LN028tksJDrJW5gIrVi0QSsaHMUzxBZuqHyDqEEa9lv6HNNnwDTs5pDU7Ngc5oAc9hOJMhBoxO8EiqKCjb7sFLY0S1gfBwcIVvxU7pz1qUhiskK5PRa44OipsSZw128BO9CPEoDk_-R53P8uXWA&token_type=Bearer&expires_in=3600
//.substring(1) =access_token=BQBRZz_Vv-g5np7Gis1isBQtCXPy6UK9Sz80PqYhSmmDHuo3BxPTFXeWNVtI0oBcPvGh5LN028tksJDrJW5gIrVi0QSsaHMUzxBZuqHyDqEEa9lv6HNNnwDTs5pDU7Ngc5oAc9hOJMhBoxO8EiqKCjb7sFLY0S1gfBwcIVvxU7pz1qUhiskK5PRa44OipsSZw128BO9CPEoDk_-R53P8uXWA&token_type=Bearer&expires_in=3600
//split("&") = ["access_token=BQBRZz_Vv-g5np7Gis1isBQtCXPy6UK9Sz80PqYhSmmDHuo3BxPTFXeWNVtI0oBcPvGh5LN028tksJDrJW5gIrVi0QSsaHMUzxBZuqHyDqEEa9lv6HNNnwDTs5pDU7Ngc5oAc9hOJMhBoxO8EiqKCjb7sFLY0S1gfBwcIVvxU7pz1qUhiskK5PRa44OipsSZw128BO9CPEoDk_-R53P8uXWA"],["token_type=Bearer"],["expires_in=3600"]



const endpoint = "https://accounts.spotify.com/authorize"
const clientID = "9984eb9f749b44d48c4af49cabbe7013"
const redirectUri = "http://localhost:3000/"
const scopes = ["user-read-currently-playing",
"user-read-recently-played",
"user-read-playback-state",
"user-top-read",
"user-modify-playback-state"]

export const loginUrl = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&show_dialog=true`