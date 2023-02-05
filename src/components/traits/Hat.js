import styled from "styled-components";
import { baseTrait, baseBox } from './BaseTrait';

import hat2 from '../../images/dragAndPlay/PANEL_MONO.png'
import hat3 from '../../images/dragAndPlay/CREAM_BUCKET.png'
import hat6 from '../../images/dragAndPlay/DENIM_STRAPBACK.png'
import hat7 from '../../images/dragAndPlay/HAT7.png'
import hat13 from '../../images/dragAndPlay/RAINBOW_VOMIT.png'

const hat = styled(baseTrait)`
  z-index: 11;
`
//########################################################################################################################
export const Hat2 = styled(hat)`
  background-image: url(${hat2});
  position: absolute;
`
export const Hat2Box = styled(baseBox)`
    top: 71%;
    left: 80%;
    width: 10.42vw;
    height: 4.17vw;

    @media screen and (max-width: 450px) {
      width: 18.235vw;
      height: 7.30vw;
      top: 62%;
      left: 70%;
    }
`
//########################################################################################################################
export const Hat3 = styled(hat)`
  background-image: url(${hat3});
  position: absolute;
`
export const Hat3Box = styled(baseBox)`
    top: 46%;
    left: 17%;
    width: 12.8vw;
    height: 6.25vw;

    @media screen and (max-width: 450px) {
      width: 22.4vw;
      height: 10.94vw;
      top: 65.5%;
      left: 3%;
    }
`
//########################################################################################################################;
export const Hat6 = styled(hat)`
  background-image: url(${hat6});
  position: absolute;
`
export const Hat6Box = styled(baseBox)`
    top: 6.5%;
    left: 39%;
    width: 14.24vw;
    height: 4.86vw;

    @media screen and (max-width: 450px) {
      width: 24.92vw;
      height: 8.505vw;
      top: 12%;
      left: 28%;
    }
`
//########################################################################################################################
export const Hat7 = styled(hat)`
  background-image: url(${hat7});
  position: absolute;
  z-index: 12;
`
export const Hat7Box = styled(baseBox)`
    top: 30%;
    left: 2%;
    width: 10.76vw;
    height: 8.68vw;

    @media screen and (max-width: 450px) {
      width: 18.81vw;
      height: 15.19vw;
      top: 37%;
    }
`
//########################################################################################################################
export const Hat13 = styled(hat)`
  background-image: url(${hat13});
  position: absolute;

  width: 7.4vw;
  height: 9.6vw;
  margin: 0.83vw;

  @media screen and (max-width: 450px) {
      width: 12.95vw;
      height: 16.8vw;
      margin: 1.45vw;
    }
`
export const Hat13Box = styled(baseBox)`
    top: 39%;
    left: 68%;
    width: 9.06vw;
    height: 11.26vw;

    @media screen and (max-width: 450px) {
      width: 15.855vw;
      height: 19.705vw;
      top: 35%;
      left: 82%;
    }
`
//########################################################################################################################
//########################################################################################################################
