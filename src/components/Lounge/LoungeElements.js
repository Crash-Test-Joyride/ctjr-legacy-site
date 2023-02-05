import styled from "styled-components";
import ProgressiveImage from '../ProgressiveImage';
import NFTPlaceholder from '../../images/lounge/NFTPlaceholder.jpg'
import {React, useState} from 'react';
import Select from 'react-select';
import PulseLoader from 'react-spinners/RingLoader';
import logo from "../../images/LOGO.png";

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
`

export const LoungeEntrance = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoungeImage = styled.img`
    width: 100vw;
`

export const Menu = styled.div`
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    align-items: left;
    flex: 1;
    min-width: 20vw;
    max-width: 20vw;
    position: fixed;
    z-index: 1;

    @media screen and (max-width: 1150px) {
        min-width: 100%;
        max-width: 100%;
        width: 100%;
        padding-left: 10px;
        padding-top: 10px;
        padding-right: 10px;
        position: relative;
    }
`

export const MenuItemHolder = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1150px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 0.5fr));
    }

    @media screen and (max-width: 700px) {
        display: flex;
        flex-direction: column;
    }
`

export const MenuItem = styled.button`
    background: #89b0aa;
    color: white;
    width: 100%;
    min-width: 250px;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 3px;
    border: none;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover:enabled {
        background: #9b0b04;
    }

    &:disabled {
        cursor: not-allowed;
        filter: grayscale(100%);
    }

    @media screen and (max-width: 1150px) {
        margin-right: 5px;
        margin-left: 5px;
        width: auto;
        min-width: 0px;
    }
`

export const MenuItemSelected = styled(MenuItem)`
    background: #9b0b04;
`

export const MenuItemImage = styled.img`
    max-height: 100%;
`

export const MenuItemText = styled.p`
    width: 100%;
    text-align: left;
    padding: 5px;
    font-family: 'Graphik-Semibold';
    font-size: 13px;
`

export const Playground = styled.div`
    min-width: 85vw;
    max-width: 85vw;
    height: 100vh;
    padding-left: 100px;
    padding-top: 20px;
    margin-left: 15vw;

    @media screen and (max-width: 1150px) {
        max-width: 100vw;
        min-width: 0vw;
        width: calc(100vw - 35px);
        padding-left: 10px;
        padding-right: 10px;
        margin-left: 0;
    }
`

export const BannerGenerator = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1150px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const BannerGeneratorRiders = styled.div`
    margin-left: 30px;
    flex: 1;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1150px) {
        margin-left: 0px;
        margin-top: 30px;
    }
`

export const BannerTitleHolder = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const BannerTitle = styled.p`
    font-size: 24px;
    font-family: "Graphik-Semibold";
`

export const BannerTitleLine = styled.hr`
    margin-top: 5px;
    color: #aaa;
    background-color: #aaa;
    height: 3px;
    width: 100%;
    min-width: 250px;
    margin-bottom: 20px;

    @media screen and (max-width: 1150px) {
        margin-top: 20px;
        min-width: 0;
    }
`
export const BannerTitleLineShort = styled(BannerTitleLine)`
    min-width: 90%;
    max-width: 90%;

    @media screen and (max-width: 1150px) {
        max-width: 100%;
    }
`


export const NFTGallery = styled.section`
  width: 100%; 
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 10px;
  min-width: 250px;
  display: grid;
  grid-row-gap: 1em;
  grid-column-gap: 1.2em;
  grid-template-columns: 1fr 1fr;
  overflow-y: scroll;

  @media screen and (max-width: 1150px) {
    grid-template-columns: 1fr 1fr 1fr;
    min-width: 100%;
    padding-bottom: 100px;
    overflow-y: visible;
  }
`;

export const NFTImageHolder = styled.div`
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MyProgressiveImage = styled(ProgressiveImage)`
    width: 100%;
    box-shadow: 3px 3px 3px #5555;
    border-radius: 10px;
`

export const NFTImage = ({src}) => {
    const [isHovered, setIsHovered] = useState(false);

    const style = {
        width: '100%',
        transform: isHovered ? 'scale(1.04)' : 'scale(1.00)',
        transition: `transform 250ms`,
    };

    const trigger = () => {
        setIsHovered(true);
    };

    const unset = () => {
        setIsHovered(false);
    }

    return (
        <span onMouseEnter={trigger} onMouseLeave={unset} style={style}>
            <MyProgressiveImage src={src} placeholder={NFTPlaceholder} />
        </span>
    );    
}


export const NFTImageName = styled.p`
    font-family: 'Graphik-Regular';
    font-size: 14px;
    text-align: center;
    margin-top: 10px;

    @media screen and (max-width: 1050px) {
        font-size: 12px;
    }
`

export const ConnectButtonHolder = styled.div`
    width: 200px;
    height: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #9b0b04;
    position: absolute;
    right: 25px;
    top: 25px;

    @media screen and (max-width: 1050px) {
        width: 90px;
        height: 35px;
        min-height: 35px;
        border: 2px solid #9b0b04;
        margin-top: 0px;
    }

    @media screen and (max-width: 450px) {
        height: 40px;
    }
`

export const GuestButtonHolder = styled(ConnectButtonHolder)`
    left: 25px;
    top: 25px;
`


export const Span = styled.span`
    position: absolute;
    right: 25px;
    top: 25px;
    font-family: "Graphik-Black";
    font-size: 14px;
    color: white;

    @media screen and (max-width: 1050px) {
        font-size: 12px;
    }

