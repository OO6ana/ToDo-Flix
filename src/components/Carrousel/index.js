import React, {Component} from "react";

import Carousel, { consts } from 'react-elastic-carousel';

import movies from "../../services/movies";

import * as S from './styles'

export default class Carrousel extends Component{
    // myArrow({ type, onClick, isEdge }) {
    //     const pointer = type === consts.PREV ? '👈' : '👉'
    //     return (
    //       <button onClick={onClick} disabled={isEdge}>
    //         {pointer}
    //       </button>
    //     )
    //   }

    render() {
        return(
            <S.Box>
                <h1>Destaques</h1>

                <Carousel 
                    itemsToShow={3} 
                    itemsToScroll={1} 
                    renderArrow={this.myArrow} 
                    enableAutoPlay 
                    autoPlaySpeed={2800}>
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