import styled from 'styled-components';

export const Container = styled.div`
    background: #000000;
    padding: 4rem 2rem;
    color: #ffff;
`
export const BoxInfo = styled.div`
    display: flex;
    img {
        width: 26.563rem;
        height: 15.125rem;
    }
`

export const Text = styled.div`
    width: 25.313rem;
    margin-left: 3rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 40px;
        padding: 10px 0;
    }
    p {
        font-size: 14px;
    }
`