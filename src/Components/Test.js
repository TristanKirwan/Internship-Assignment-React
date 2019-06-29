import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'

export default function Albumcard(props) {
    let {data} = props
    let imgsrc = data.image[3]["#text"]
    console.log(`album name is: ${data.name} imgsrc: ${imgsrc.length}`)
    if(imgsrc.length === 0){
        let imgscr = "http://www.wmhbradio.org/wp-content/uploads/2016/07/albumcover-placeholder.jpg"
    }
    console.log(`imgsrc: ${imgsrc}`)
    
    return (
        <div className="albumcard whiteonblackcard">
            <Link to={{
                            pathname: '/albumpage',
                            albumdata:{
                                name: data.name,
                                artist: data.artist.name,
                                playcount: data.playcount,
                                albumcoversrc: data.image[3]["#text"]
                            }
                    }}>
                {console.log(data)}
                {data.image[3]["#text"] === "" 
                    ? <img src="http://www.wmhbradio.org/wp-content/uploads/2016/07/albumcover-placeholder.jpg" alt="album cover"></img> 
                    : <img src={data.image[3]["#text"]}></img>}
                <div className="albuminfo">
                    <h1>{data.name}</h1>
                    <p className="greysubtext">Plays: {data.playcount}</p>
                </div>
            </Link>
        </div>
    )
}
