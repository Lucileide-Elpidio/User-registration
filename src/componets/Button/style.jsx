import styled from "styled-components"

export const Button = styled.button`
background: ${props => props.isBack ? `transparent` : ` #10002B`};
width: 342px;
height: 74px;
margin-top:100px;
border-radius: 14px;
color: #88049F;
font-size: 17px;
font-weight: 700;
line-height: 28px;
border: ${props => props.isBack ? `1px solid #FFFFFF` : `none`};
display:flex;
justify-content:center;
align-items:center;
gap:20px;
cursor: pointer;

&:hover{
    opacity:0.8;
    }
    
    &:active{
        opacity:0.5;
    }

    img{
        transform:${props => props.isBack && `rotatey(180deg)`};
    }

    @media(max-width:991px){
        width:95%;
        margin-top:30px;
    }
    `;