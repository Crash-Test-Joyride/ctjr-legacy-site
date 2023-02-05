import {React, useState} from 'react';
import { CreateButton, MobileBannerImage, Playground, BannerGenerator, BannerGeneratorRiders, BannerTitleHolder, 
    BannerTitle, BannerTitleLine, NFTGallery, NFTImage, NFTImageHolder, NFTImageName, GeneratorHolder, 
    MySelect, ColBox, RowBox, CreateButtonHolder, BannerImageContainer, MyPulseLoader, BannerTitleLineShort, 
    DownloadButtonHolder, PickerTitle, A, A2, MyTwitterSelect, SelectorColBox, TwitterCreateButtonHolder, 
    TwitterDownloadButtonHolder, TwitterBannerContainer, MobileBannerRowBox, Input, RadioLabel} 
    from './LoungeElements.js';
import { createMobileBanner, createTwitterBanner } from './bannerGenerator.js'
import metadata from '../../json/metadata.json';

const awsCollectionBaseURL = 'https://ctjr.s3.us-west-2.amazonaws.com/images/';
const options =
[
    {label: 'Galaxy S10', value: 'galaxy_s10'},
    {label: 'Galaxy S10E', value: 'galaxy_s10e'},
    {label: 'Galaxy S20', value: 'galaxy_s20'},
    {label: 'Galaxy S21', value: 'galaxy_s21'},
    {label: 'Galaxy S21 5G', value: 'galaxy_s21_5g'},
    {label: 'Galaxy S8', value: 'galaxy_s8'},
    {label: 'Galaxy Note 10', value: 'galaxy_note_10'},
    {label: 'Galaxy Note 10 Plus', value: 'galaxy_note_10_plus'},
    {label: 'Galaxy Note 9', value: 'galaxy_note_9'},
    {label: 'IPhone 12 Max', value: 'iphone_12_pro_max'},
    {label: 'IPhone 12', value: 'iphone_12_pro'},
    {label: 'IPhone 7', value: 'iphone_7'},
    {label: 'IPhone 7 Plus', value: 'iphone_7_plus'},
    {label: 'IPhone XR', value: 'iphone_xr'},
    {label: 'IPhone 8', value: 'iphone_8'},
    {label: 'IPhone 8 Plus', value: 'iphone_8_plus'},
    {label: 'Pixel 5', value: 'pixel_5'},
    {label: 'Pixel 5 XL', value: 'pixel_5_xl'},
    {label: 'Pixel 4', value: 'pixel_4'},
    {label: 'Pixel 4 XL', value: 'pixel_4_xl'},
    {label: 'Pixel 2', value: 'pixel_2'},
    {label: 'Pixel 2 XL', value: 'pixel_2_xl'}
];

function getBackgroundOptions(selectedRiders) {
    let backgrounds = ['CTJR']
    let backgroundOptions = [{'label': 'CTJR', 'value': 'CTJR'}];
    for (const rider of selectedRiders) {
        const bg = metadata[Number(rider.value)].attributes[0].value;
        if (!backgrounds.includes(bg)) {
            backgroundOptions.push({'label': bg, 'value': bg});
            backgrounds.push(bg);
        }
    }
    return backgroundOptions;
}

