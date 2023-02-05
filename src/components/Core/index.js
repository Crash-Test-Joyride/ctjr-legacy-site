import { Container, ContentBlock, P1, P2, P3, IconHolder, TwitterIcon, 
         DiscordIcon, A, BoldedSpan} from './CoreElements'

const Core = () => {
    return (
        <>
            <Container>
                <ContentBlock id="about">
                    <P2>The <BoldedSpan>JOYRIDE</BoldedSpan> is an art collection of 4,444 ultra HD NFTs, hand drawn exclusively by DL THE ARCHITECT in Brooklyn, New York.</P2>
                    <P2>We're inspired by the things and people we like from the modern and contemporary worlds. In this collection, DL emphasizes both the uniqueness of each image and the overall feel of the collection as a single art piece.</P2>
                    <P2>Heavy lines and vivid colors saturate our art with a boldness as strong as our message: be yourself against all odds.</P2>
                    <P3>Hello, you fool, I love you<br/>c'mon join the <BoldedSpan>JOYRIDE</BoldedSpan></P3>
                    <IconHolder id="bottom">
                        <A href="https://twitter.com/CrashTestNFT"><TwitterIcon/></A>
                        <A href="https://discord.com/invite/GCXhxkswC6"><DiscordIcon/></A>
                    </IconHolder>
                </ContentBlock>
            </Container>            
        </>
    )
}

export default Core;