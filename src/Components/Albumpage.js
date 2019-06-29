import React, { Component } from 'react'
import Songli from './Songli'
import API_KEY from '../API_KEY'

export default class Albumpage extends Component {
    constructor(){
        super()
        this.state={
            title: '',
            artist: '',
            songs: [],
            playcount: null,
            albumcoversrc: ''
        }
    }  
    componentDidMount(){
        let {name, artist, playcount, albumcoversrc} = this.props.location.albumdata
        fetch(`http://ws.audioscrobbler.com//2.0/?method=album.getinfo&artist=${artist}&album=${name}&api_key=${API_KEY}&format=json`)
        .then(res => res.json())
        .then(res => {
            this.setState({
                title: name,
                artist: artist,
                songs: res.album.tracks.track,
                playcount: playcount,
                albumcoversrc: albumcoversrc
            })
        })
    }
    render() {
        let songs = this.state.songs.map(song => {
            return(
                <Songli data={song} key={song.mbid}/>
            )
        })
        return (
            <div className="albumpage">
                <div className="wrapper albumcard-albumpage whiteonblackcard">
                    {console.log(`songs is: ${this.state.songs}`)}
                    <div className="Albumhead">
                        <img src={this.state.albumcoversrc} alt="Album cover image"></img>
                        <p>Album</p>
                        <h1 className="Title">{this.state.title}</h1>
                        <h2 className="greysubtext">By: {this.state.artist}</h2>
                        <h3 className="greysubtext">Playcount: {this.state.playcount}</h3>
                    </div>
                    <div className="songlist">
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
                </div>
            </div>
        )
    }
}
