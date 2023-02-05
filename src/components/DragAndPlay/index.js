import {React, useState, useEffect} from 'react';
import { HashLink } from 'react-router-hash-link';
import Draggable from 'react-draggable';
//import { encrypt } from 'eth-sig-util'
import MetaMaskOnboarding from '@metamask/onboarding'
import Countdown from "react-countdown";
//import detectEthereumProvider from '@metamask/detect-provider';

import { BoxImage } from '../traits/BaseTrait';
import { Torso1, Torso1Box, Torso5, Torso5Box } from '../traits/Torsos';
import { Head1, Head1Box, Head6, Head6Box } from '../traits/Head';
import { Shirt2, Shirt2Box, Shirt4, Shirt4Box, Shirt5, Shirt5Box} from '../traits/Shirt';
import { Hat2, Hat2Box, Hat3, Hat3Box, Hat6, Hat6Box, Hat7, Hat7Box, Hat13, Hat13Box } from '../traits/Hat';
import { Eyes1, Eyes1Box, Eyes2, Eyes2Box, Eyes3, Eyes3Box } from '../traits/Eyes';
import { Neck1, Neck1Box, Neck2, Neck2Box } from '../traits/Neck';
import { Headsymbol1, Headsymbol1Box } from '../traits/HeadSymbol';
import { Bodysymbol1Box, Bodysymbol1 } from '../traits/BodySymbol';
import { Glasses1, Glasses1Box, Glasses2, Glasses2Box, Glasses3, Glasses3Box, Glasses4, Glasses4Box } from '../traits/Glasses';
import { Nose, NoseBox } from '../traits/Nose';
import {Outline, Container, Center, MintButton, MintButtonHolder, MintContainer, P, ScrollDownButton, BuildTitle} from './DragAndPlayElements';
import { Header, ConnectButton, ConnectButtonHolder, WalletContainer, WalletSpan } from '../Header/HeaderElements'
import CounterSection from '../Counter';

import myBox100x100 from '../../images/dragAndPlay/BOX-100X100.png'
import myBox200x200 from '../../images/dragAndPlay/BOX-200X200.png'
import myBox300x300 from '../../images/dragAndPlay/BOX-300X300.png'
import myBox300x150 from '../../images/dragAndPlay/BOX-300X150.png'
import myBox200x100 from '../../images/dragAndPlay/BOX-200X100.png'

// Metamask
const currentUrl = new URL(window.location.href)
const forwarderOrigin = currentUrl.hostname === 'localhost' ? 'http://localhost:9010' : undefined
const isMetaMaskInstalled = () => {
    const { ethereum } = window
    return Boolean(ethereum && ethereum.isMetaMask)
}

const revealTime = 1642888800000;
const endDate = new Date(revealTime);

// Misc functions
const renderCounter = ({ days, hours, minutes, seconds, milliseconds, completed }) => {
    return (
        <CounterSection days={days} hours={hours} minutes={minutes} seconds={seconds} milliseconds={milliseconds}/>
    );
};

const shortenAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

