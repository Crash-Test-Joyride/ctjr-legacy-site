import { React, useState } from "react";
import { Container } from './GalleryElements'
import Footing from '../Footer'
import { AssetGallery } from "./AssetGallery";

const Gallery = () => {

  return (
      <Container>
        <AssetGallery/>
        <Footing/>
      </Container>
  )
}

export default Gallery;