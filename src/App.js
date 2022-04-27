import React, { Component } from "react";
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components";

// pages
import HomePage from './pages/HomePage'
import ListMoviesPage from './pages/ListMoviesPage'

// images
import { Logo, Search, User, Arrow } from './images'


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
`
export const Container = styled.div`
    height: 100vh;
    background: #000000;
`

export const Nav = styled.div`
    width: 100%;
    padding: 0.5rem 2rem;
    position: fixed;

    background: #000000;

`
export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* border: 2px solid pink; */
`
export const MenuBox = styled.div`
    /* border: 1px solid red; */
    color: #fff;
    display: flex;
    align-items: center;
    //justify-content: space-between;
    //max-width: 18rem;
    font-size: 13px;

    img, 
    a, 
    p {
        margin-right: 0.5rem;
    }
`
export const InteractionBox = styled.div`
    display: flex;
    align-items: center;

    button {
        background-color: #E71B27;
        border: none;
        width: 112px;
        padding: 0.5rem 0;
        //height: 32px;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            opacity: 0.9;
        }
    }
`
export const BoxInput = styled.div`
    display: flex;
    align-items: center;
    width: 25rem;
    background-color: #2C2C2C;
    padding: 0.4rem;
    border-radius: 4px;
    margin-left: 0.8rem; 

    img {
        width: 19px;
        height: 19px;
    }

    input {
        width: 100%;
        background-color: transparent;
        border: none;
    }
`
export const UserBox = styled.div`
    display: flex;
    align-items: center;
    margin-left: 0.8rem; 

    img:nth-child(1) {
        width: 31px;
        height: 31px;
    }

    img:nth-child(2) {
        width: 24px;
        height: 24px;
    }
`
export const Dropdown = styled.div`
    position: relative;
    display: inline-block;

    div {
        display: none;
        position: absolute;
        background-color: #000000;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;

        padding: 0.5rem;

        a {
            margin: 0.4rem;
        }
    }

    button {
        display: flex;
        align-items: center;
        background-color: #000000;
        color: #fff;
        border: none;

        cursor: pointer;

        img {
            width: 24px;
            height: 24px;
        }
    }

    &:hover {
        div {
            display: flex;
            flex-direction: column;
        }
    }
`
const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    //padding: 5px;

    &:hover {
        color: yellow;
    }
    
`
export default class App extends Component{
  render(){
    return(
        <Container>
        <Router>
            <Nav>
            <Header>
                <MenuBox>
                    <img src={Logo} alt="Logo ToDo Flix"></img>
                    <StyledLink to="/">Início</StyledLink>
                    <Dropdown>
                        <button>
                            Categorias
                            <img src={Arrow} alt=""></img>
                        </button>
                        <div>
                            <StyledLink to="todos-os-filmes">Todos</StyledLink>
                            <StyledLink to="Teste">Favoritos</StyledLink>
                            <StyledLink to="Teste">Já vistos</StyledLink>
                            <StyledLink to="Teste">Adicionados</StyledLink>
                        </div>
                    </Dropdown>
                </MenuBox>
                <InteractionBox>
                    <button>Adicionar filme</button>
                    <BoxInput>
                        <img src={Search} alt=""></img>
                        <input placeholder="Pesquisar"/>
                    </BoxInput>
                    <UserBox>
                        <img src={User} alt=""></img>
                        <img src={Arrow} alt=""></img>
                    </UserBox>
                </InteractionBox>
            </Header>
        <GlobalStyle />
        </Nav>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="todos-os-filmes" element={<ListMoviesPage/>}/>
            </Routes>
        </Router>
      </Container>
    )
  }
}