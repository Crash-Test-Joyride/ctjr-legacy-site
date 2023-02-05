import styled from "styled-components";
import { baseTrait, baseBox } from './BaseTrait';

import torso1 from '../../images/dragAndPlay/CUSTARD_BODY.png'
import torso5 from '../../images/dragAndPlay/VIRAL_BODY.png'

const torso = styled(baseTrait)`
  width: 9.72vw;
  height: 8.33vw;
  z-index: 1;
  margin: 0.28vw;

  @media screen and (max-width: 450px) {
    width: 17.01vw;
    height: 14.58vw;
    margin: 0.49vw;
  }
`
const torsoBox = styled(baseBox)`
    width: 10.28vw;
    height: 8.89vw;

    @media screen and (max-width: 450px) {
      width: 17.99vw;
      height: 15.56vw;
    }
`
//########################################################################################################################
export const Torso1 = styled(torso)`
  background-image: url(${torso1});
  position: absolute;
`
export const Torso1Box = styled(torsoBox)`
    top: 7%;
    left: 84%;

    @media screen and (max-width: 450px) {
      top: 49%;
      left: 80%;
    }
`
//########################################################################################################################
export const Torso5 = styled(torso)`
  background-image: url(${torso5});
  position: absolute;
`
export const Torso5Box = styled(torsoBox)`
    top: 8%;
    left: 1%;

    @media screen and (max-width: 450px) {
      top: 2%;
      left: 1%;
    }
`
