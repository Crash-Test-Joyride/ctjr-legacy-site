import styled, { keyframes }  from 'styled-components';
import React from 'react';
import ProgressiveImage from '../ProgressiveImage';
import Iframe from 'react-iframe'

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const Container = styled.div`
    width: 100%;
    background-color: #e7e8ec;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 120px;
`

export const Banner = styled(ProgressiveImage)`
    width: 100%;
`

export const QAContainer = styled.div`
    margin-top: 30px;
    width: 70vw;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    z-index: 5;

    @media screen and (max-width: 450px) {
        margin-top: 20px;
        width: 90vw;
        min-width: 0px;
        z-index: 0;
    }
`

export const QATitle = styled.span`
    font-size: 20px;
    font-family: 'Graphik-Semibold';
    font-weight: 900;

    @media screen and (max-width: 1050px) {
        font-size: 18px;
    }

    @media screen and (max-width: 450px) {
        font-size: 14px;
    }
`

export const RoadmapPhase = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 50px;
    margin-bottom: 50px;
`

export const PhaseImageHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const PhaseTitle = styled.span`
    margin-top: 10px;
    font-size: 20px;
    font-family: 'Graphik-Semibold';
    font-weight: 900;
    text-align: center;

    @media screen and (max-width: 1050px) {
        font-size: 18px;
        margin-top: 8px;
    }

    @media screen and (max-width: 1050px) {
        font-size: 16px;
        margin-top: 8px;
    }
`

export const PhaseImage = styled(ProgressiveImage)`
    border-radius: 100px;
    width: 200px;
    height: 200px;

    @media screen and (max-width: 1050px) {
        width: 150px;
        height: 150px;
    }

    @media screen and (max-width: 450px) {
        width: 100px;
        height: 100px;
    }
`

export const PhaseActionHolder = styled.span`
    height: 175px;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1050px) {
        height: 150px;
        margin-left: 40px;
    }

    @media screen and (max-width: 450px) {
        height: 100px;
        margin-left: 30px;
    }
`

export const Answer = styled.p`
    margin-top: 14px;
    font-size: 18px;
    font-family: 'Graphik-Regular';

    @media screen and (max-width: 1050px) {
        margin-top: 12px;
        font-size: 14px;
    }

    @media screen and (max-width: 450px) {
        margin-top: 10px;
        font-size: 11px;
    }
`

export const AnswerSub = styled(Answer)`
    margin-left: 6px;
`

export const Line = styled.hr`
    margin-top: 30px;
    color: black;
    background-color: black;
    height: 3px;

    @media screen and (max-width: 1050px) {
        margin-top: 20px;
    }
`

export const OffsetBanner = styled(Iframe)`
    margin-top: 30px;
    align-self: left;
    border: none;
    height: 100px;
    width: auto;
`

export const A = styled.a`
    align-self: center;
    text-decoration: none;
`

export const RoadMapContainer = styled.div`
    width: 70vw;
    max-width: 1500px;
    height: 40vw;
    max-height: 860px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    z-index: 9;
    overflow: hidden;

    @media screen and (max-width: 1050px) {
        width: 90vw;
        height: 70vw;
    }
`


export const RoadmapTitle = styled.span`
    font-size: 36px;
    font-family: 'Graphik-Bold';
    font-weight: 900;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px;

    @media screen and (max-width: 1050px) {
        font-size: 26px;
        margin-bottom: 8px;
    }

    @media screen and (max-width: 450px) {
        font-size: 22px;
        margin-bottom: 5px;
    }
`

export const RoadMapSecondTitle = styled.span`
    font-size: 18px;
    font-family: 'Graphik-Light';
    text-align: center;
    margin-bottom: 20px;

    @media screen and (max-width: 1050px) {
        margin-bottom: 15px;
        font-size: 14px;
    }

    @media screen and (max-width: 450px) {
        margin-bottom: 10px;
        font-size: 12px;
    }
`

export const RoadmapSubTitle = styled.span`
    font-size: 18px;
    font-family: 'Graphik-Light';
    text-align: center;
    margin-bottom: 30px;

    @media screen and (max-width: 1050px) {
        font-size: 14px;
        margin-bottom: 25px;
    }

    @media screen and (max-width: 450px) {
        font-size: 12px;
        margin-bottom: 20px;
    }