export const GeneratorPlayground = ({selectedMenuItem, ownedRiders}) => {
    const [mobileBgSelectKey, setMobileBgSelectKey] = useState(Math.random());
    const [twitterBgSelectKey, setTwitterBgSelectKey] = useState(Math.random());
    const [backgroundOptions, setBackgroundOptions] = useState([]);
    const [bannerSrcUrl, setBannerSrcUrl] = useState();
    const [isGenerating, setIsGenerating] = useState(false);
    const [generateBannerButtonColor, setGenerateBannerButtonColor] = useState("#89b0aa");
    const [downloadButtonColor, setDownloadButtonColor] = useState("#89b0aa")
    const [selectedMobileChoice, setSelectedMobileChoice] = useState(null);
    const [selectedRiders, setSelectedRiders] = useState([]);
    const [selectedBackground, setSelectedBackground] = useState(null);
    const [isBannerLoaded, setIsBannerLoaded] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);

    const handleMobileSelectChange = (selectedChoice) => {
        setSelectedMobileChoice(selectedChoice);
    }

    const handleRiderSelectChange = (selectedChoice) => {
        if (Array.isArray(selectedChoice)) {
            setSelectedRiders(selectedChoice);
            const backgroundOptions = getBackgroundOptions(selectedChoice);
            setBackgroundOptions(backgroundOptions);
            if (selectedBackground && !backgroundOptions.map((obj) => obj.label).includes(selectedBackground.label)) {
                setSelectedBackground(null);
                setMobileBgSelectKey(Math.random());
                setTwitterBgSelectKey(Math.random());
            }
        } else {
            setSelectedRiders([selectedChoice]);
            setBackgroundOptions(getBackgroundOptions([selectedChoice]));
            setSelectedBackground(null);
            setMobileBgSelectKey(Math.random());
            setTwitterBgSelectKey(Math.random());
        }
    }

    const handleBackgroundSelectChange = (selectedChoice) => {
        setSelectedBackground(selectedChoice);
    }

    function handleGenerateMouseDown () {
        setGenerateBannerButtonColor("#9b0b04");
    }

    function handleGenerateMouseUp(mouseUp) {
        setGenerateBannerButtonColor("#89b0aa");
        if (mouseUp) {
            if (selectedMenuItem === 1)
                getBannerMobile(selectedRiders[0].value, selectedBackground.value, selectedMobileChoice.value)
            else
                getBannerTwitter(selectedRiders.map((rider) => rider.value), selectedBackground.value)
        }
    }

    function handleDownloadMouseDown () {
        setDownloadButtonColor("#9b0b04");
    }

    function handleDownloadMouseUp(mouseUp) {
        setDownloadButtonColor("#89b0aa");
        if (mouseUp)
            console.log("Download")
    }
        async function getBannerMobile(id, background, phone) {
        setIsGenerating(true);
        try {
            const imageUrl = await createMobileBanner(id, phone, background)
            setBannerSrcUrl(imageUrl)
            setIsGenerating(false);
            setIsBannerLoaded(true);
        } catch (e) {
            setIsGenerating(false);
        }
    }

    async function getBannerTwitter(ids, background) {
        setIsGenerating(true);
        try {
            const imageUrl = await createTwitterBanner(ids, background, includeNumbers)
            setBannerSrcUrl(imageUrl)
            setIsGenerating(false);
            setIsBannerLoaded(true);
        } catch (e) {
            setIsGenerating(false);
        }
    }

    function getNFTImage(id) {
        return (
            <NFTImageHolder>
                <NFTImage src={`${awsCollectionBaseURL}${id}.png`}/>
                <NFTImageName> Joyrider #{id}</NFTImageName>
            </NFTImageHolder>
        )
    }

    function getJoyriderOptions() {
        let options = []
        for (const rider of ownedRiders) {
            options.push({label: `Joyrider #${rider}`, value: rider})
        }
        return options;
    }

    function getCreateButtonColor(isTwitter) {
        if (isTwitter)
            return (selectedRiders.length === 0 || !selectedBackground || isGenerating) ? '#bbb' : generateBannerButtonColor;
        else
            return (selectedRiders.length === 0 || !selectedBackground || !selectedMobileChoice || isGenerating) ? '#bbb' : generateBannerButtonColor;

    }

    function getDownloadButtonColor() {
        return (!isBannerLoaded || isGenerating) ? '#bbb' : downloadButtonColor;
    }


    return (
        <Playground>
            {selectedMenuItem >= 1 &&
                <BannerGenerator>
                    <GeneratorHolder>
                        <BannerTitleHolder>
                            <BannerTitle>{selectedMenuItem === 1 ? 'Mobile Banner Generator' : 'Twitter Banner Generator'}</BannerTitle>
                            <BannerTitleLine/>
                        </BannerTitleHolder>
                        {selectedMenuItem === 1 ?
                            <MobileBannerRowBox>
                                <ColBox>
                                    <PickerTitle>Device:</PickerTitle>
                                    <MySelect options={options} placeholder="Select Device..." onChange={handleMobileSelectChange}/>
                                    <PickerTitle>Joyrider:</PickerTitle>
                                    <MySelect options={getJoyriderOptions()} placeholder="Select Joyrider..." onChange={handleRiderSelectChange} style={{'z-index': '2'}}/>
                                    <PickerTitle>Background:</PickerTitle>
                                    <MySelect options={backgroundOptions} placeholder="Select Background..." onChange={handleBackgroundSelectChange} key={mobileBgSelectKey}/>
                                    <CreateButtonHolder>
                                        <CreateButton disabled={selectedRiders.length === 0 || !selectedBackground || !selectedMobileChoice || isGenerating} 
                                                    style={{"backgroundColor": getCreateButtonColor(false)}}
                                                    onMouseDown={() => handleGenerateMouseDown()} 
                                                    onMouseUp={() => handleGenerateMouseUp(true)} 
                                                    onMouseLeave={() => handleGenerateMouseUp(false)}>generate banner</CreateButton>
                                    </CreateButtonHolder>
                                    <A href={bannerSrcUrl} download>
                                        <DownloadButtonHolder>
                                            <CreateButton disabled={!isBannerLoaded || isGenerating}
                                                        style={{"backgroundColor": getDownloadButtonColor()}}
                                                        onMouseDown={() => handleDownloadMouseDown()} 
                                                        onMouseUp={() => handleDownloadMouseUp(true)} 
                                                        onMouseLeave={() => handleDownloadMouseUp(false)}>download</CreateButton>
                                        </DownloadButtonHolder>
                                    </A>
                                </ColBox>
                                <BannerImageContainer style={{"border": (bannerSrcUrl && !isGenerating) && 'none'}}>
                                    {isGenerating ? 
                                        <MyPulseLoader/> :
                                        <MobileBannerImage src={bannerSrcUrl} isTwitter={false}/>}
                                </BannerImageContainer>
                            </MobileBannerRowBox> :
                            <SelectorColBox>
                                <RowBox>
                                    <SelectorColBox>
                                        <PickerTitle>Joyriders:</PickerTitle>
                                        <MyTwitterSelect options={getJoyriderOptions()} placeholder="Select Joyriders..." onChange={handleRiderSelectChange} isMulti={true}/>
                                    </SelectorColBox>
                                    <SelectorColBox>
                                        <PickerTitle>Background:</PickerTitle>
                                        <MyTwitterSelect options={backgroundOptions} placeholder="Select Background..." onChange={handleBackgroundSelectChange} key={twitterBgSelectKey}/>
                                    </SelectorColBox>
                                </RowBox>
                                <RowBox>
                                    <TwitterCreateButtonHolder>
                                        <CreateButton disabled={selectedRiders.length === 0 || !selectedBackground || isGenerating} 
                                                    style={{"backgroundColor": getCreateButtonColor(true)}}
                                                    onMouseDown={() => handleGenerateMouseDown()} 
                                                    onMouseUp={() => handleGenerateMouseUp(true)} 
                                                    onMouseLeave={() => handleGenerateMouseUp(false)}>generate banner</CreateButton>
                                    </TwitterCreateButtonHolder>
                                    <A2 href={bannerSrcUrl} download>
                                        <TwitterDownloadButtonHolder>
                                            <CreateButton disabled={!isBannerLoaded || isGenerating}
                                                        style={{"backgroundColor": getDownloadButtonColor()}}
                                                        onMouseDown={() => handleDownloadMouseDown()} 
                                                        onMouseUp={() => handleDownloadMouseUp(true)} 
                                                        onMouseLeave={() => handleDownloadMouseUp(false)}>download</CreateButton>
                                        </TwitterDownloadButtonHolder>
                                    </A2>
                                </RowBox>
                                <RowBox>
                                    <Input type="radio" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)}/>
                                    <RadioLabel>include numbers in banner</RadioLabel>
                                </RowBox>
                                <TwitterBannerContainer style={{"border": (bannerSrcUrl && !isGenerating) && 'none'}}>
                                    {isGenerating ? 
                                        <MyPulseLoader/> :
                                        <MobileBannerImage src={bannerSrcUrl} isTwitter={true}/>}
                                </TwitterBannerContainer>
                            </SelectorColBox>
                        }   
                    </GeneratorHolder>
                    <BannerGeneratorRiders>
                        <BannerTitleHolder>
                            <BannerTitle>My Joyriders</BannerTitle>
                            <BannerTitleLineShort/>
                        </BannerTitleHolder>
                        <NFTGallery>
                            {ownedRiders.map(id => (
                                getNFTImage(id)
                            ))}
                        </NFTGallery>
                    </BannerGeneratorRiders>
                </BannerGenerator>
            }
        </Playground>
    )
}