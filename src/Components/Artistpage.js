import React, { Component } from 'react'
import Albumcard from './Albumcard'
import Songli from './Songli'
import API_KEY from '../API_KEY'

export default class Artistpage extends Component {
    constructor(){
        super()
        this.state={
            artistname: '',
            albums: [],
            songs: [],
            amountshownsongs: 5,
            amountshownalbums: 8
        }
        this.showmorealbums = this.showmorealbums.bind(this)
    }

    componentDidMount(){
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=${this.props.location.artistdata.mbid}&api_key=${API_KEY}&format=json`)
        .then(res => res.json())
        .then(res =>{
            this.setState({
                artistname: res.artist.name
            })
        })
        fetch(`http://ws.audioscrobbler.com//2.0/?method=artist.gettopalbums&mbid=${this.props.location.artistdata.mbid}&api_key=${API_KEY}&format=json`)
        .then(res => res.json())
        .then(res => 
            this.setState({
                albums: res.topalbums.album
            })
        )
        fetch(`http://ws.audioscrobbler.com//2.0/?method=artist.gettoptracks&mbid=${this.props.location.artistdata.mbid}&api_key=${API_KEY}&format=json`)
        .then(res => res.json())
        .then(res =>{
            this.setState({
                songs: res.toptracks.track
            })
        })
    }

    showmorealbums(){
        this.setState({
            amountshownalbums: this.state.amountshownalbums + 4
        })
    }
    showmoresongs(){
        this.setState({
            amountshownsongs: this.state.amountshownsongs + 5
        })
    }

    render() {
        let albums = this.state.albums.slice(0,this.state.amountshownalbums).map(album =>{
            return(
              <Albumcard 
                
                name={album.name}
                artist={album.artist.name}
                image={album.image[3]["#text"]}
                playcount={album.playcount}
                key={album.mbid}/>
            )
          })
        let songs = this.state.songs.slice(0,this.state.amountshownsongs).map(song => {
            return(
                <Songli data={song} key={song.mbid}/>
            )
        })
        return (
            <div>
            <div className="fwfhbackground artistpagebg"></div>
                <div className="wrapper">
                    <h1 className="Artistname">{this.state.artistname}</h1>
                    <h2>Albums:</h2>
                    <div className="flexcards artist-album-cards">
                        {albums}
                    </div>
                    <div className="fw">
                        <button className="main-transparant-button smallbutton" onClick={() => this.showmorealbums()}>Show more</button>
                    </div>
                    <h1>Songs:</h1>
                    <div className="songlist wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Listens</th>
                                <th className="pushedright">Duration</th>
                            </tr>
                            </thead>
                            <tbody>
                                {songs}
                            </tbody>
                    </table>
                </div>
                <div className="fw">
                    <button className="main-transparant-button smallbutton" onClick={() => this.showmoresongs()}>Show more</button>
                </div>
            </div>
        </div>
        )
    }
}
