import styled from "styled-components";
import { baseTrait, baseBox } from './BaseTrait';

import glasses1 from '../../images/dragAndPlay/GLASSES1.png'
import glasses2 from '../../images/dragAndPlay/GLASSES2.png'
import glasses3 from '../../images/dragAndPlay/GLASSES3.png'
import glasses4 from '../../images/dragAndPlay/GLASSES4.png'

const glasses = styled(baseTrait)`
  width: 7.36vw;
  height: 3.06vw;
  z-index: 12;
  margin: 0.83vw;

  @media screen and (max-width: 450px) {
      width: 12.88vw;
      height: 5.355vw;
      margin: 1.45vw;
    }
`
const glassesBox = styled(baseBox)`
    width: 9.02vw;
    height: 4.72vw;

    @media screen and (max-width: 450px) {
      width: 15.875vw;
      height: 8.26vw;
    }
`
//########################################################################################################################
export const Glasses1 = styled(glasses)`
  background-image: url(${glasses1});
  position: absolute;
  z-index: 7;
`
export const Glasses1Box = styled(glassesBox)`
    top: 64%;
    left: 24%;

    @media screen and (max-width: 450px) {
      display: none;
      top: 24.5%;
      left: 51%;
    }
`
//########################################################################################################################
export const Glasses2 = styled(glasses)`
  background-image: url(${glasses2});
  position: absolute;
  z-index: 7;
`
export const Glasses2Box = styled(glassesBox)`
    top: 3%;
    left: 55%;

    @media screen and (max-width: 450px) {
      top: 5%;
      left: 36%;
    }
`
//########################################################################################################################
export const Glasses3 = styled(glasses)`
  background-image: url(${glasses3});
  position: absolute;
  z-index: 7;
`
export const Glasses3Box = styled(glassesBox)`
    top: 47%;
    left: 78.5%;

    @media screen and (max-width: 450px) {
      top: 70%;
      left: 62%;
    }
`
//########################################################################################################################
export const Glasses4 = styled(glasses)`
  background-image: url(${glasses4});
  position: absolute;
  z-index: 7;
  margin-top: 0.97vw;
  width: 5.56vw;

  @media screen and (max-width: 450px) {
      width: 9.73vw;
    }
`
export const Glasses4Box = styled(glassesBox)`
    top: 4%;
    left: 23%;
    width: 7.22vw;

    @media screen and (max-width: 450px) {
      width: 12.635vw;
      top: 4%;
      left: 21%;
    }
`
//########################################################################################################################