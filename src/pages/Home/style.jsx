import styled from "styled-components"
import Background from "../../assets/bg1.svg"

export const Container = styled.div`
height:100vw;
background: url("${Background}");
background-size:cover;
display:flex;
flex-direction:column;
align-items:center;
gap:40px;

`;

export const Image = styled.img`
margin-top:30px;

@media(max-width:991px){
    width:60%;
}
`;
export const ContainerItems = styled.div`
background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 0px 0px;
padding:50px 36px;
display:flex;
flex-direction:column;
height:100%;
min-heigth:calc(100vh-170px);
`;

export const InputLabel = styled.p`
color: #88049F;
font-size: 18px;
font-weight: 700;
line-height: 22px;
text-align: left;
margin-left:25px;

`;

export const Input = styled.input`
box-shadow: 0px 4px 4px 0px #00000040;
background: #FFFFFF40;
width: 342px;
height: 58px;
padding-left:25px;
margin-bottom: 34px;
border-radius: 14px;
border:none;
outline:none;
color: #88049F;
font-size: 20px;
font-weight: 900;
line-height: 28px;

@media(max-width:991px){
    width:100%
}
`;
export const ContainerButton = styled.button`
background:  #10002B;
width: 342px;
height: 74px;
margin-top:100px;
border-radius: 14px;
color: #88049F;
font-size: 17px;
font-weight: 700;
line-height: 28px;
border:none;
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
        transform:rotatey(180deg);
    }
`;










