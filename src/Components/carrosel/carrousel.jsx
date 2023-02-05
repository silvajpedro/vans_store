import React from "react";
import * as S from "./carrosel_style.js";
export default function Carrosel({ children,index }) {
  const CarroselStyle = {
    display:"flex",
    paddingTop:"1.5vh",
    width: "36vw",
    height:"18vh"
  };
  const ConfigCarousel ={
    renderBottomCenterControls:false,
    cellAlign:"center",
    wrapAround:false,
    slideIndex:index,
    dragging:false,
    disableAnimation:false,
    disableEdgeSwiping:false,
    slidesToShow:4,
    defaultControlsConfig:{
      nextButtonText:" ",
      nextButtonStyle:{
        display:"none",
        visibility:"hidden",
        width:"0vw",
        height:"0vh",
        cursor:"none",
      },
      prevButtonText:" ",
      prevButtonStyle:{
        display:"none",
        visibility:"hidden",
        width:"0vw",
        height:"0vh",
        cursor:"none",
      }
    }
  }
  return (
    <>
      <S.Carrosel  {...ConfigCarousel} style={CarroselStyle}>{children}</S.Carrosel>
    </>
  );
}
