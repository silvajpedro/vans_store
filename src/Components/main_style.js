import styled, { createGlobalStyle } from "styled-components";
export const colors ={
 leftColor:'#FFFFFF',
 firstRightColor:"#203885",
 secondRightColor:"#101C43",
 thirdRightColor:"#171A2A",
 textColor:"#363534"   
}

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

export const MainBox = styled.main`
display: flex;
height: 112vh;
`
export const LeftSection = styled.section`
background-color:${colors.leftColor} ;
height: 112vh;
width: 50%;
`
export const RightSection = styled(LeftSection)`
background: linear-gradient(175deg, ${colors.firstRightColor } 32%, ${colors.secondRightColor} 90%, ${colors.thirdRightColor} 99%);
`
export const MainRightBox = styled.div`
display: flex;
align-items:flex-end;
justify-content:center;
border: solid;
height: 95vh;
`
export const CarroselImage = styled.img`
width: 7vw;
margin-left:1vw;
margin-right:1vw;
cursor: pointer;
/* border:solid red; */
transition: ease-in-out 0.6s;
transform:${props => props.isOn ? `scale(114%)`:`scale(80%)`}
`
export const NavLeftSection = styled.nav`
position: sticky;
display: flex;
justify-content: space-around;
align-items: center;
height: 14vh;
width:100%;
/* border: solid; */

`
export const ShoeImage = styled.img`
position: absolute;
top: 24vh;
right: 9vw;
width: 64vw;
object-fit: contain;
/* border: solid; */
/* height: 94.1vh; */
`
export const MainSection = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 84vh;
/* border:solid; */
`
export const TextBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
/* border: solid; */
width: 100%;
height: 57vh;
color: #363534;
h2{
    font-size: 4.5vw;
    /* border: solid; */
    width: 18vw;
    margin-left: 5vw;
    line-height:9.5vh;
}
p{
    margin-left: 5vw;
    /* border: solid; */
    width: 31.5vw;
    font-family: "Montserrat",sans-serif;
    font-size: 16px;
}
`
export const ButtonsBox = styled.div`
position: relative;
right:9vw;
display: flex;
justify-content: space-between;
/* border: solid; */
width: 44%;
height: 8vh;
button{
    background-color: #203885;
    border: none;
    height:7vh;
    width: 10vw;
    color: #ffff;
    font-size: 1.3vw;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }
}
`
export const VansImage = styled.img`
width: 7.2vw;
object-fit: cover;
margin-right:5vw;
`
export const FirstUlNav = styled.ul`
position: relative;
top: 0.8vh;
left: 1.6vw;
display: flex;
justify-content: space-between;
width: 22vw;
/* border: solid; */
`
export const FirstLiNav = styled.li`
font-family: "Montserrat", sans-serif;
list-style: none;
color:${colors.textColor};
font-size:21px;
font-weight: 500;
cursor: pointer;
`
export const NavRightSection = styled(NavLeftSection)`
height: 14.9vh;
/* border: solid red; */
`
export const SecondUlNav = styled(FirstUlNav)`
left:-2.1vw;
/* border: solid; */
width: 80%;
`
export const SecondLiNav = styled(FirstLiNav)`
color:${colors.leftColor};
font-weight: 300;
`
export const ImagesBox = styled.div`
display: flex;
justify-content: space-between;
width:7.1vw;
/* border: solid; */
`
export const SearchImage = styled.img`
width: 2.15vw;
cursor: pointer;
`
export const ShopImage = styled.img`
width: 2.5vw;
cursor: pointer;
`