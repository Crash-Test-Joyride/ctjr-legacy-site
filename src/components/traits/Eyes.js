
import styled from "styled-components";
import { baseTrait, baseBox } from './BaseTrait';

import eyes1 from '../../images/dragAndPlay/^^.png'
import eyes2 from '../../images/dragAndPlay/GROGGY.png'
import eyes3 from '../../images/dragAndPlay/DOLLARS.png'

const eyes = styled(baseTrait)`
  width: 5.27vw;
  height: 2.78vw;
  z-index: 6;
  margin: 0.83vw;

  @media screen and (max-width: 450px) {
      width: 9.22vw;
      height: 4.865vw;
      margin: 1.45vw;
    }
`
const eyesBox = styled(baseBox)`
    width: 6.93vw;
    height: 4.41vw;

    @media screen and (max-width: 450px) {
      width: 12.128vw;
      height: 7.718vw;
    }
`
//########################################################################################################################
export const Eyes1 = styled(eyes)`
  background-image: url(${eyes1});
  position: absolute;
`

export const Eyes1Box = styled(eyesBox)`
    top: 6%;
    left: 15%;

    @media screen and (max-width: 450px) {
      top: 14%;
      left: 10%;
    }
`
//########################################################################################################################
export const Eyes2 = styled(eyes)`
  background-image: url(${eyes2});
  position: absolute;
`
export const Eyes2Box = styled(eyesBox)`
    top: 6%;
    left: 31%;

    @media screen and (max-width: 450px) {
      top: 19%;
      left: 38%;
    }
`
//########################################################################################################################
export const Eyes3 = styled(eyes)`
  background-image: url(${eyes3});
  position: absolute;
`

export const Eyes3Box = styled(eyesBox)`
    top: 29%;
    left: 85%;

    @media screen and (max-width: 450px) {
      top: 23%;
      left: 83%;
    }
`