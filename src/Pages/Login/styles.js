import styled from "styled-components"

export const Container = styled.section`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100%;
`
export const Card = styled.div`
    width: 549px;
    height: 465px;
    background: #FFF7E3;
    border-radius: 25px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    padding:7px;
`;



export const Title = styled.h1`
    font-family: Share Tech Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 39px;
    color: #141313;
`;

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;



`;
export const Input = styled.input`
    width:287px;
    padding: 13px;
    border-radius: 4px;
    margin-bottom:15px;
    background: rgba(249, 255, 177, 0.56);
        ::placeholder{
        font-family: Short Stack;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #000000;
    }
`;

export const Button = styled.button`
    width: 154px;
    height:37px;
    border-radius: 5px;
    margin-bottom:28px;
    color:${props => props.color};
    background:${props => props.background};
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: Sniglet;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.7px;
    text-transform: capitalize;


`;

