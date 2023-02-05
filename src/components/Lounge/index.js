import Footing from '../Footer';
import {React, useState, useEffect} from 'react';
import { ConnectButton, ConnectButtonHolder, Container, Menu, MenuItem, BannerTitleHolder, BannerTitle, 
         BannerTitleLine, LoungeEntrance, MenuItemImage, MenuItemText, MenuItemSelected, LoungeRoom,
         MenuItemHolder, LoungeLogo, LoungeImage, GuestButtonHolder, Span} 
         from './LoungeElements.js';
import { GeneratorPlayground } from './GeneratorComponent';
import { Arcade } from './Arcade';
import { Link } from "react-router-dom";
import axios from 'axios';
import Web3 from "web3";
import Web3Modal from 'web3modal';
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";
import * as evmChains from 'evm-chains';
import MenuRider0 from '../../images/lounge/lounge_menu_rider0.png';
import MenuRider1 from '../../images/lounge/lounge_menu_rider1.png';
import MenuRider2 from '../../images/lounge/lounge_menu_rider2.png';
import LandingPage from "../../images/lounge/LOUNGE-LANDING-PAGE.gif";
import MobileLandingPage from "../../images/lounge/MOBILE-LOUNGE-LANDING-PAGE.png";

const apiRoot = process.env.REACT_APP_BACKEND_SERVER;

let web3Modal;
let provider;

function init() {
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
            infuraId: "" // TODO: fill
            }
        },
        walletlink: {
            package: WalletLink,
            options: {
                appName: "CTJR", // Required
                rpc: "" , // TODO: fill; Optional if `infuraId` is provided; otherwise it's required
                chainId: 1, // Optional. It defaults to 1 if not provided
                appLogoUrl: null, // Optional. Application logo image URL. favicon is used if unspecified
                darkMode: false // Optional. Use dark theme, defaults to false
            }
        }
    };

    web3Modal = new Web3Modal({
        cacheProvider: false, // optional
        providerOptions, // required
        disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });
}


