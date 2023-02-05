import { Holder, SideBar, SideBarTitle, SideBarLine, SideBarItem, Scroller, ScrollerLine, Logo, LogoHidden, Container,
         InfoParagraph, InfoTitle, ScrollerHeader, ScrollerHeaderSections, ScrollerLineHidden, Scrapbook, ScrapPage, A, DecorationHolder
        } from './JoyrideElements.js';
import { Link } from "react-router-dom";
import Footing from '../Footer'
import { React, useState } from "react";

import Scrap1 from '../../images/scrapbook/scrap1.jpg';
import Scrap2 from '../../images/scrapbook/scrap2.jpg';
import Scrap3 from '../../images/scrapbook/scrap3.jpg';
import Scrap4 from '../../images/scrapbook/scrap4.jpg';
import Scrap5 from '../../images/scrapbook/scrap5.jpg';
import Scrap6 from '../../images/scrapbook/scrap6.jpg';
import Scrap7 from '../../images/scrapbook/scrap7.jpg';
import Scrap8 from '../../images/scrapbook/scrap8.jpg';

const leftPageItems = [Scrap1, Scrap3, Scrap5, Scrap7]
const rightPageItems = [Scrap2, Scrap4, Scrap6, Scrap8];


const Joyride = () => {
    const [infoSelected, setInfoSelected] = useState(false);
    const [leftPageIndex, setLeftPageIndex] = useState(0);
    const [rightPageIndex, setRightPageIndex] = useState(0);
    const [prevLeftPageIndex, setPrevLeftPageIndex] = useState(-1);
    const [prevRightPageIndex, setPrevRightPageIndex] = useState(-1);

    function getNewIndex(isLeft) {
        return Math.floor(Math.random() * (isLeft ? leftPageItems.length : rightPageItems.length));
    }

    function handleScrapPageClick(isLeft) {
        let newIndex;
        if (isLeft) {
            newIndex = getNewIndex();
            while (newIndex === leftPageIndex || newIndex === prevLeftPageIndex) {
                newIndex = getNewIndex();
            }
            setPrevLeftPageIndex(leftPageIndex);
            setLeftPageIndex(newIndex);
        } else {
            newIndex = getNewIndex();
            while (newIndex === rightPageIndex || newIndex === prevRightPageIndex) {
                newIndex = getNewIndex();
            }
            setPrevRightPageIndex(rightPageIndex)
            setRightPageIndex(newIndex);
        }
    }

    const getHeader = () => {
        return (
            <ScrollerHeader>
                <SideBarTitle onClick={() => setInfoSelected(false)}>C. T. JR Apparel</SideBarTitle>
                <ScrollerHeaderSections>
                    <SideBarItem onClick={() => setInfoSelected(true)}>info <span style={{"font-size": "calc(7px + 0.6vw)"}}>{'\u2191'}</span></SideBarItem>
                    <A href="https://instagram.com/crashtestjoyride">
                        <SideBarItem>instagram <span style={{"fontSize": "calc(6px + 0.6vw)"}}>{'\u2197'}</span></SideBarItem>
                    </A>
                    <SideBarItem>shop (at launch) <span style={{"fontSize": "calc(6px + 0.6vw)"}}>{'\u2197'}</span></SideBarItem>
                </ScrollerHeaderSections>
            </ScrollerHeader>
        )
    }

    return (
    <Holder>
        { infoSelected ? 
            <>
                <Scroller>
                    {getHeader()}
                    <ScrollerLineHidden/>
                    <InfoTitle>About</InfoTitle>
                    <InfoParagraph>
                        C.T.JR is the apparel branch of Crash Test Joyride, bringing you curated, high quality streetware. It captures the drip of our original 4,444 Joyriders and brings it into the real world using classic CTJR logos and designs. It is the confidence and swagger of our best selves. <br/><br/>"I’m able to bring my talent and training from architecture to the world of apparel. I'm used to thinking about materials and construction, about the details and also the big picture idea of the collection. I love living in New York because no matter where you go, everybody seems to have a sense of personal style. For someone in the streetwear game, it's literally a city full of inspiration. Whenever I need ideas for my art, or for some design I want to cook up, I just need to step outside and take a walk.” - DL
                    </InfoParagraph>
                    <ScrollerLine/>
                    <InfoTitle>Collection I: <span style={{"font-family": "Graphik-Semibold Italic"}}>Azaleas</span></InfoTitle>
                    <InfoParagraph>
                        The <span style={{"font-family": "Graphik-Regular Italic"}}>Azaleas</span> collection is the first clothing drop for C.T.JR, intending to set our tone using premium quality materials, embroidery, and prints. <span style={{"font-family": "Graphik-Regular Italic"}}>Azaleas</span> will be designed in-house in order to establish the C.T.JR flavour from the ground. <br/><br/>Azaleas is inspired by the 'Azaleas' background of our NFT collection. The focus for this collection is light-colored cozy essentials - sweat gear/trackies for the late winter and early spring seasons, with heavy material and clean designs underscoring the style. The collection will be partially CTJR NFT holder exclusive, but also include items available to the general public.
                    </InfoParagraph>
                </Scroller>
                <Footing/>

            </>
                :
            <Container>
                {getHeader()}
                <DecorationHolder>
                    Collection I: Azaleas // sketchbook <br/> DL THE ARCHITECT <br/> 1.0.1.4 // 02-22
                </DecorationHolder>
                <ScrollerLineHidden/>
                <Scrapbook>
                    <ScrapPage src={leftPageItems[leftPageIndex]} onClick={() => handleScrapPageClick(true)}/>
                    <ScrapPage src={rightPageItems[rightPageIndex]} onClick={() => handleScrapPageClick(false)}/>
                </Scrapbook>
            </Container>
        }
        <SideBar>
            <SideBarTitle onClick={() => setInfoSelected(false)}>C. T. JR Apparel</SideBarTitle>
            <SideBarLine/>
            <SideBarItem onClick={() => setInfoSelected(true)}>info <span style={{"font-size": "calc(7px + 0.6vw)"}}>{'\u2191'}</span></SideBarItem>
            <A href="https://instagram.com/crashtestjoyride">
                <SideBarItem>instagram <span style={{"font-size": "calc(6px + 0.6vw)"}}>{'\u2197'}</span></SideBarItem>
            </A>
            <SideBarItem>shop (at launch) <span style={{"font-size": "calc(6px + 0.6vw)"}}>{'\u2197'}</span></SideBarItem>
            <Link to="/">
                {infoSelected ? <LogoHidden/> : <Logo/>}
            </Link>

        </SideBar>
        <Footing/>
    </Holder>
    )
}

export default Joyride;