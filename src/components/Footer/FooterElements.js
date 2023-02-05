import styled from "styled-components";
import logo from "../../images/LOGO.png";

export const Footer = styled.div`
    background: transparent;
    width: 100%;
    height: 200px;
    min-height: 50px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    bottom: 0;
    z-index: 0;
    position: fixed;

    @media screen and (max-width: 450px) {
        height: 100px;
    }
`

export const Logo = styled.div`
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${logo});
    cursor: pointer;
    margin-left: 25px;
    margin-bottom: 8px;
    height: calc(20px + 5vw);
    width: calc(40px + 11vw);
    max-height: 100px;
    max-width: 200px;
    align-self: flex-end;
    
    @media screen and (max-width: 1000px) {
        margin-left: 10px;
        height: calc(10px + 5vw);
        width: calc(20px + 11vw);
    }

    @media screen and (max-width: 450px) {
        height: calc(20px + 5vw);
        width: calc(40px + 11vw);
        margin-bottom: 10px;
    }
`

export const PageContainer = styled.div`
    height: 130px;
    width: 90px;
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
    align-self: flex-end;
    align-items: flex-start;
    transform: rotate(-90deg);
    margin-right: -5px;
    margin-bottom: -5px;

    @media screen and (max-width: 1350px) {
        height: 85px;
        width: 75px;
        margin-right: 5px;
        margin-bottom: 5px;
    }

    @media screen and (max-width: 1000px) {
        height: 55px;
        width: 55px;
        margin-bottom: 10px;
        margin-right: 10px;
    }

    @media screen and (max-width: 450px) {
        letter-spacing: 0.1rem;
        font-size: 10px;
        margin-right: 30px;
    }
`

export const PageLinkButton = styled.div`
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.2rem;
    border: none;
    cursor: pointer;
    color: black;
    margin-top: 4px;

    @media screen and (max-width: 1350px) {
        font-size: 12px;
        letter-spacing: 0.15rem;
    }

    @media screen and (max-width: 1000px) {
        letter-spacing: 0.1rem;
        font-size: 10px;
        margin-top: 2px;
    }

    @media screen and (max-width: 450px) {
        margin-top: 4px;
    }

    &:hover { 
        text-decoration: line-through;
        color: #9b0b04;
    }
`

export const PageLinkButtonWhite = styled(PageLinkButton)`
    color: white;
`