`

function getContractedStyle(index, visible) {
    switch (index) {
        case 0:
            return {
                cursor: 'pointer',
                width: '49.5%',
                height: '54.5%',
                position: 'absolute',
                left: '0%',
                top: '0%',
                background: '#b7cbda',
                transition: "width 0.35s ease-in-out, height 0.35s ease-in-out, opacity 0.1s ease-in-out",
                opacity: visible ? '100%' : '0%'
            }
        case 1:
            return {
                cursor: 'pointer',
                width: '49.5%',
                height: '44.5%',
                position: 'absolute',
                left: '0%',
                bottom: '0%',
                background: '#b7cbda',
                transition: "width 0.35s ease-in-out, height 0.35s ease-in-out, opacity 0.1s ease-in-out",
                opacity: visible ? '100%' : '0%'
            }
        case 2:
            return {
                cursor: 'pointer',
                width: '49.5%',
                height: '44.5%',
                position: 'absolute',
                right: '0%',
                top: '0%',
                background: '#b7cbda',
                transition: "width 0.35s ease-in-out, height 0.35s ease-in-out, opacity 0.1s ease-in-out",
                opacity: visible ? '100%' : '0%'
            }
        case 3:
            return {
                cursor: 'pointer',
                width: '49.5%',
                height: '54.5%',
                position: 'absolute',
                right: '0%',
                bottom: '0%',
                background: '#b7cbda',
                transition: "width 0.35s ease-in-out, height 0.35s ease-in-out, opacity 0.1s ease-in-out",
                opacity: visible ? '100%' : '0%'
            }

    }
}

function getExpandedStyle(index, visible) {
    switch (index) {
        case 0:
            return {
                cursor: 'pointer',
                width: '100%',
                height: '100%',
                position: 'absolute',
                left: '0%',
                top: '0%',
                background: '#b7cbda',
                transition: "width 0.35s ease-in-out, height 0.35s ease-in-out, opacity 0.1s ease-in-out",
                opacity: visible ? '100%' : '0%',
                zIndex: '10'
            }
        case 1:
            return {
                cursor: 'pointer',
                width: '100%',
                height: '100%',
                position: 'absolute',
                left: '0%',
                bottom: '0%',
                background: '#b7cbda',
                transition: "width 0.35s ease-in-out, height 0.35s ease-in-out, opacity 0.1s ease-in-out",
                opacity: visible ? '100%' : '0%',
                zIndex: '10'
            }
        case 2:
            return {
                cursor: 'pointer',
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0%',
                right: '0%',
                background: '#b7cbda',
                transition: "width 0.35s ease-in-out, height 0.35s ease-in-out, opacity 0.1s ease-in-out",
                opacity: visible ? '100%' : '0%',
                zIndex: '10'
            }
        case 3:
            return {
                cursor: 'pointer',
                width: '100%',
                height: '100%',
                position: 'absolute',
                right: '0%',
                bottom: '0%',
                background: '#b7cbda',
                transition: "width 0.35s ease-in-out, height 0.35s ease-in-out, opacity 0.1s ease-in-out",
                opacity: visible ? '100%' : '0%',
                zIndex: '10'
            }

    }
}

export class Expand extends React.Component {
    static defaultProps = {
        isOpened: false,
        otherOpened: false,
        index: 0
    }

    constructor(props) {
        super(props);
    }

    render() {
        const style = this.props.isOpened ? getExpandedStyle(this.props.index, this.props.visible) : getContractedStyle(this.props.index, this.props.visible);
        return (
            <div style={style} onClick={this.props.onClick} onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave}>
                {this.props.children}
            </div>
        )
    }
}

export const RoadmapItemInnnerContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: ${fadeIn} 0.3s ease-in-out;
`

export const RoadmapLargeContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 3%;
    padding-left: 3%;
    animation: ${fadeIn} 0.3s ease-in-out;
`

export const RoadmapItemNumber = styled.span`
    font-size: 24px;
    font-family: 'Graphik-Bold';
    font-weight: 900;
    color: black;
    transition: color 0.2s ease-in-out;
    margin-bottom: 2%;

    @media screen and (max-width: 1050px) {
        font-size: 18px;
    }

    @media screen and (max-width: 450px) {
        font-size: 14px;
    }
`

export const RoadmapDate = styled.span`
`

export const RoadmapItemBlurb = styled.span`
    font-size: 18px;
    font-family: 'Graphik-Light';
    width: 60%;
    color: black;

    @media screen and (max-width: 1400px) {
        font-size: 14px;
    }

    @media screen and (max-width: 900px) {
        font-size: 12px;
    }

    @media screen and (max-width: 450px) {
        width: 70%;
        font-size: 9px;
    }
`

export const RoadmapItemSubTitle = styled.span`
    font-size: 18px;
    font-family: 'Graphik-Black';
    width: 60%;
    color: black;
    margin-top: 2%;
    margin-bottom: 0.5%;

    @media screen and (max-width: 1400px) {
        font-size: 14px;
    }

    @media screen and (max-width: 900px) {
        font-size: 12px;
    }

    @media screen and (max-width: 450px) {
        font-size: 9px;
    }
`

export const AzaleaImage1 = styled.img`
    width: 8%;
    position: absolute;
    bottom: 40%;
    right: 10%;
`

export const AzaleaImage1B = styled.img`
    width: 8%;
    position: absolute;
    bottom: 2%;
    right: 22%;
`

export const AzaleaImage1C = styled.img`
    width: 8%;
    position: absolute;
    top: 4%;
    right: 12%;
`

export const AzaleaImage2 = styled.img`
    width: 15%;
    position: absolute;
    bottom: 12%;
    right: 6%;
`

export const AzaleaImage2B = styled.img`
    width: 15%;
    position: absolute;
    bottom: 60%;
    right: -3%;
`

export const BrushImage = styled.img`
    width: 65%;
    position: absolute;
    bottom: 5%;
    right: -5%;
    transform: rotate(-5deg);
`

export const ArcadeImage = styled.img`
    width: 60%;
    position: absolute;
    bottom: -22%;
    right: -20%;
`

export const WaveriderImage = styled.img`
    width: 35%;
    position: absolute;
    bottom: -6%;
    right: 10%;
`

