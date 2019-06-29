import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Addfavalbum} from '../Actions/favouriteactions'
import API_KEY from '../API_KEY'

class Albumcard extends Component {
    constructor(){
        super()
        this.state={
            releaseyear: null,
            tags: []
        }
    }
    componentDidMount(){
            fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&artist=${this.props.artist}&album=${this.props.name}&api_key=${API_KEY}&format=json`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    releaseyear: res.album.wiki.published,
                    tags: res.album.tags.tag
                })
            })
            .catch(err => console.log(err))
    }

    
    render(){
        let imgsrc = this.props.image
        if(imgsrc.length === 0){
            let imgscr = "http://www.wmhbradio.org/wp-content/uploads/2016/07/albumcover-placeholder.jpg"
        }
        return (
        <div className="albumcard whiteonblackcard">
            <Link to={{
                            pathname: '/albumpage',
                            albumdata:{
                                name: this.props.name,
                                artist: this.props.artist,
                                playcount: this.props.playcount,
                                albumcoversrc: this.props.image
                            }
                    }}>

                {this.props.image === "" 
                    ? <img src="http://www.wmhbradio.org/wp-content/uploads/2016/07/albumcover-placeholder.jpg" alt="album cover"></img> 
                    : <img src={this.props.image}></img>}
                <div className="albuminfo">
                    <h1>{this.props.name}</h1>
                    <p className="greysubtext">Plays: {this.props.playcount}</p>
                    <p className="greysubtext">Release: {this.state.releaseyear != null ? this.state.releaseyear : "unknown"}</p>
                </div>
            </Link>
            <button onClick={() => this.props.Addfavalbum(this.props.name, this.props.artist)} className="main-transparant-button smallbutton">Add to favourites</button>
        </div>
    )
    }
}

Albumcard.propTypes = {
    AddToFavouriteAlbum: PropTypes.func.isRequired,
    favalbums: PropTypes.string.isRequired
}
const mapStateToProps = state => ({
    favalbums: state.favourite.favouritealbumsids,
})
export default connect(mapStateToProps, {Addfavalbum})(Albumcard)