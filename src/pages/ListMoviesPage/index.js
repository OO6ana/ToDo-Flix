import React, {Component} from "react";
import * as S from './styles'

import ListMovies from "../../components/ListMovies";

import { NotaBoa, NotaRuim } from "../../images";

// movies
import movies from "../../services/movies"

export default class ListMoviesPage extends Component{
    render(){
        return(
            <>
            <ListMovies />

            <S.Container>
                <h1>Todos</h1>
                <S.BoxFilms>
                    {movies.map((item)=>{
                        return(
                            <div>
                                <img src={item.poster} alt={`Poster do filme: ${item.title}`}/> 
                                <h3>{item.title} <span>{item.nota} {item.nota >= 4 ? <img src={NotaBoa} alt=""/> : <img className="ruim" src={NotaRuim} alt=""/> }</span></h3>
                                <p>{item.overview}</p>
                            </div>
                        )
                    })}
                </S.BoxFilms>
            </S.Container>
            </>
        )
    }
}