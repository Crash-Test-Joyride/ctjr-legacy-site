import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const MyImageGallery = styled(ImageGallery)`
`

export const Container = styled.div`
    width: 100%;
    padding-top: 75px;
    padding-bottom: 100px;
    background-color: #e7e8ec;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    @media screen and (max-width: 450px) {
      padding-top: 70px;
      padding-bottom: 70px;
  }
`

export const GalleryDescriptionHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 10;
`

export const DescriptionHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-left: 10vw;
  max-width: 20vw;

  @media screen and (max-width: 1050px) {
    margin-top: 80px;
    align-self: center;
    margin-left: 5px;
    max-width: 290px;
  }

  @media screen and (max-width: 450px) {
    margin-top: 70px;
    max-width: 190px;
  }
`

export const AssetTitle = styled.span`
  font-family: 'Graphik-Medium';
  font-size: 20px;

  @media screen and (max-width: 1050px) {
    font-size: 16px;
    width: 290px;
  }

  @media screen and (max-width: 450px) {
    font-size: 12px;
    width: 190px;
  }
`

export const AssetDescription = styled.span`
  margin-top: 10px;
  font-family: 'Graphik-Light Italic';
  font-size: 16px;

  @media screen and (max-width: 1050px) {
    font-size: 12px;
    width: 290px;
  }

  @media screen and (max-width: 450px) {
    margin-top: 5px;
    font-size: 10px;
    width: 190px;
  }
`

export const GalleryHolder = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 550px;
    height: 550px;
    animation: ${fadeIn} 1.5s ease-in;

  @media screen and (max-width: 2450px) {
    width: 500px;
    height: 500px;
  }

  @media screen and (max-width: 2100px) {
    width: 450px;
    height: 450px;
  }

  @media screen and (max-width: 1750px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: 1400px) {
    width: 350px;
    height: 350px;
  }

  @media screen and (max-width: 1050px) {
    position: inherit;
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 450px) {
    width: 200px;
    height: 200px;
  }
`

export const CatSelector = styled.div`
  display: flex; // TODO: change this to grid with 2 rows
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
  width: 1000px;

  @media screen and (max-width: 1400px) {
    width: 900px;
  }

  @media screen and (max-width: 1050px) {
    width: 700px;
  }

  @media screen and (max-width: 450px) {
    width: 350px;
  }
`

export const Cat = styled.button`
  font-family: 'Inconsolata';
  font-size: 20px;
  color: #000;
  border: none;
  margin-left: 18px;
  margin-right: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #e7e8ec;
  cursor: pointer;

  &:hover {
    background-color: #fd7d34;
  }

  @media screen and (max-width: 1050px) {
    font-size: 16px;
  }

  @media screen and (max-width: 450px) {
    font-size: 12px;
    margin: 8px;
  }
`

export const CatSelected = styled.button`
  font-family: 'Inconsolata';
  font-size: 20px;
  color: #000;
  border: none;
  margin-left: 18px;
  margin-right: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #fd7d34;
  cursor: pointer;

  @media screen and (max-width: 1050px) {
    font-size: 16px;
  }

  @media screen and (max-width: 450px) {
    font-size: 12px;
    margin: 8px;
  }
`