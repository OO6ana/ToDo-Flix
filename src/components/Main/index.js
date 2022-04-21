import React, { Component } from "react";

import { PosterTeste } from "../../images";

import * as S from './styles'

export default class Main extends Component {
    render(){
        return(
            <S.Container>
                <S.BoxInfo>
                <img src={PosterTeste} alt=""/>
                <S.Text>
                    <p>Visto recentemente</p>
                    <h1>Capitão Fantástico</h1>
                    <p>Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.</p>
                </S.Text>
                </S.BoxInfo>
            </S.Container>
        )
    }
}