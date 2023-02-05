import styled from 'styled-components';

export const Header = styled.nav`
    height: 4vw;
    min-height: 40px;
    display: flex;
    columns: 3;
    align-items: center;
    justify-content: flex-end;
    top: 0;
`

export const WalletContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: end;
    align-self: center;
    margin-right: 20px;

    @media screen and (max-width: 1050px) {
        margin-right: 15px;
    }

    @media screen and (max-width: 700px) {
        margin-right: 10px;
    }
`

export const WalletSpan = styled.span`
    font-family: 'Inconsolata';
    color: #000000;
    display: flex;
    align-items: center;
    font-size: 20px;

    @media screen and (max-width: 1050px) {
        font-size: 14px;
    }

    @media screen and (max-width: 700px) {
        font-size: 10px;
    }
`

export const ConnectButtonHolder = styled.div`
    border: 3px solid #9b0b04;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;

    @media screen and (max-width: 450px) {
        border: 2px solid #9b0b04;
    }
`

export const ConnectButton = styled.button`
    font-family: 'Graphik-Light Italic';
    border: none;
    color: #fff;
    font-size: 1.2rem;
    padding-left: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-right: 10px;
    cursor: pointer;
    z-index: 999;
    letter-spacing: 0.1rem;
    background-color: #89b0aa;
    margin: 2px;

    &:hover {
        margin: 0px;
        border: 2px solid #9b0b04;
    }

    @media screen and (max-width: 1050px) {
        padding-left: 5px;
        padding-right: 5px;
        letter-spacing: 0.05rem;
        font-size: 0.7em;
        margin: 1px;

        &:hover {
            margin: 0px;
            border: 1px solid #9b0b04;
        }
    }
`;