import React, { Component } from 'react'
import Albumcard from './Albumcard'
import Artistcard from './Artistcard'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import API_KEY from '../API_KEY'

class Favourites extends Component{
    constructor(){
        super()
        this.state={
            favouritealbums: [],
            favouriteartists: []
        }
    }

    componentDidMount(){
        // let albums = []
        // this.props.favalbumsids.forEach(function(){
        //     fetch('http://ws.audioscrobbler.com//2.0/?method=album.getinfo&artist=Hands Like Houses&album=Unimagine&api_key=${API_KEY}&format=json')
        //     .then(res => res.json())
        //     .then(res => {
        //         this.setState({
        //             favouritealbums: [this.state.favouritealbums, res]
        //         })
        //     })
        // })
        // console.log(`albums after: ${albums}`)
        
        var self = this
        for(let i = 0; i < this.props.favalbumsids.length; i ++){
            fetch(`http://ws.audioscrobbler.com//2.0/?method=album.getinfo&artist=${this.props.favalbumsids[i].artist}&album=${this.props.favalbumsids[i].albumtitle}&api_key=${API_KEY}&format=json`)
            .then(res => res.json())
            .then(res => {
                self.setState({
                    favouritealbums: [...self.state.favouritealbums, res.album]
                })
            })
        }
        for(let i = 0; i < this.props.favartistnames.length; i ++){
            fetch(`http://ws.audioscrobbler.com//2.0/?method=artist.getinfo&artist=${this.props.favartistnames[i]}&api_key=${API_KEY}&format=json`)
            .then(res => res.json())
            .then(res => {
                self.setState({
                    favouriteartists: [...self.state.favouriteartists, res.artist]
                })
            })
        }
    }

    render(){
        let albums = this.state.favouritealbums.map(album =>{
            return(
                <Albumcard 
                name={album.name}
                artist={album.artist}
                image={album.image[3]["#text"]}
                playcount={album.playcount}
                key={album.mbid}/>

            )
          })
        let artists = this.state.favouriteartists.map(artist => {
            return(
                <Artistcard
                    name={artist.name}
                    mbid={artist.mbid}
                    listeners={artist.stats.listeners}
                />
            )
        })
    return (
            <div className="wrapper">
                <div className="heading">
                    <h1>We love that you love music. That's why we store all of your favourites!</h1>
                </div>
                <div>
                    <h2 className="heading">Here's some of your favourite albums:</h2>
                    <div className="flexcards artist-album-cards flexleft">
                        {albums}
                    </div>
                </div>
                <div>
                    <h2 className="heading">Here's some of your favourite Artists:</h2>
                    <div className="flexcards artist-album-cards">
                        {artists}
                    </div>
                </div>
            </div>
        )
    }
}
Favourites.propTypes = {
    favalbumssids: PropTypes.string.isRequired
}
const mapStateToProps = state => ({
    favalbumsids: state.favourite.favouritealbumsids,
    favartistnames: state.favourite.favouriteartists
})
export default connect(mapStateToProps,{})(Favourites)