import {ADDTOFAVOURITEALBUM, ADDFAVOURITEARTIST } from './types'

export function Addfavalbum(albumtitle, artist){
    return function(dispatch){
        console.log(`Albumtitle is: ${albumtitle}, artist: ${artist}`)
        dispatch({
            type: ADDTOFAVOURITEALBUM,
            payload: {
                albumtitle: albumtitle,
                artist: artist
            }
        })
    }
}
export function Addfavartist(artist){
    return function(dispatch){
        dispatch({
            type: ADDFAVOURITEARTIST,
            payload: artist
        })
    }
}