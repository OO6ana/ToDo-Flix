import React, {Component} from "react";

import Carousel from 'react-elastic-carousel'

import { PosterShrek, PosterCapitaoFantastico, PosterHojeEuQueroVoltarSozinho, PosterQueHorasElaVolta, PosterSiperMan, PosterUmSonhoDeLiberdade } from '../../images'

import * as S from './styles'

const movies = [
    {
        title: 'Shrek',
        overview: 'Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.',
        poster:  PosterShrek
    }, 
    {
        title: 'Capitão Fantástico',
        overview: 'Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.',
        poster: PosterCapitaoFantastico
    },
    {
        title: 'Hoje eu quero voltar sozinho',
        overview: 'Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.',
        poster: PosterHojeEuQueroVoltarSozinho
    },
    {
        title: 'Que horas ela volta?',
        overview: 'Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.',
        poster: PosterQueHorasElaVolta
    },
    {
        title: 'Spider-Man',
        overview: 'Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.',
       poster: PosterSiperMan
    },
    {
        title: 'Um sonho de liberdade',
        overview: 'Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.',
        poster: PosterUmSonhoDeLiberdade
    }
]


export default class Carrousel extends Component{
    render(){

        return(
            <S.Box>
                <h1>Destaques</h1>

                <Carousel itemsToShow={5}>
                    {movies.map((item) => {
                        return (
                            <S.Item>
                                <S.Poster>
                                    <img src={item.poster} alt={`Poster do filme: ${item.title}`}/> 
                                </S.Poster>
                                <S.OverText>
                                    <p>{item.title}</p>
                                    <p>{item.overview}</p>
                                </S.OverText>
                            </S.Item>
                        )
                    })}
                </Carousel>
            </S.Box>
        )
    }
}