const Lounge = () => {
    const [account, setAccount] = useState(null);
    const [ownedRiders, setOwnedRiders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [connectButtonColor, setConnectButtonColor] = useState("#89b0aa");
    const [selectedMenuItem, setSelectedMenuItem] = useState(0);
    const [isGuest, setIsGuest] = useState(false);

    function handleConnectMouseDown () {
        setConnectButtonColor("#9b0b04");
    }

    function handleConnectMouseUp(mouseUp, guest) {
        setConnectButtonColor("#89b0aa");
        if (mouseUp) {
            if (guest) {
                setIsGuest(true);
            } else {
                connect();
            }
        }
    }

    /**
    * Kick in the UI action after Web3modal dialog has chosen a provider
    */
    async function fetchAccountData() {
        // Get a Web3 instance for the wallet
        const web3 = new Web3(provider);

        // Get connected chain id from Ethereum node
        const chainId = await web3.eth.getChainId();
        // Load chain information over an HTTP API
        const chainData = evmChains.getChain(chainId);

        // Get list of accounts of the connected wallet
        const accounts = await web3.eth.getAccounts();

        // MetaMask does not give you all accounts, only the selected account
        setAccount(accounts[0]);
        await updateOwnedRiders(accounts[0]);
    }

    /**
    * Fetch account data for UI when
    * - User switches accounts in wallet
    * - User switches networks in wallet
    * - User connects wallet initially
    */
    async function refreshAccountData() {
        setIsLoading(true);
        await fetchAccountData(provider);
        setIsLoading(false);
    }

    async function connect() {
        try {
            provider = await web3Modal.connect();
        } catch(e) {
            console.log("Could not get a wallet connection", e);
            setAccount("0xTest");
            updateOwnedRiders("");
            return;
        }

        provider.on("accountsChanged", (accounts) => {
            window.location.reload();
            fetchAccountData();
        });
        provider.on("chainChanged", (chainId) => {
            window.location.reload();
            fetchAccountData();
        });
        provider.on("networkChanged", (networkId) => {
            window.location.reload();
            fetchAccountData();
        });

        await refreshAccountData();
    }

    useEffect(() => {
        init();
     }, [])

    useEffect(() => {
        async function doUpdateOwnedRiders() {
            await updateOwnedRiders(account);
        }
        doUpdateOwnedRiders();
    }, [account])

    async function updateOwnedRiders(address) {
        setIsLoading(true);
        await axios.get(`${apiRoot}/ownedRiders/${address}`)
                    .then(res => {
                        setOwnedRiders(res.data)
                        setIsLoading(false);
                        if (res.data.length === 0)
                            setIsGuest(false);                  
                    });
    }

    function changeMenus(i) {
        setSelectedMenuItem(i);
    }

    /* account && ownedRiders.length > 0 ? "#e7e8ec" : "black" */

    return (
        <Container style={{"background": (account && ownedRiders.length > 0) || isGuest ? "#e7e8ec" : "black"}}>
            {(account && ownedRiders.length > 0) || isGuest ?
                <LoungeRoom>
                    <Menu>
                        <BannerTitleHolder>
                            <BannerTitle>Menu</BannerTitle>
                            <BannerTitleLine/>
                        </BannerTitleHolder>
                        <MenuItemHolder>
                            {selectedMenuItem === 0 ? 
                                <MenuItemSelected onClick={() => changeMenus(0)} >
                                    <MenuItemImage src={MenuRider0} />
                                    <MenuItemText>Crash Test Arcade</MenuItemText>
                                </MenuItemSelected> :
                                <MenuItem onClick={() => changeMenus(0)}>
                                    <MenuItemImage src={MenuRider0} />
                                    <MenuItemText>Crash Test Arcade</MenuItemText>
                                </MenuItem>}
                            {selectedMenuItem === 1 ? 
                                <MenuItemSelected onClick={() => changeMenus(1)}  disabled={isGuest}>
                                    <MenuItemImage src={MenuRider1} />
                                    <MenuItemText>Mobile Banner Generator</MenuItemText>
                                </MenuItemSelected> :
                                <MenuItem onClick={() => changeMenus(1)}  disabled={isGuest}>
                                    <MenuItemImage src={MenuRider1} />
                                    <MenuItemText>Mobile Banner Generator</MenuItemText>
                                </MenuItem>}
                            {selectedMenuItem === 2 ? 
                                <MenuItemSelected onClick={() => changeMenus(2)} disabled={isGuest}>
                                    <MenuItemImage src={MenuRider2} />
                                    <MenuItemText>Twitter Banner Generator</MenuItemText>
                                </MenuItemSelected> :
                                <MenuItem onClick={() => changeMenus(2)} disabled={isGuest}>
                                    <MenuItemImage src={MenuRider2} />
                                    <MenuItemText>Twitter Banner Generator</MenuItemText>
                                </MenuItem>}
                        </MenuItemHolder>
                    </Menu>
                    {[1, 2].includes(selectedMenuItem) &&
                        <GeneratorPlayground selectedMenuItem={selectedMenuItem} ownedRiders={ownedRiders}/>}
                    {selectedMenuItem === 0 &&
                        <Arcade account={account} ownedRiders={ownedRiders}/>} 
                </LoungeRoom>
            :
            <LoungeEntrance>
                <picture>
                    <source media="(min-width: 750px)" srcset={LandingPage}/>
                    <LoungeImage src={MobileLandingPage}/>
                </picture> 
                {account && !isLoading ? <Span>You don't own any Joyriders</Span> :
                    <ConnectButtonHolder>
                            <ConnectButton style={{"backgroundColor": connectButtonColor}}
                                            onMouseDown={() => handleConnectMouseDown()} 
                                            onMouseUp={() => handleConnectMouseUp(true, false)} 
                                            onMouseLeave={() => handleConnectMouseUp(false, false)}>Holder Entrance
                            </ConnectButton>
                    </ConnectButtonHolder>}
                <GuestButtonHolder>
                        <ConnectButton style={{"backgroundColor": connectButtonColor}}
                                        onMouseDown={() => handleConnectMouseDown()} 
                                        onMouseUp={() => handleConnectMouseUp(true, true)} 
                                        onMouseLeave={() => handleConnectMouseUp(false, true)}>Guest Entrance
                        </ConnectButton>
                </GuestButtonHolder>
            </LoungeEntrance>}
            {(account && ownedRiders.length > 0) || isGuest ? <Link to="/"><LoungeLogo/></Link> : <Footing whiteTrim={true} showLogo={false}/>}
        </Container>
    )
}

export default Lounge;