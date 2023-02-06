import React, {useState} from "react";
import * as S from "./main_style.js";
import VansLogo from "../Assets/logo_vans.svg";
import  Search from "../Assets/search.svg";
import Shop from "../Assets/shopping.svg";
import BlackClassic from "../Assets/BlackClassic.png";
import BlackClassic2 from "../Assets/BlackClassic2.png";
import Carrosel from "./carrosel/carrousel.jsx";
import tenis1 from "../Assets/tenis1_.png";
import tenis2 from "../Assets/tenis2_.png";
import tenis3 from "../Assets/tenis3_.png";
import tenis4 from "../Assets/tenis4_.png";
import tenis5 from "../Assets/tenis5_.png";
import tenis6 from "../Assets/tenis6_.png";
import tenis7 from "../Assets/tenis7_.png";
import tenis1_s from "../Assets/tenis1_s.png"
import tenis2_s from "../Assets/tenis2_s.png"
import tenis3_s from "../Assets/tenis3_s.png"
import tenis4_s from "../Assets/tenis4_s.png"
import tenis5_s from "../Assets/tenis5_s.png"
import tenis6_s from "../Assets/tenis6_s.png"
import tenis7_s from "../Assets/tenis7_s.png"
import {Classic,ClassicDescription,Indie, IndieDescription, Skate, SkateDescription, SkateGum,SkateGumDescription, EraBlack,EraBlackDescription,Sk8Low,Sk8LowDescription,Atwood, AtwoodDescription} from "./vans_info.js"

export default function Main(){
const [VansName,setVansName] = useState(Classic)
const [VansText,setVansText] = useState(ClassicDescription)
const [Shoe, setShoe] = useState(tenis4_s)
const [indexShoe,setIndexShoe] = useState(3)
const [FirstGrown, setFirstGrown] = useState(false)
const [SecondGrown, setSecondGrown] = useState(false)
const [ThirdGrown, setThirdGrown] = useState(false)
const [FourthGrown, setFourthGrown] = useState(true)
const [Fifhtrown, setFifthGrown] = useState(false)
const [SixthGrown, setSixthGrown] = useState(false)
const [SeventhGrown, setSeventhGrown] = useState(false)
    return(
        <>
        <S.GlobalStyle/>
        <S.MainBox>
        <S.LeftSection>
            <S.NavLeftSection>
                <S.VansImage src={VansLogo} alt="" />
                 <S.FirstUlNav>
                    <S.FirstLiNav>MASCULINO</S.FirstLiNav>
                    <S.FirstLiNav>FEMININO</S.FirstLiNav>
                 </S.FirstUlNav>
            </S.NavLeftSection>
        <S.MainSection>
            <S.TextBox>
            <h2>{VansName}</h2>
                <p>{VansText}</p>
            </S.TextBox>
            <S.ButtonsBox>
                <button>Tamanho ►</button>
                <button>Comprar</button>
            </S.ButtonsBox>
        </S.MainSection>
        </S.LeftSection>
        <S.ShoeImage src={Shoe} alt="" />
        <S.RightSection>
        <S.NavRightSection>
        <S.SecondUlNav>
                    <S.SecondLiNav>ACESSÓRIOS</S.SecondLiNav>
                    <S.ImagesBox>
                        <S.SearchImage src={Search} alt="" />
                        <S.ShopImage src={Shop} alt="" />
                    </S.ImagesBox>
                 </S.SecondUlNav>
        </S.NavRightSection>
        <S.MainRightBox>
            <Carrosel index={indexShoe}>
                <S.CarroselImage isOn={FirstGrown} onClick={()=> {(setIndexShoe(0)) 
                    setFirstGrown(true) 
                    setSecondGrown(false) 
                    setThirdGrown(false) 
                    setFourthGrown(false) 
                    setFifthGrown(false) 
                    setSixthGrown(false)
                    setSeventhGrown(false)
                    setVansName(Sk8Low)
                    setVansText(Sk8LowDescription)
                    setShoe(tenis1_s)}} src={tenis1}  alt="" />
                <S.CarroselImage isOn={SecondGrown} onClick={()=> {(setIndexShoe(1)) 
                    setFirstGrown(false) 
                    setSecondGrown(true) 
                    setThirdGrown(false) 
                    setFourthGrown(false) 
                    setFifthGrown(false) 
                    setSixthGrown(false)
                    setSeventhGrown(false)
                    setVansName(SkateGum)
                    setVansText(SkateGumDescription)
                    setShoe(tenis2_s)}} src={tenis2}  alt="" />
                <S.CarroselImage isOn={ThirdGrown} onClick={()=> {setIndexShoe(2) 
                    setFirstGrown(false) 
                    setSecondGrown(false) 
                    setThirdGrown(true) 
                    setFourthGrown(false) 
                    setFifthGrown(false)
                    setSixthGrown(false)
                    setSeventhGrown(false)
                    setVansName(Skate)
                    setVansText(SkateDescription)
                    setShoe(tenis3_s)}} src={tenis3}  alt="" />
                <S.CarroselImage isOn={FourthGrown} onClick={()=> {setIndexShoe(3)
                setFirstGrown(false) 
                setSecondGrown(false) 
                setThirdGrown(false) 
                setFourthGrown(true) 
                setFifthGrown(false)
                setSixthGrown(false)
                setSeventhGrown(false)
                setVansName(Classic)
                setVansText(ClassicDescription)
                setShoe(tenis4_s)}} src={tenis4}  alt="" />
                <S.CarroselImage isOn={Fifhtrown} onClick={()=> {setIndexShoe(4)
                setFirstGrown(false) 
                setSecondGrown(false) 
                setThirdGrown(false) 
                setFourthGrown(false) 
                setFifthGrown(true)
                setSixthGrown(false)
                setSeventhGrown(false)
                setVansName(Atwood)
                setVansText(AtwoodDescription)
                setShoe(tenis5_s)}} src={tenis5}  alt="" />
                <S.CarroselImage isOn={SixthGrown} onClick={()=> {setIndexShoe(5)
                setFirstGrown(false) 
                setSecondGrown(false) 
                setThirdGrown(false) 
                setFourthGrown(false) 
                setFifthGrown(false)
                setSixthGrown(true)
                setSeventhGrown(false)
                setVansName(Indie)
                setVansText(IndieDescription)
                setShoe(tenis6_s)}} src={tenis6}  alt="" />
                <S.CarroselImage isOn={SeventhGrown} onClick={()=> {setIndexShoe(6)
                setFirstGrown(false) 
                setSecondGrown(false) 
                setThirdGrown(false) 
                setFourthGrown(false) 
                setFifthGrown(false)
                setSixthGrown(false)
                setSeventhGrown(true)
                setVansName(EraBlack)
                setVansText(EraBlackDescription)
                setShoe(tenis7_s)}} src={tenis7}  alt="" />
            </Carrosel>
        </S.MainRightBox>
        </S.RightSection>
        </S.MainBox>
        </>
    )
}