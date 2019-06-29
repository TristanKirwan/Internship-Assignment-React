import React from 'react'
import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Addfavartist} from '../Actions/favouriteactions'

function Artistcard(props){

return (
    <div className="artistcard flexcard-thirdwidth whiteonblackcard">
            <h2>{props.name}</h2>
            <hr />
            {/* <img src="https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png" alt="Artist picture" className="Albumcover-left"/> */}
            <p className="greysubtext">Listeners: {props.listeners}</p>
            <div className="rightbuttons bottom-fix">
                <button className="main-transparant-button smallbutton" onClick={() => props.Addfavartist(props.name)}>Add to favourites</button>
                <Link to={{
                        pathname: '/artistpage',
                        artistdata:{
                            mbid: props.mbid
                        }
                }}>
                    <button className="main-transparant-button smallbutton" >See artist info</button>
                </Link>
            </div>
        </div>
    )
}

Artistcard.propTypes = {
    AddToFavouriteArtist: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
})
export default connect(mapStateToProps, {Addfavartist})(Artistcard)