import styled from 'styled-components'

export const Box = styled.div`
    padding: 0.2rem 0;

    h1{
        font-size: 18px;
        padding: 0.2 0;
    }

    .rec-pagination {
        border: 1px solid blue;
        display: none;
    }

    .rec-arrow {
        background: transparent;

        &:hover {
            background-color: red;
        }
    }
`
export const Item = styled.div`
    width: 16.188rem;
    //height: 242px;
    margin-right: 0.625rem;

    /* border: 1px solid red; */

    padding: 0.375rem;

    transition: 0.3s;
    border-radius: 6px;

    &:hover {
        background: #2C2C2C;
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