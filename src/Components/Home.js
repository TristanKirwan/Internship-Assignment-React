import React from 'react'
import history from '../history'
import { Button, Jumbotron, Input, InputGroupAddon } from 'reactstrap';
import {NavLink} from 'react-router-dom'

export default function Home(props) {
    return (
        <div className="fwfhbackground homebg darkendiv">
            <div className="landingsection">
                <div className="hometextbox">
                    <h1>Label-A's Artistfy</h1>
                    <h2>Find out everything about your favourite artists.</h2>
                    <NavLink to="/artistoverview"><button className="main-transparant-button">Get started</button></NavLink>
                    {/* <button onClick={() => props.Addfavalbum()}></button> */}
                    <h1>{props.favalbums}</h1>
                </div>
            </div>
        </div>
    )
}