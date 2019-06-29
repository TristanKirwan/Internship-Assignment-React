import {ADDTOFAVOURITEALBUM, ADDFAVOURITEARTIST} from '../Actions/types'
const initialstate = {
    favouritesongs: [],
    favouritealbumsids: [],
    favouriteartists: []
}

export default function(state = initialstate, action){
    switch(action.type){
        case ADDTOFAVOURITEALBUM:
            return{
                ...state,
                favouritealbumsids: [
                    ...state.favouritealbumsids, {
                        albumtitle: action.payload.albumtitle,
                        artist: action.payload.artist
                }]
            }
        case ADDFAVOURITEARTIST:
            return{
                ...state,
                favouriteartists: [
                    ...state.favouriteartists, action.payload
                ]
            }
        default:
            return state
    }
}