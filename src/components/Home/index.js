import React, { Component } from "react";

//Components
import Nav from '../Nav'
import Main from '../Main'

export default class Home extends Component {
    render(){
        return(
            <>
                <Nav />
                <Main />
            </>
        )
    }
}