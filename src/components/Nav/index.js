import React, { Component } from "react";
import * as S from "./style"

// images
import Logo from '../../images/logo.png'
import Search from '../../images/search.png'
import User from '../../images/user.png'
import Arrow from '../../images/arrow.png'

export default class Nav extends Component{
  render(){
    return(
      <S.Container>
        <S.Header>
            <S.MenuBox>
                <img src={Logo} alt="Logo ToDo Flix"></img>
                <a>Início</a>
                <p>Categorias</p>
            </S.MenuBox>
            <S.InteractionBox>
                <button>Adicionar filme</button>
                <S.BoxInput>
                    <img src={Search} alt=""></img>
                    <input placeholder="Pesquisar"/>
                </S.BoxInput>
                <S.UserBox>
                    <img src={User} alt=""></img>
                    <img src={Arrow} alt=""></img>
                </S.UserBox>
            </S.InteractionBox>
        </S.Header>
      </S.Container>
    )
  }
}