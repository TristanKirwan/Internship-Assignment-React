import React, { Component } from 'react'
import { Button, Jumbotron, Input, InputGroupAddon } from 'reactstrap';
import Artistcard from './Artistcard'
import API_KEY from '../API_KEY'

export default class Artistoverview extends Component {
    constructor(){
        super()
        this.state={
            foundartists: [],
            searchterm: ''
        }   
        this.handlechange = this.handlechange.bind(this)
    }
    handlechange(event){
        let {value, type, checked, name} = event.target
        if(type === "checkbox"){
            this.setState({
                [name]: checked
            })
        }
        else{
            this.setState({
            [name]: value
            })
        }
    }
    searchforartists(searchterm){
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${this.state.searchterm}&api_key=${API_KEY}&format=json`)
        .then(res => { 
            return res.json()
        })
        .then(res => {
            console.log(res)
            this.setState({
                foundartists: res.results.artistmatches.artist
            })
        })
    }

    render() {
        let artists = this.state.foundartists.map(artist =>{
            return(
              <Artistcard
                    name={artist.name}
                    mbid={artist.mbid}
                    listeners={artist.listeners}
                />
            )
          })
        return (
            <div className="colbg">
                <div className="wrapper">
                    <Jumbotron className="Searchheader">
                        <h2>Label-A Artistfy</h2>
                        <Input type="text"
                            placeholder="Enter artist name..."
                            name="searchterm"
                            value={this.state.searchterm}
                            onChange={this.handlechange}>
                        </Input>
                        <button className="main-transparant-button smallbutton" onClick={() => this.searchforartists(this.state.searchterm)}>Search on artist name</button>
                        <hr />
                    </Jumbotron>
                    <div className="flexcards flexcenterh">
                        {artists}
                    </div>
                </div>
            </div>
        )
    }
}
