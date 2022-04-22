import styled from 'styled-components'

export const Box = styled.div`
    padding: 25px;
`
export const Item = styled.div`
    width: 16.188rem;
    //height: 242px;
    margin-right: 0.625rem;

    /* border: 1px solid red; */

    padding: 0.375rem;

    transition: 0.3s;

    &:hover {
        background: #222222;
    }
`

export const Poster = styled.div`

    img {
        width: 100%;
        //height: 242px;

        object-fit: cover;
    }
`
export const OverText = styled.div`
    p:nth-child(1){
        font-size: 16px;
        font-weight: bold;
    }

    p:nth-child(2){
        font-size: 12px;
    }
`