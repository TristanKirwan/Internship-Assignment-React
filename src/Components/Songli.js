import React from 'react'
import API_KEY from '../API_KEY'

export default class Songli extends React.Component{
    constructor(){
        super()
        this.state={
            playcount: null,
            duration: null,
            name: ''
        }
    }
    componentDidMount(){
        fetch(`http://ws.audioscrobbler.com//2.0/?method=track.getinfo&track=${this.props.data.name}&artist=${this.props.data.artist.name}&api_key=${API_KEY}&format=json`)
        .then(res => res.json())
        .then(res => {
            let durationminutes = Math.floor((res.track.duration / 1000) /60)
            let durationseconds = ((res.track.duration / 1000) % 60) / 100
            
            // console.log(res)
            this.setState({
                playcount: res.track.listeners,
                duration: durationminutes + durationseconds,
                name: res.track.name
            })
        })
    }
        render(){
            return(
            <React.Fragment>
                <tr key={this.props.data.name}>
                {console.log(`props is: ${this.props.data.name}`)}
                    <td>{this.state.name}</td>
                    <td>{this.state.playcount}</td>
                    <td>{this.state.duration}</td>
                </tr>
            </React.Fragment>
            )
        }
}
