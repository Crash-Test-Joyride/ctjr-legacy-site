import styled from 'styled-components';
import { css, keyframes } from 'styled-components';
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

import RunningRiderBg from '../../images/lounge/arcade/runningrider_bg.png';
import Azalea from '../../images/lounge/arcade/azalea.png';
import CTArcadeTitle from '../../images/lounge/arcade/crash_test_arcade_title.png';


const jump = keyframes`
    0%{transform: translatey(0px);}
    25%{transform: translatey(-100px);}
    75%{transform: translatey(-100px);}
    100%{transform: translatey(0px)}
`

const smallJump = keyframes`
    0%{transform: translatey(0px);}
    25%{transform: translatey(-50px);}
    75%{transform: translatey(-50px);}
    100%{transform: translatey(0px)}
`

const slideLeft = keyframes`
    from {
        transform: translateX(0px);
    }
    to {
        transform: translateX(-950px);
    }
`

const slideLeftSmall = keyframes`
from {
    transform: translateX(0px);
}
to {
    transform: translateX(-400px);
}
`

export const Container = styled.div`
    min-width: 83.5vw;
    max-width: 83.5vw;
    padding-top: 20px;
    margin-left: 15vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;

    @media screen and (max-width: 1150px) {
        width: calc(100vw - 35px);
        max-width: calc(100vw - 35px);
        min-width: 900px;
        padding-left: 10px;
        padding-right: 10px;
        margin-left: 0px;
    }

    @media screen and (max-width: 450px) {
        max-width: 100vw;
        min-width: 0vw;
        width: calc(100vw - 35px);
        padding-left: 10px;
        padding-right: 10px;
        margin-left: 0;
    }
`

export const AzaleaRunnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: flex-start;
    align-items: center;
    width: 85vw;
    margin-left: 100px;

    @media screen and (max-width: 1150px) {
        margin-left: 0px;
        width: calc(100vw - 35px);
        min-width: calc(100vw - 35px);
    }
`

export const GameBar = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: space-around;
    margin-left: 200px;

    @media screen and (min-width: 1500px) {
        margin-left: 0px;
    }

    @media screen and (max-width: 450px) {
        margin-top: 20px;
        margin-left: 0px;
        flex-direction: column;
    }
`

export const GamePreviewHolder = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
`

export const GamePreviewName = styled.span`
    margin-top: 3px;
    font-family: "Graphik-Medium";
    font-size: 16px;
    align-self: center;
`

export const GamePreview = styled.img`
    object-fit: cover;
    object-position: left;
    border-radius: 8px;
    width: 200px;
    height: 100px;
    border: 1px solid black;
    cursor: pointer;
`

export const GameSettingsBar = styled.div`
    margin-top: 20px;
    width: 864.5px;
    align-self: center;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3px;
    margin-top: 0px;

    @media screen and (max-width: 450px) {
        width: 350px;
        padding-right: 0px;
    }

    @media screen and (max-width: 450px) {
        width: 85vw;
        padding-right: 0px;
    }
`

export const SoundButton = styled(MdVolumeUp)`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 4px;
    cursor: pointer;
    align-self: center;
    padding: 5px;
`

export const SoundButtonOff = styled(MdVolumeOff)`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 4px;
    cursor: pointer;
    align-self: center;
    padding: 5px;
`

export const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
`

export const ProfileImageHolder = styled.button`
    border: none;
    cursor: pointer;
`

export const GameDescriptionHolder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-self: center;
    align-items: flex-start;
    margin-top: 60px;
    width: 850px;
    padding-right: 100px;
    position: relative;
    height: 85px;

    @media screen and (max-width: 450px) {
        width: 85vw;
        height: auto;
        padding-right: 0px;
        margin-bottom: 20px;
    }
`

export const GameDescription = styled.p`
    font-family: 'Graphik-Regular Italic';
    font-size: 16px;
    margin-left: 85px;
    align-self: center;

    @media screen and (max-width: 450px) {
        font-size: 14px;
    }
`

export const GameDescriptionIcon = styled.div`
    width: 75px;
    height: 75px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${Azalea});
    position: absolute;
    top: 5px;
    left: 5px;
`

export const HighScoresContainer = styled.div`
    display: flex;
    margin-top: 100px;
    width: 850px;
    justify-content: space-around;
    align-self: center;
    margin-bottom: 50px;

    @media screen and (max-width: 450px) {
        margin-top: 0px;
        width: 350px;
        flex-direction: column;
    }
