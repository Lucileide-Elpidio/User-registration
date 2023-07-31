import styled from "styled-components"
import Background from "../../assets/bg2.svg"

export const Container = styled.div`
height:100vw;
background: url("${Background}");
background-size:cover;
display:flex;
flex-direction:column;
align-items:center;
gap:40px;

@media(max-width:991px){
    height:100vh;
}
`;

export const Image = styled.img`
margin-top:30px;

@media(max-width:991px){
    width:60%
}

`;

export const User = styled.li`
display:flex;
justify-content:space-around;
align-items:center;
box-shadow: 0px 4px 4px 0px #00000040;
background: #FFFFFF40;
width: 342px;
height: 58px;
margin-top: 20px;
border-radius: 14px;
border:none;
outline:none;

p {
    color: #88049F;
font-size: 20px;
font-weight: 900;
line-height: 28px;
}

button{
    background:none;
    border:none;
    cursor:pointer;
}

@media(max-width:991px){
    width:100%
}

`;









