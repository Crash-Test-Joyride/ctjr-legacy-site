import { React, useState, createRef } from "react";
import { GalleryHolder, CatSelector, Cat, CatSelected, MyImageGallery, GalleryDescriptionHolder, DescriptionHolder, AssetTitle, AssetDescription } from './GalleryElements'
import {names, descriptions, counts} from './galleryData';
import "../../styles/scss/image-gallery.scss";
import {sampleImages, backgrounds, models, clothing, symbols, trims, eyes, hats, glasses, accents, foregrounds, jewelry, noses, legends} from './galleryData';

export const AssetGallery = () => {
    const [activeCat, setActiveCat] = useState("samples");
    const [index, setIndex] = useState(0);
  
    var ref = createRef();
  
    function handleClick(cat) {
      setIndex(0);
      setActiveCat(cat);
    }
  
    function handleSlide(currentIndex) {
      setIndex(currentIndex);
    }
  
    function getItems(cat) {
      switch(cat) {
        case "samples":
          return sampleImages;
        case "backgrounds":
          return backgrounds;
        case "clothing":
          return clothing;
        case "models":
          return models;
        case "symbols":
          return symbols;
        case "trims":
          return trims;
        case "eyes":
          return eyes;
        case "hats":
          return hats;
        case "glasses":
            return glasses;
        case "accents":
            return accents;
        case "jewelry":
          return jewelry;
        case "noses":
          return noses;
        case "foregrounds":
          return foregrounds;
        case "legends":
          return legends;
        default:
            return sampleImages;
      }
    }

    function renderCat(cat) {
        let lowerCaseCat = cat.toLowerCase();
        if (lowerCaseCat === "rings 'n things") lowerCaseCat = "jewelry"
        if (activeCat === lowerCaseCat) {
          return (<CatSelected onClick={() => handleClick(lowerCaseCat)}>{cat}</CatSelected>)
        } else {
          return (<Cat onClick={() => handleClick(lowerCaseCat)}>{cat}</Cat>)
        }
    }

    function getAssetPercent() {
        if (["legends", "samples"].includes(activeCat)) {
        return ""
        } else {
        return `(${((counts[activeCat][index] / 4444) * 100).toFixed(1)}%)`
        }
    }

    return (
        <>
            <CatSelector>
                {renderCat("Samples")}
                {renderCat("Backgrounds")}
                {renderCat("Clothing")}
                {renderCat("Models")}
                {renderCat("Symbols")}
                {renderCat("Trims")}
                {renderCat("Eyes")}
                {renderCat("Hats")}
                {renderCat("Glasses")}
                {renderCat("Accents")}
                {renderCat("Rings 'n Things")}
                {renderCat("Noses")}
                {renderCat("Foregrounds")}
                {renderCat("Legends")}
        </CatSelector>
        <GalleryDescriptionHolder>
            <GalleryHolder key={activeCat}>
            <MyImageGallery ref={ref} items={getItems(activeCat)} showFullscreenButton={false} onSlide={handleSlide.bind(this)} lazyLoad={true}/>
            </GalleryHolder>
            <DescriptionHolder >
            <AssetTitle>{names[activeCat][index]} {getAssetPercent()}</AssetTitle>
            <AssetDescription>{descriptions[activeCat][index]}</AssetDescription>
            </DescriptionHolder>
        </GalleryDescriptionHolder>
        </>

    )
}