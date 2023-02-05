import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { CircularProgress } from "@material-ui/core";
import smoothscroll from 'smoothscroll-polyfill';
import grid from '../../images/dragAndPlay/GRID.png';

smoothscroll.polyfill();

const flashAnimationRed = keyframes`
    from {
        color: #000;
    }

    to {
        color: #9b0b04;  
    }
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: absolute;
  padding: 0;
`

export const Center = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25vh;
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;

    @media screen and (max-width: 450px) {
        margin-top: 27vh;
    }
`

export const BuildTitle = styled.p`
    color: #000;
    background: none;
    font-family: 'Graphik-Regular';
    text-align: start;
    font-size: 16px;
    padding-left: 3vw;
    margin-bottom: -20px;
    letter-spacing: 0.05em;

    width: 23.76vw;

    @media screen and (max-width: 1750px) {
        margin-bottom: -15px;
        font-size: 14px;
    }

    @media screen and (max-width: 1400px) {
        padding-left: 2vw;
        font-size: 12px;
    }

    @media screen and (max-width: 1100px) {
        text-align: center;
        padding-left: 0vw;
        margin-bottom: 0px;
        font-size: 10px;
    }

    @media screen and (max-width: 700px) {
        font-size: 8px;
    }

    @media screen and (max-width: 450px) {
        width: 41.58vw;
    }

`

export const Outline = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${grid});
  width: 23.76vw;
  height: 23.76vw;
  min-height: 23.76vw;

  @media screen and (max-width: 450px) {
    width: 41.58vw;
    height: 41.58vw;
  }
`

export const MintContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    z-index: 999;

    @media screen and (max-width: 1050px) {
        margin-top: 10px;
    }
`

export const MintCount = styled.div`
    display: block;
    width: 30px;
    height: 30px;
    min-height: 30px;
    padding-left: 1.5px;
    padding-top: 5px;
    text-align: center;
    font-size: 20px;
    font-family: "Graphik-Semibold";
    margin-top: 10px;
    background: #fff;
    color: #9b0b04;
    z-index: 999;

    @media screen and (max-width: 1050px) {
        margin-top: 8px;
        width: 20px;
        height: 20px;
        min-height: 20px;
        padding-left: 1.5px;
        padding-top: 2.5px;
        font-size: 14px;
    }
`

export const PlusMinusButton = styled.button`
    border: none;
    font-size: 40px;
    font-family: 'Inconsolata';
    cursor: pointer;
    background: none;
    margin: 10px;
    color: #000;

    @media screen and (max-width: 1050px) {
        font-size: 26px;
        margin: 8px;
    }

    &:hover {
        color: #9b0b04;
    }
`

export const MintButtonHolder = styled.div`
    width: 160px;
    height: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #9b0b04;


    @media screen and (max-width: 1050px) {
        width: 110px;
        height: 30px;
        min-height: 35px;
        border: 2px solid #9b0b04;
        margin-top: 0px;
    }
`

export const MintButton = styled.button`
    color: #FFF;
    width: 100%;
    height: 100%;
    align-self: center;
    background-color: #89b0aa;
    border: 2px solid white;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    font-family: 'Graphik-Semibold Italic';

    @media screen and (max-width: 1050px) {
        font-size: 12px;
    }

    &:hover:enabled {
        margin: 0px;
        border: 2px solid #9b0b04;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;

export const P = styled.p`
    padding: 0;
    margin-left: 1px;
    z-index: 999;
    font-size: 10px;

    @media screen and (max-width: 900px) {
        font-size: 5px;
    }
`

export const NumMints = styled.div`
  margin-top: 20px;
  font-family: "Inconsolata";
  font-size: 18px;
  letter-spacing: 0.25vw;
  text-align: center;
  z-index: 999;

  @media screen and (max-width: 900px) {
      font-size: 10px;
  }
`

export const PreSaleLive = styled.div`
  margin-top: 10px;
  font-family: "Inconsolata";
  font-size: 22px;
  text-align: center;
  z-index: 999;

  @media screen and (max-width: 1050px) {
      font-size: 14px;
      left: 50%;
  }
`

export const ScrollDownButton = styled.button`
    width: 130px;
    position: absolute;
    bottom: 2%;
    left: 77%;
    text-align: center;
    font-size: 14px;
    font-family: "Inconsolata";
    color: #000;
    background: none;
    border: none;
    padding: 6px;
    margin-top: 30px;
    cursor: pointer;
    z-index: 1;

    animation: ${flashAnimationRed} 0.75s alternate ease-in-out infinite;
    
    @media screen and (max-width: 1050px) {
        font-size: 12px;
        padding: 5px;
        left: 60%;
    }

    @media screen and (max-width: 600px) {
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 450px) {
        font-size: 10px;
    }
`

export const MyCircularProgress = styled(CircularProgress)`
    color: #fff !important;
`