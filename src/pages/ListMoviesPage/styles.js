import styled from 'styled-components'

export const Container = styled.div`
   padding: 2rem;

   h1{
       color: #fff;
       font-size: 29px;
       margin-bottom: 2px;
       font-weight: lighter;
   }

    /* border: 1px solid red; */
`
export const BoxFilms = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    /* border: 1px solid blue; */

    div {
        margin: 0.6rem 0.6rem 0 0;
    }

    img {
        width: 280px;
        height: 150px;
        border-radius: 5px;

        object-fit: cover;
    }

    h3 {
        display: flex;
        justify-content: space-between;
        color: #fff;
        font-weight: bold;
        font-size:16px;

        img {
          width: 16px;
          height: 16px;  
        }

        svg {
            fill: red;
        }
    }

    p:nth-last-child(1){
        width: 260px;
        color: #fff;
        font-size: 12px;

        letter-spacing: 0.03rem;
    }
`