import styled from "styled-components";
import logo from "../../images/LOGO.png";

export const Scroller = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-left: 20%;
    padding-top: 12px;
    padding-left: 10px;
    padding-right: 20px;

    @media screen and (max-width: 750px) {
        width: 100%;
        margin-left: 0%;
    }
`

export const SideBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 20%;
    border-right: 1px solid black;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: left;

    @media screen and (max-width: 750px) {
        display: none;
    }
`

export const SideBarTitle = styled.p`
    font-size: calc(10px + 0.6vw);
    font-family: 'Graphik-Semibold';
    cursor: pointer;

    @media screen and (max-width: 750px) {
        margin-top: 5px;
    }
`

export const SideBarItem = styled.button`
    width: auto;
    border: none;
    cursor: pointer;
    font-size: calc(10px + 0.6vw);
    font-family: 'Graphik-Regular';
    margin-bottom: 5px;
    background: none;
    text-align: left;
    color: black;

    &:hover { 
        color: #9b0b04;
    }

    @media screen and (max-width: 750px) {
        margin-left: 15px;
        margin-right: 5px;
    }
`

export const SideBarLine = styled.hr`
    color: black;
    background-color: black;
    height: 2.5px;
    margin-top: 27px;
    margin-bottom: 27px;
    margin-right: -15px;
`

export const ScrollerImage = styled.img`
    width: 100%;
    height: auto;
    cursor: crosshair;

    transition: all 1s ease-in-out;

    &:hover { 
        transition: all 1s ease-in-out;
        opacity: 100;
    }
`

export const ScrollerLine = styled.hr`
    color: black;
    background-color: black;
    height: 2.5px;
    margin-top: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 750px) {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`

export const ScrollerLineHidden = styled(ScrollerLine)`
    margin-top: 25px;
     @media screen and (min-width: 750px) {
        display: none;
    }
`

export const Logo = styled.div`
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${logo});
    cursor: pointer;
    position: fixed;
    left: 0;
    bottom: 0;
    margin-left: 25px;
    margin-bottom: 8px;
    height: calc(20px + 5vw);
    width: calc(40px + 11vw);
    max-height: 100px;
    max-width: 200px;
    align-self: flex-end;
    
    @media screen and (max-width: 1000px) {
        margin-left: 15px;
        margin-bottom: 15px;
    }

    @media screen and (max-width: 750px) {
        opacity: 0;
    }
`

export const LogoHidden = styled(Logo)`
    opacity: 0;
`

export const InfoTitle = styled.p`
    font-size: calc(10px + 0.6vw);
    font-family: 'Graphik-Semibold';
    margin-top: 10px;
    margin-bottom: 15px;
`

export const InfoParagraph = styled.p`
    font-size: calc(8px + 0.6vw);
    font-family: 'Graphik-Regular';
    margin-bottom: 20px;
    margin-right: 50px;
`

export const ScrollerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 10px;
    margin-left: 10px;

    @media screen and (min-width: 750px) {
        display: none;
    }
`

export const ScrollerHeaderSections = styled.div`
    display: flex;
    justify-content: space-around;
    margin-right: 20px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 20%;
    width: 80%;
    height: 100%;

    @media screen and (max-width: 750px) {
        width: 100%;
        margin-left: 0%;
    }

    @media screen and (max-width: 450px) {
        margin-top: 40%;
    }
`

export const Scrapbook = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 75%;
    height: auto;
    z-index: 2;
    margin-right: 7.5%;

    @media screen and (max-width: 1000px) {
        width: 70%;
    }

    @media screen and (max-width: 750px) {
        margin-right: 0%;
    }

    @media screen and (max-width: 450px) {
        width: 90%;
    }
`

export const ScrapPage = styled.img`
    width: 49.75%;
    cursor: pointer;
`

export const Holder = styled.div`
    width: 100%;
    height: 100vh;

    @media screen and (max-width: 450px) {
        height: 100%;
    }
`

export const A = styled.a`
    text-decoration: none;
    margin-bottom: 5px;
`

export const DecorationHolder = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 20px;
    right: 0;
    margin-right: 20px;
    font-family: "Inconsolata";
    text-align: right;
    font-size: calc(4px + 0.5vw);

    @media screen and (max-width: 750px) {
        margin-right: 10px;
        top: 50px;
    }

    @media screen and (max-width: 450px) {
        font-size: calc(8px + 0.5vw);
        margin-right: 20px;
        top: 75px;
    }
`