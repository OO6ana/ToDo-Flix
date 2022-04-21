import React, { Component } from "react";
import Home from './components/Home'

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default class App extends Component{
  render(){
    return(
      <div>
        <Home />
        <GlobalStyle/>
      </div>
    )
  }
}