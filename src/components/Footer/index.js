import { Footer, Logo, PageContainer, PageLinkButton, PageLinkButtonWhite } from './FooterElements'
import { Link } from "react-router-dom";

const Footing = ({whiteTrim=false, showLogo=true}) => {
    return (
        <Footer>
            <Link to="/" style={{opacity: showLogo ? 1 : 0}}>
                <Logo/>
            </Link>
            <PageContainer>
                <Link style={{"textDecoration": "none"}} to="/">
                    {whiteTrim ? <PageLinkButtonWhite>HOME</PageLinkButtonWhite> : <PageLinkButton>HOME</PageLinkButton>}
                </Link>
                <Link style={{"textDecoration": "none"}} to="/lounge">
                    {whiteTrim ? <PageLinkButtonWhite>LOUNGE</PageLinkButtonWhite> : <PageLinkButton>LOUNGE</PageLinkButton>}
                </Link>
                <Link style={{"textDecoration": "none"}} to="/gallery">
                    {whiteTrim ? <PageLinkButtonWhite>GALLERY</PageLinkButtonWhite> : <PageLinkButton>GALLERY</PageLinkButton>}
                </Link>
                <a style={{"textDecoration": "none"}} href="https://shop.crashtestjoyride.com">
                    {whiteTrim ? <PageLinkButtonWhite>MERCH</PageLinkButtonWhite> : <PageLinkButton>MERCH</PageLinkButton>}
                </a>
            </PageContainer>
        </Footer>
    )
}

export default Footing;