`

export const ConnectButton = styled.button`
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

export const GeneratorHolder = styled.div`
    flex: 5;
    height: 100%;
    width: 100%;
    margin-right: 40px;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: left;

    @media screen and (max-width: 1150px) {
        width: 100%;
        min-width: 0;
        margin-right: 0px;
    }
`

export const RowBox = styled.div`
    display: flex;

    @media screen and (max-width: 1150px) {
        width: 100%;
        justify-content: center;
    }
`

export const MobileBannerRowBox = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 1150px) {
        width: 100%;
        justify-content: space-between;
    }
`

export const LoungeRoom = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1150px) {
        flex-direction: column;
        padding: 10px;
    }

`

export const ColBox = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1150px) {
        align-items: left;
        margin-left: 25px;
    }
` 

export const SelectorColBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-right: 10px;

    @media screen and (max-width: 1150px) {
        margin-left: 5px;
        margin-right: 5px;
        align-items: center;
    }
`

export const MySelect = styled(Select)`
    margin-bottom: 15px;
    width: 100%;
    min-width: 125px;
    font-size: 14px;

    @media screen and (max-width: 1150px) {
        font-size: 10px;
    }
`

export const MyTwitterSelect = styled(Select)`
    width: 100%;
    min-width: 210px;
    margin-right: 10px;
    font-size: 14px;

    @media screen and (max-width: 1150px) {
        min-width: 125px;
        font-size: 10px;
    }
`

export const CreateButtonHolder = styled.div`
    width: 100%;
    height: 35px;
    min-width: 125px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #9b0b04;
`
export const DownloadButtonHolder = styled(CreateButtonHolder)`
    margin-top: 8px;
`

export const TwitterCreateButtonHolder = styled(CreateButtonHolder)`
    min-width: 210px;
    margin-right: 10px;
    margin-top: 10px;

    @media screen and (max-width: 1150px) {
        min-width: 100px;
    }
`

export const TwitterDownloadButtonHolder = styled(TwitterCreateButtonHolder)`
    min-width: 210px;
    margin-top: 0px;
    margin-right: 0px;

    @media screen and (max-width: 1150px) {
        min-width: 100px;
    }
`

export const CreateButton = styled(ConnectButton)`
    padding-left: 5px;
    padding-right: 5px;
    font-size: 14px;

    @media screen and (max-width: 1150px) {
        font-size: 12px;
    }
`

export const BannerImageContainer = styled.div`
    width: 50%;
    min-width: 25vw;
    margin-left: 10%;
    height: 80vh;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed white;

    @media screen and (max-width: 1150px) {
        margin-left: 5%;
        min-width: 0vw;
        height: 60vh;
    }
    
`

export const TwitterBannerContainer = styled.div`
    width: 90%;
    height: 40vh;
    padding: 5px;
    margin-top: calc(10px + 7vh);
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    border: 2px dashed white;

    @media screen and (max-width: 1150px) {
        height: 30vh;
    }
`

const BannerImageHolder = styled.img`
    max-height: 100%;
    max-width: 100%;
    box-shadow: 3px 3px 3px #5555;
`

const ContainedSpan = styled.span`
    align-self: flex-start;
    height: 80vh;

    @media screen and (max-width: 1150px) {
        max-width: 40vw;
        max-height: 60vh;
    }
`

const ContainedSpanTwitter = styled.span`
    align-self: center;
    height: 40vh;

    @media screen and (max-width: 1150px) {
        height: 20vh;
        max-width: 100%;
    }
`

export const MobileBannerImage = ({src, isTwitter}) => {
    const [isHovered, setIsHovered] = useState(false);

    const style = {
        transform: isHovered ? 'scale(1.03)' : 'scale(1.00)',
        transition: `transform 250ms`,
    };

    const trigger = () => {
        setIsHovered(true);
    };

    const unset = () => {
        setIsHovered(false);
    }

    if (isTwitter) {
        return (
            <ContainedSpanTwitter onMouseEnter={trigger} onMouseLeave={unset} style={style}>
                <BannerImageHolder src={src}/>
            </ContainedSpanTwitter>
        )
    } else {
        return (
            <ContainedSpan onMouseEnter={trigger} onMouseLeave={unset} style={style}>
                <BannerImageHolder src={src}/>
            </ContainedSpan>
        ); 
    }   
}

export const MyPulseLoader = styled(PulseLoader)`
    color: #fff;
    width: 50%;
`

export const PickerTitle = styled.p`
    margin-bottom: 3px;
    font-family: 'Graphik-Semibold';
    font-size: 16px;
    align-self: flex-start;
`

export const A = styled.a`
    min-width: 125px;
    text-decoration:none;
    width: 100%;
`

export const A2 = styled(A)`
    margin-top: 10px;
    margin-right: 10px;
`

export const LoungeLogo = styled.div`
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
    z-index: 10;

    
    @media screen and (max-width: 1150px) {
        margin-left: 15px;
        margin-bottom: 15px;
    }
`

export const DummyDiv = styled.div`
    width: 0;
    height: 0;
`
export const Input = styled.input`
    margin-top: 20px;
    cursor: pointer;
`

export const RadioLabel = styled.p`
    margin-top: 20px;
    font-size: 12px;
    font-family: 'Graphik-Regular';
    margin-left: 5px;
    align-self: center;

    @media screen and (max-width: 1150px) {
        font-size: 10px;
    }
`