`

export const HighScoresSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: 450px) {
        margin-top: 50px;
        flex-direction: column;
    }
`

export const HighScoresTitle = styled.span`
    font-family: "Graphik-Medium";
    font-size: 16px;
    align-self:center;
    margin-bottom: 10px;

    @media screen and (max-width: 450px) {
        font-size: 14px;
    }
`

export const HighScoresEntry = styled.div`
    display: flex;
    margin-top: 10px;
    align-items: center;
    align-self: center;
    min-width: 240px;
`

export const HighScoresEntryText = styled.span`
    font-family: "Graphik-Regular";
    font-size: 16px;
    margin-left: 15px;
    min-width: 55px;

    @media screen and (max-width: 450px) {
        min-width: 40px;
        font-size: 14px;
    }
`

export const HighScoresAddressText = styled.span`
    font-family: "Graphik-Regular";
    font-size: 16px;
    text-align: center;
    margin-left: 15px;
    min-width: 125px;

    @media screen and (max-width: 450px) {
        font-size: 14px;
        margin-left: 5px;
    }
`

export const HighScoresEntryTextBold = styled.span`
    font-family: "Graphik-Medium Italic";
    font-size: 16px;

    @media screen and (max-width: 450px) {
        font-size: 14px;
    }
`

export const ArcadeTitle = styled.div`
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${CTArcadeTitle});
    width: calc(105px + 12vw);
    height: calc(105px + 6vw);
    min-width: 200px;
    position: absolute;
    top: 25px;
    left: 110px;

    @media screen and (max-width: 1150px) {
        left: 25px;
    }

    @media screen and (max-width: 450px) {
        left: 0px;
        top: 0px;
        width: 70vw;
        height: 40vw;
        position: relative;
        align-self: center;
    }
`

export const RunningRider = styled.img`
    height: 100px;
    width: 100px;
    position: absolute;
    left: 20px;
    bottom: 85px;

    @media screen and (max-width: 450px) {
        width: 50px;
        height: 50px;
        bottom: 35px;
    }
`

export const JumpingRider = styled(RunningRider)`
    animation: ${props => css`${jump} ${props.jumpTime}s linear`};

    @media screen and (max-width: 450px) {
        animation: ${props => css`${smallJump} ${props.jumpTime}s linear`};
    }
`

export const SlidingRider = styled(RunningRider)`
`

export const ObstacleHigh = styled.div`
    height: 50px;
    width: 50px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${Azalea});
    position: absolute;
    right: -50px;
    bottom: 135px;

    animation: ${props => css`${slideLeft} ${props.animationTime}ms linear`};

    @media screen and (max-width: 450px) {
        height: 25px;
        width: 25px;
        bottom: 60px;
        animation: ${props => css`${slideLeftSmall} ${props.animationTime}ms linear`};
    }
`

export const ObstacleLow = styled.div`
    height: 50px;
    width: 50px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${Azalea});
    position: absolute;
    right: -50px;
    bottom: 85px;

    animation: ${props => css`${slideLeft} ${props.animationTime}ms linear`};

    @media screen and (max-width: 450px) {
        height: 25px;
        width: 25px;
        bottom: 35px;
        animation: ${props => css`${slideLeftSmall} ${props.animationTime}ms linear`};
    }
`

export const GameArea = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(${RunningRiderBg});
    position: relative;
    overflow: hidden;
    border: 4px solid black;

    width: 864.5px;
    height: 332.5px;

    @media screen and (max-width: 450px) {
        width: 85vw;
        height: 135px;
    }
`

export const ScoreContainer = styled.div`
    display: flex;
    align-self: end;
    padding-right: 5px;
    padding-top: 5px;
`

export const HighSpan = styled.span`
    font-size: 20px;
    font-family: "Inconsolata";

    @media screen and (max-width: 450px) {
        font-size: 16px;
    }
`

export const ScoreSpan = styled.span`
    font-size: 20px;
    margin-left: 20px;
    font-family: "Inconsolata";

    @media screen and (max-width: 450px) {
        font-size: 16px;
        margin-left: 10px;
    }
`

export const PFPGallery = styled.section`
  padding-top: 5px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  display: grid;
  grid-row-gap: 0.2em;
  grid-column-gap: 0.2em;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;