import styled from "styled-components"

export const Container = styled.div`
    border: 2px solid green;
    height: 100vh;
    background: #000000;
    padding: 0 2rem;
`
export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: 2px solid pink;
`
export const MenuBox = styled.div`
    border: 1px solid red;
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
    border: 2px solid grey;
    display: flex;
    align-items: center;

    button{
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

    img{
        width: 19px;
        height: 19px;
    }

    input{
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