// Main
const DragAndPlay = () => {
    // metamask and web3
    const [accounts, setAccounts] = useState([]);

    let onboarding
    try {
      onboarding = new MetaMaskOnboarding({ forwarderOrigin })
    } catch (error) {
      console.error(error)
    }

    const isMetaMaskConnected = () => accounts && accounts.length > 0
    const onClickConnect = async () => {
        if (isMetaMaskInstalled()) {
            try {
                const newAccounts = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                })
                setAccounts(newAccounts);
            } catch (error) {
                console.error(error)
            }
        } else {
            onboarding.startOnboarding();
        }
    }

    useEffect(() => {
        if (isMetaMaskInstalled() && isMetaMaskConnected())
            onClickConnect();
     }, [])

    if (isMetaMaskInstalled()) {
        window.ethereum.on('accountsChanged', (accounts) => {
            setAccounts(accounts);
        });

        window.ethereum.on('chainChanged', (chainId) => {
            window.location.reload();
        });
    }

    const [connectButtonColor, setConnectButtonColor] = useState("#89b0aa");
    const [mintButtonColor, setMintButtonColor] = useState("#89b0aa");
    function handleConnectMouseDown () {
        setConnectButtonColor("#9b0b04");
    }

    function handleMintMouseDown () {
        setMintButtonColor("#9b0b04");
    }
    function handleConnectMouseUp(mouseUp) {
        setConnectButtonColor("#89b0aa");
        if (mouseUp)
            onClickConnect();
    }

    function handleMintMouseUp(mouseUp) {
        setMintButtonColor("#89b0aa");
        if (mouseUp) {
            window.open("https://opensea.io/collection/crashtestjoyride", "_blank");
        }
    }

    const Heading = ({accounts}) => {
        return (
            <Header id="topHome">
                <WalletContainer>
                    {isMetaMaskConnected() ? 
                    <WalletSpan>Connected as: {shortenAddress(accounts[0])}</WalletSpan> 
                    : <ConnectButtonHolder>
                        <ConnectButton style={{"backgroundColor": connectButtonColor}} id="connectButton" 
                            onMouseDown={() => handleConnectMouseDown()} 
                            onMouseUp={() => handleConnectMouseUp(true)} 
                            onMouseLeave={() => handleConnectMouseUp(false)}>
                            {isMetaMaskInstalled() ? "connect wallet" : "install metamask"}
                        </ConnectButton>
                    </ConnectButtonHolder>}
                </WalletContainer>
            </Header>
        )
    }

    // misc
    const [scrollVisible, setScrollVisible] = useState(true);

    // Drag and play assets
    const [torso1Gray, setTorso1Gray] = useState(true);
    const [torso5Gray, setTorso5Gray] = useState(true);
    const [shirt2Gray, setShirt2Gray] = useState(true);
    const [shirt4Gray, setShirt4Gray] = useState(true);
    const [shirt5Gray, setShirt5Gray] = useState(true);
    const [head1Gray, setHead1Gray] = useState(true);
    const [head6Gray, setHead6Gray] = useState(true);
    const [headsymbol1Gray, setHeadsymbol1Gray] = useState(true);
    const [bodysymbol1Gray, setBodysymbol1Gray] = useState(true);
    const [eyes1Gray, setEyes1Gray] = useState(true);
    const [eyes2Gray, setEyes2Gray] = useState(true);
    const [eyes3Gray, setEyes3Gray] = useState(true);
    const [neck1Gray, setNeck1Gray] = useState(true);
    const [neck2Gray, setNeck2Gray] = useState(true);
    const [glasses1Gray, setGlasses1Gray] = useState(true);
    const [glasses2Gray, setGlasses2Gray] = useState(true);
    const [glasses3Gray, setGlasses3Gray] = useState(true);
    const [glasses4Gray, setGlasses4Gray] = useState(true);
    const [hat2Gray, setHat2Gray] = useState(true);
    const [hat3Gray, setHat3Gray] = useState(true);
    const [hat6Gray, setHat6Gray] = useState(true);
    const [hat7Gray, setHat7Gray] = useState(true);
    const [hat13Gray, setHat13Gray] = useState(true);
    const [noseGray, setNoseGray] = useState(true);

    function isNotInCenter(id) {
        let rect = document.getElementById("outline").getBoundingClientRect();
        let elem = document.getElementById(id).getBoundingClientRect();
        const isOverlapped = elem.left < rect.right && elem.right > rect.left && elem.top < rect.bottom && elem.bottom > rect.top;
        return !isOverlapped;
    }

    const getOffset = (element) => {
        const rect = element?.getBoundingClientRect(),
           scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return rect.top + scrollTop;
     };

    const listenToScroll = () => {
        let heightToHideFrom = getOffset(document.querySelector("#bottom")) - window.innerHeight;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightToHideFrom) {
           scrollVisible && setScrollVisible(false);
        } else { 
            setScrollVisible(true);  
        }  
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
     }, [])

    return (
        <>
            <Container>
                <Center>
                    <BuildTitle>DRAG 'N DROP</BuildTitle>
                    <Outline id="outline"/>
                    <MintContainer>
                        <MintButtonHolder>
                            <MintButton style={{"backgroundColor": mintButtonColor}} id="connectButton" 
                                onMouseDown={() => handleMintMouseDown()} 
                                onMouseUp={() => handleMintMouseUp(true)} 
                                onMouseLeave={() => handleMintMouseUp(false)}
                            >buy on opensea</MintButton>
                        </MintButtonHolder>
                    </MintContainer>
                    <HashLink smooth to="#bottom">
                        {scrollVisible && <ScrollDownButton id="scroll">scroll down {'\u2193'}{'\u2193'}{'\u2193'}</ScrollDownButton>}
                    </HashLink>
                </Center>
                <Torso1Box>
                    <BoxImage/>
                    <P>BODY</P>
                    <Draggable onDrag={() => setTorso1Gray(isNotInCenter("torso1"))}><Torso1 id="torso1" style={ !torso1Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Torso1Box>
                <Torso5Box>
                    <BoxImage/>
                    <P>BODY</P>
                    <Draggable onDrag={() => setTorso5Gray(isNotInCenter("torso5"))}><Torso5 id="torso5" style={ !torso5Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Torso5Box>
                <Shirt2Box>
                    <BoxImage/>
                    <P>SHIRT</P>
                    <Draggable onDrag={() => setShirt2Gray(isNotInCenter("shirt2"))}><Shirt2 id="shirt2" style={ !shirt2Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Shirt2Box>
                <Shirt4Box>
                    <BoxImage/>
                    <P>SHIRT</P>
                    <Draggable onDrag={() => setShirt4Gray(isNotInCenter("shirt4"))}><Shirt4 id="shirt4" style={ !shirt4Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Shirt4Box>
                <Shirt5Box>
                    <BoxImage/>
                    <P>SHIRT</P>
                    <Draggable onDrag={() => setShirt5Gray(isNotInCenter("shirt5"))}><Shirt5 id="shirt5" style={ !shirt5Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Shirt5Box>
                <Head1Box>
                    <BoxImage/>
                    <P>HEAD</P>
                    <Draggable onDrag={() => setHead1Gray(isNotInCenter("head1"))}><Head1 id="head1" style={ !head1Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Head1Box>
                <Head6Box>
                    <BoxImage/>
                    <P>HEAD</P>
                    <Draggable onDrag={() => setHead6Gray(isNotInCenter("head6"))}><Head6 id="head6" style={ !head6Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Head6Box>
                <Headsymbol1Box >
                    <BoxImage src={myBox100x100}/>
                    <P>SYMBOL</P>
                    <Draggable onDrag={() => setHeadsymbol1Gray(isNotInCenter("headsymbol1"))}><Headsymbol1 id="headsymbol1" style={ !headsymbol1Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Headsymbol1Box>
                <Bodysymbol1Box>
                    <BoxImage src={myBox100x100}/>
                    <P>SYMBOL</P>
                    <Draggable onDrag={() => setBodysymbol1Gray(isNotInCenter("bodysymbol1"))}><Bodysymbol1 id="bodysymbol1" style={ !bodysymbol1Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Bodysymbol1Box>
                <Eyes1Box>
                    <BoxImage src={myBox200x100}/>
                    <P>EYES</P>
                    <Draggable onDrag={() => setEyes1Gray(isNotInCenter("eyes1"))}><Eyes1 id="eyes1" style={ !eyes1Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Eyes1Box>
                <Eyes2Box>
                    <BoxImage src={myBox200x100}/>
                    <P>EYES</P>
                    <Draggable onDrag={() => setEyes2Gray(isNotInCenter("eyes2"))}><Eyes2 id="eyes2" style={ !eyes2Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Eyes2Box>
                <Eyes3Box>
                    <BoxImage src={myBox200x100}/>
                    <P>EYES</P>
                    <Draggable onDrag={() => setEyes3Gray(isNotInCenter("eyes3"))}><Eyes3 id="eyes3" style={ !eyes3Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Eyes3Box>
                <Neck1Box>
                    <BoxImage src={myBox100x100}/>
                    <P>NECK</P>
                    <Draggable onDrag={() => setNeck1Gray(isNotInCenter("neck1"))}><Neck1 id="neck1" style={ !neck1Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Neck1Box>
                <Neck2Box>
                    <BoxImage src={myBox100x100}/>
                    <P>NECK</P>
                    <Draggable onDrag={() => setNeck2Gray(isNotInCenter("neck2"))}><Neck2 id="neck2" style={ !neck2Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Neck2Box>
                <Glasses1Box>
                    <BoxImage src={myBox200x100}/>
                    <P>GLASSES</P>
                    <Draggable onDrag={() => setGlasses1Gray(isNotInCenter("glasses1"))}><Glasses1 id="glasses1" style={ !glasses1Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Glasses1Box>
                <Glasses2Box >
                    <BoxImage src={myBox200x100}/>
                    <P>GLASSES</P>
                    <Draggable onDrag={() => setGlasses2Gray(isNotInCenter("glasses2"))}><Glasses2 id="glasses2" style={ !glasses2Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Glasses2Box>
                <Glasses3Box>
                    <BoxImage src={myBox200x100}/>
                    <P>GLASSES</P>
                    <Draggable onDrag={() => setGlasses3Gray(isNotInCenter("glasses3"))}><Glasses3 id="glasses3" style={ !glasses3Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Glasses3Box>
                <Glasses4Box>
                    <BoxImage src={myBox200x100}/>
                    <P>GLASSES</P>
                    <Draggable onDrag={() => setGlasses4Gray(isNotInCenter("glasses4"))}><Glasses4 id="glasses4" style={ !glasses4Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Glasses4Box>
                <Hat2Box>
                    <BoxImage src={myBox200x100}/>
                    <P>HAT</P>
                    <Draggable onDrag={() => setHat2Gray(isNotInCenter("hat2"))}><Hat2 id="hat2" style={ !hat2Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Hat2Box>
                <Hat3Box>
                    <BoxImage/>
                    <P>HAT</P>
                    <Draggable onDrag={() => setHat3Gray(isNotInCenter("hat3"))}><Hat3 id="hat3" style={ !hat3Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Hat3Box>
                <Hat6Box>
                    <BoxImage src={myBox300x150}/>
                    <P>HAT</P>
                    <Draggable onDrag={() => setHat6Gray(isNotInCenter("hat6"))}><Hat6 id="hat6" style={ !hat6Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Hat6Box>
                <Hat7Box>
                    <BoxImage src={myBox200x200}/>
                    <P>HAT</P>
                    <Draggable onDrag={() => setHat7Gray(isNotInCenter("hat7"))}><Hat7 id="hat7" style={ !hat7Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Hat7Box>
                <Hat13Box>
                    <BoxImage src={myBox300x300}/>
                    <P>ACCENT</P>
                    <Draggable onDrag={() => setHat13Gray(isNotInCenter("hat13"))}><Hat13 id="hat13" style={ !hat13Gray && { filter: "grayscale(0%)" }}/></Draggable>
                </Hat13Box>
                <NoseBox >
                    <BoxImage src={myBox100x100}/>
                    <P>NOSE</P>
                    <Draggable onDrag={() => setNoseGray(isNotInCenter("nose"))}><Nose id="nose" style={ !noseGray && { filter: "grayscale(0%)" }}/></Draggable>
                </NoseBox>
            </Container>
        </>
    )
}

export default DragAndPlay;