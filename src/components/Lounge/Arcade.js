import {React, useState} from 'react';
import { ArcadeTitle, GameBar, GamePreview, GamePreviewHolder, GamePreviewName, Container} from './ArcadeElements';
import { AzaleaRunner } from './AzaleaRunner';

import 'reactjs-popup/dist/index.css';

import AzaleasDodgerPreviewImg from '../../images/lounge/arcade/azaleas-dodger-preview-img.png';
import AzaleasDodgerPreviewGif from '../../images/lounge/arcade/azaleas-dodger-preview.gif';
import ComingSoon from '../../images/lounge/arcade/coming-soon.png';

export const Arcade = ({account, ownedRiders}) => {

    const [selectedGame, setSelectedGame] = useState(0);

    return (
        <Container>
            <ArcadeTitle/>
            <GameBar>
                <GamePreviewHolder>
                    <GamePreview src={AzaleasDodgerPreviewImg} 
                             onMouseOver={e => e.currentTarget.src = AzaleasDodgerPreviewGif} 
                             onMouseOut={e => e.currentTarget.src = AzaleasDodgerPreviewImg}
                             style={{ filter:  selectedGame !== 0 ? "grayscale(100%)" : "grayscale(0%)" }}/>
                    <GamePreviewName>Azalea Runner</GamePreviewName>
                </GamePreviewHolder>
                <GamePreviewHolder>
                    <GamePreview src={ComingSoon} 
                                 style={{ filter:  selectedGame !== 1 ? "grayscale(100%)" : "grayscale(0%)" }}/>
                    <GamePreviewName>Joyride: The Game</GamePreviewName>
                </GamePreviewHolder>
            </GameBar>
            {selectedGame == 0 && <AzaleaRunner account={account} ownedRiders={ownedRiders}/>}
        </Container>
    )
}
