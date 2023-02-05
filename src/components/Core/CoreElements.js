import styled from 'styled-components';

import twitterIcon from '../../images/twitter-icon.png'
import discordIcon from '../../images/discord-icon.png'

import fallingAssets from '../../images/Falling-Assets.png';

export const Container = styled.div`
    position: relative;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: center;
    background-image: url(${fallingAssets});
    padding: 0;
    background-color: #e7e8ec;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 300px;

    @media screen and (max-width: 1300px) {
        background-image: none;
    }

    @media screen and (max-width: 450px) {
        padding-top: 0px;
    }
`

export const Background = styled.div`
    z-index: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
`

export const ContentBlock = styled.div`
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 450px;
    max-width: 50vw;

  @media screen and (max-width: 450px) {
    width: 60vw;
  }
`

export const P1 = styled.p`
    font-family: 'Graphik-Regular';
    font-size: 20px;
    text-align: left;

    @media screen and (max-width: 1400px) {
        font-size: 18px;
    }

    @media screen and (max-width: 1050px) {
        font-size: 16px;
    }

    @media screen and (max-width: 700px) {
        font-size: 14px;
    }

    @media screen and (max-width: 450px) {
        font-size: 12px;
    }
`
export const P2 = styled.p`
    font-family: 'Graphik-Regular';
    font-size: 20px;
    text-align: left;
    margin-top: 20px;

    @media screen and (max-width: 1400px) {
        font-size: 18px;
        margin-top: 18px;
    }

    @media screen and (max-width: 1050px) {
        font-size: 16px;
        margin-top: 16px;
    }

    @media screen and (max-width: 700px) {
        font-size: 14px;
        margin-top: 14px;
    }

    @media screen and (max-width: 450px) {
        margin-top: 12px;
        font-size: 12px;
    }
`

export const P3 = styled.p`
    font-family: 'Graphik-Light Italic';
    font-size: 20px;
    text-align: left;
    margin-top: 20px;
    align-self: flex-start;

    @media screen and (max-width: 1400px) {
        font-size: 18px;
        margin-top: 18px;
    }

    @media screen and (max-width: 1050px) {
        font-size: 16px;
        margin-top: 16px;
    }

    @media screen and (max-width: 700px) {
        font-size: 14px;
        margin-top: 14px;
    }

    @media screen and (max-width: 450px) {
        margin-top: 12px;
        font-size: 12px;
    }
`

export const BoldedSpan = styled.span`
    font-family: 'Graphik-Semibold Italic';
    font-size: 20px;

    @media screen and (max-width: 1400px) {
        font-size: 18px;
    }

    @media screen and (max-width: 1050px) {
        font-size: 16px;
    }

    @media screen and (max-width: 700px) {
        font-size: 14px;
    }

    @media screen and (max-width: 450px) {
        font-size: 12px;
    }
`

export const IconHolder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 300px;
    margin-top: 300px;
    padding-bottom: 60px;
    z-index: 998;

    @media screen and (max-width: 2450px) {
        margin-top: 250px;
    }

    @media screen and (max-width: 2100px) {
        margin-top: 210px;
    }

    @media screen and (max-width: 1750px) {
        margin-top: 160px;
    }

    @media screen and (max-width: 1400px) {
        margin-top: 140px;
    }

    @media screen and (max-width: 450px) {
        margin-top: 130px;
        padding-bottom: 45px;
        width: 100px;
    }
`

export const TwitterIcon = styled.div`
    border: none;
    cursor: pointer;
    background-repeat: none;
    background-size: cover;
    background-image: url(${twitterIcon});
    width: 50px;
    height: 50px;
    margin-right: 50px;

    @media screen and (max-width: 1400px) {
        width: 45px;
        height: 45px;
        margin-right: 45px;
    }

    @media screen and (max-width: 1050px) {
        width: 40px;
        height: 40px;
        margin-right: 40px;
    }

    @media screen and (max-width: 700px) {
        width: 35px;
        height: 35px;
        margin-right: 35px;
    }

    @media screen and (max-width: 450px) {
        width: 25px;
        height: 25px;
        margin-right: 30px;
    }
`

export const DiscordIcon = styled.div`
    border: none;
    cursor: pointer;
    background-repeat: none;
    background-size: cover;
    background-image: url(${discordIcon});
    width: 50px;
    height: 50px;

    @media screen and (max-width: 1400px) {
        width: 45px;
        height: 45px;
    }

    @media screen and (max-width: 1050px) {
        width: 40px;
        height: 40px;
    }

    @media screen and (max-width: 700px) {
        width: 35px;
        height: 35px;
    }

    @media screen and (max-width: 450px) {
        width: 25px;
        height: 25px;
    }
`

export const A = styled.a`
    align-self: center;
    text-decoration: none;
`