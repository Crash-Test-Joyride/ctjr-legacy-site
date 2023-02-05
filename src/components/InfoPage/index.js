import {React, useState, useEffect} from 'react';
import Footing from '../Footer'
import { Answer, Container, QAContainer, QATitle, Line, Banner, RoadmapTitle, OffsetBanner, 
         RoadMapContainer, RoadmapSubTitle, RoadMapSecondTitle, Expand, RoadmapItemInnnerContainer, 
         RoadmapItemNumber, RoadmapLargeContentContainer, RoadmapItemBlurb, RoadmapItemSubTitle,
         AzaleaImage1, AzaleaImage1B, AzaleaImage1C, AzaleaImage2, AzaleaImage2B, BrushImage,
         ArcadeImage,
         WaveriderImage, } from './InfoElements';
import BannerImg from '../../images/banner.jpg';
import BannerImg_placeholder from '../../images/banner_placeholder.jpg';
import Azalea1 from '../../images/Azalea1.png';
import Azalea12 from '../../images/Azalea2.png';
import BrushStroke from '../../images/BrushStroke.png';
import Arcade from '../../images/arcade.png';
import Waverider from '../../images/waverider.png';

const Info = () => {
    const [roadmapItemsOpened, setRoadmapItemsOpened] = useState([false, false, false, false]);
    const [roadmapItemsVisible, setRoadmapItemsVisible] = useState([true, true, true, true]);
    const [roadmapItemsSmallContentVisible, setRoadmapItemsSmallContentVisible] = useState(true);
    const [roadmapItemsLargeContentVisible, setRoadmapItemsLargeContentVisible] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [itemColor0, setItemColor0] = useState('white');
    const [itemColor1, setItemColor1] = useState('white');
    const [itemColor2, setItemColor2] = useState('white');
    const [itemColor3, setItemColor3] = useState('white');

    function handleRoadmapItemClick(index) {
        if (isTransitioning) return;
        setIsTransitioning(true);
        const newRoadmapItemsOpened = [...roadmapItemsOpened];
        newRoadmapItemsOpened[index] = !newRoadmapItemsOpened[index];
        let count = 0;
        for (let i = 0; i < newRoadmapItemsOpened.length; i++) {
            if (newRoadmapItemsOpened[i]) {
                count++;
            }
        }
        if (count > 1) return;
        setRoadmapItemsOpened(newRoadmapItemsOpened);
        
        if (!roadmapItemsOpened[index]) {
            const newRoadmapItemsVisible = [false, false, false, false];
            newRoadmapItemsVisible[index] = !newRoadmapItemsVisible[index];
            setRoadmapItemsVisible(newRoadmapItemsVisible);
        } else {
            setTimeout(function() {
                setRoadmapItemsVisible([true, true, true, true])
            }, 300);
        }

        if (roadmapItemsSmallContentVisible) {
            setRoadmapItemsSmallContentVisible(false)
            setTimeout(function() {
                setRoadmapItemsLargeContentVisible(true)
                setIsTransitioning(false);
            }, 300);
        } else {
            setRoadmapItemsLargeContentVisible(false);
            setTimeout(function() {
                setRoadmapItemsSmallContentVisible(true)
                setIsTransitioning(false);
            }, 300);
        }
    }

    function adjustItemColor(index, isHovered) {
        switch (index) {
            case 0:
                setItemColor0(isHovered ? 'black' : 'white');
                break;
            case 1:
                setItemColor1(isHovered ? 'black' : 'white');
                break;
            case 2:
                setItemColor2(isHovered ? 'black' : 'white');
                break;
            case 3:
                setItemColor3(isHovered ? 'black' : 'white');
                break;
        }
    }

    return (
        <Container>
            <Banner src={BannerImg} placeholder={BannerImg_placeholder} id="topInfo"/>
            <RoadmapTitle>ROADMAP</RoadmapTitle>
            <RoadMapSecondTitle>Version 1.5</RoadMapSecondTitle>
            <RoadmapSubTitle>A focus on increasing fluidity between digital and physical.</RoadmapSubTitle>
            <RoadMapContainer>
                <Expand visible={roadmapItemsVisible[0]} index={0} isOpened={roadmapItemsOpened[0]} onClick={() => handleRoadmapItemClick(0)} 
                        onMouseEnter={() => adjustItemColor(0, true)} onMouseLeave={() => adjustItemColor(0, false)}>
                    <RoadmapItemInnnerContainer>
                        {roadmapItemsSmallContentVisible && <RoadmapItemNumber style={{"color": itemColor0, "text-align": "center", "margin": "5%"}}>1. CLOTHING COLLECTION I: AZALEAS</RoadmapItemNumber>}
                        {roadmapItemsLargeContentVisible &&
                            <RoadmapLargeContentContainer>
                                <RoadmapItemNumber>CLOTHING COLECTION I: AZALEAS</RoadmapItemNumber>
                                <RoadmapItemBlurb>
                                    Through Azaleas, we merge NFT and IRL. Inspired by the iconography and color palette of the Azaleas background asset of the NFT collection, this clothing capsule is the beginning of a high-end clothing label that can stand on its own in parallel to the NFT. Azaleas headlines roadmap 1.5. Its imagery and influence will persist through CTJR ventures.
                                </RoadmapItemBlurb>
                                <RoadmapItemSubTitle>Timeline</RoadmapItemSubTitle>
                                <RoadmapItemBlurb>• Last thread sewn May 2022.</RoadmapItemBlurb>
                                <RoadmapItemBlurb>• Capsule launches June 2022.</RoadmapItemBlurb>
                                <RoadmapItemSubTitle>Holder benefits</RoadmapItemSubTitle>
                                <RoadmapItemBlurb>• Presale access.</RoadmapItemBlurb>
                                <RoadmapItemBlurb>• Exclusivity on certain collection assets.</RoadmapItemBlurb>
                                <RoadmapItemBlurb>• At-cost discounts.</RoadmapItemBlurb>
                                <RoadmapItemBlurb>• Digital easter-eggs.</RoadmapItemBlurb>
                                <RoadmapItemSubTitle>Miscellaneous</RoadmapItemSubTitle>
                                <RoadmapItemBlurb>• Site revamp and shop launch.</RoadmapItemBlurb>
                                <RoadmapItemBlurb>• Partnership with NFT commerce platform for full web3 integration.</RoadmapItemBlurb>
                                <AzaleaImage1 src={Azalea1}/>
                                <AzaleaImage1B src={Azalea1}/>
                                <AzaleaImage1C src={Azalea1}/>
                                <AzaleaImage2 src={Azalea12}/>
                                <AzaleaImage2B src={Azalea12}/>
                            </RoadmapLargeContentContainer>}
                    </RoadmapItemInnnerContainer>
                </Expand>
                <Expand visible={roadmapItemsVisible[1]} index={1} isOpened={roadmapItemsOpened[1]} onClick={() => handleRoadmapItemClick(1)}
                        onMouseEnter={() => adjustItemColor(1, true)} onMouseLeave={() => adjustItemColor(1, false)}>
                    <RoadmapItemInnnerContainer>
                        {roadmapItemsSmallContentVisible && <RoadmapItemNumber style={{"color": itemColor1, "text-align": "center", "margin": "5%"}}>2. BRUSHES</RoadmapItemNumber>}
                        {roadmapItemsLargeContentVisible &&
                            <RoadmapLargeContentContainer>
                                <RoadmapItemNumber>BRUSHES</RoadmapItemNumber>
                                <RoadmapItemBlurb>
                                    Same Joyrider, new vibe. With Brushes, we reach Generation II of Crash Test Joyride NFTs. Gen II leaves behind the stagnant nature of Gen I as a PFP collection. One style becomes multiple. Static becomes dynamic. 
                                </RoadmapItemBlurb>
                                <RoadmapItemSubTitle>Timeline</RoadmapItemSubTitle>
                                <RoadmapItemBlurb>• Drops early Summer 2022.</RoadmapItemBlurb>
                                <RoadmapItemSubTitle>Holder benefits</RoadmapItemSubTitle>
                                <RoadmapItemBlurb>• Free 1-to-1 mint for each current Joyrider that you own.</RoadmapItemBlurb>
                                <RoadmapItemSubTitle>Miscellaneous</RoadmapItemSubTitle>
                                <RoadmapItemBlurb>• Sandals with socks?!</RoadmapItemBlurb>
                                <BrushImage src={BrushStroke}/>
                            </RoadmapLargeContentContainer>}
                    </RoadmapItemInnnerContainer>
                </Expand>
                <Expand visible={roadmapItemsVisible[2]} index={2} isOpened={roadmapItemsOpened[2]} onClick={() => handleRoadmapItemClick(2)}
                        onMouseEnter={() => adjustItemColor(2, true)} onMouseLeave={() => adjustItemColor(2, false)}>
                    <RoadmapItemInnnerContainer>
                        {roadmapItemsSmallContentVisible && <RoadmapItemNumber style={{"color": itemColor2, "text-align": "center", "margin": "5%"}}>3. ARCADE</RoadmapItemNumber>}
                        {roadmapItemsLargeContentVisible &&
                            <RoadmapLargeContentContainer>
                                <RoadmapItemNumber>ARCADE</RoadmapItemNumber>
                                <RoadmapItemBlurb>
                                The Crash Test Arcade was born organically as a playful perk for holders, but will take new life in Roadmap 1.5. The arcade will expand to include more games, live competitions, prizes, and blockchain interactivity. Compete against other holders in games where risks will be high but rewards higher. 
                                </RoadmapItemBlurb>
                                <RoadmapItemSubTitle>Timeline</RoadmapItemSubTitle>
                                <RoadmapItemBlurb>• Ongoing.</RoadmapItemBlurb>
                                <RoadmapItemSubTitle>Holder benefits</RoadmapItemSubTitle>
                                <RoadmapItemBlurb>• Access to holder exclusive games.</RoadmapItemBlurb>
                                <RoadmapItemBlurb>• Access to leaderboards and competitions.</RoadmapItemBlurb>
                                <RoadmapItemSubTitle>Miscellaneous</RoadmapItemSubTitle>
                                <RoadmapItemBlurb>• Arcade events.</RoadmapItemBlurb>
                                <ArcadeImage src={Arcade}/>
                            </RoadmapLargeContentContainer>}
                    </RoadmapItemInnnerContainer>
                </Expand>
                <Expand visible={roadmapItemsVisible[3]} index={3} isOpened={roadmapItemsOpened[3]} onClick={() => handleRoadmapItemClick(3)}
                        onMouseEnter={() => adjustItemColor(3, true)} onMouseLeave={() => adjustItemColor(3, false)}>
                    <RoadmapItemInnnerContainer>
                        {roadmapItemsSmallContentVisible && <RoadmapItemNumber style={{"color": itemColor3, "text-align": "center", "margin": "5%"}}>4. CLOTHING COLLECTION II</RoadmapItemNumber>}
                        {roadmapItemsLargeContentVisible &&
                            <RoadmapLargeContentContainer>
                                <RoadmapItemNumber>CLOTHING COLLECTION II</RoadmapItemNumber>
                                <RoadmapItemBlurb>
                                    Our second clothing capsule, inspired by the Waverider Mini Collection within the Crash Test Joyride NFT.
                                </RoadmapItemBlurb>
                                <RoadmapItemSubTitle>Timeline</RoadmapItemSubTitle>
                                <RoadmapItemBlurb>• Fall/Winter 2022.</RoadmapItemBlurb>
                                <RoadmapItemSubTitle>Holder benefits</RoadmapItemSubTitle>
                                <RoadmapItemBlurb>• TBA.</RoadmapItemBlurb>
                                <RoadmapItemSubTitle>Miscellaneous</RoadmapItemSubTitle>
                                <RoadmapItemBlurb>• Codename "Monochromatic".</RoadmapItemBlurb>
                                <WaveriderImage src={Waverider}/>
                            </RoadmapLargeContentContainer>}
                    </RoadmapItemInnnerContainer>
                </Expand>
            </RoadMapContainer>
            <QAContainer>
                <Line/>
            </QAContainer>
            <QAContainer>
                <QATitle>Contact</QATitle>
                <Answer>For all inquiries please reach out to <span style={{"font-family": "Graphik-Medium Italic"}}>contact@crashtestjoyride.com</span></Answer>
            </QAContainer>
            <OffsetBanner url='https://www.aerial.is/nft/embed?address=0x3e88721fa41d5e102d54b4a04e550222efdd234d'/>
            <Footing/>
        </Container>
    )
}

export default Info;