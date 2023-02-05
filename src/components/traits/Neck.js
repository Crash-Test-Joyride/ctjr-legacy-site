import styled from "styled-components";
import { baseTrait, baseBox } from './BaseTrait';

import neck1 from '../../images/dragAndPlay/POLY_NECK.png'
import neck2 from '../../images/dragAndPlay/GRASS_NECK.png'

const neck = styled(baseTrait)`
  width: 3.13vw;
  height: 4.17vw;
  z-index: 5;
  margin: 0.69vw;

  @media screen and (max-width: 450px) {
    width: 5.48vw;
    height: 7.30vw;
    margin: 1.21vw;
  }
`
const neckBox = styled(baseBox)`
    width: 4.51vw;
    height: 5.55vw;

    @media screen and (max-width: 450px) {
      width: 7.89vw;
      height: 9.71vw;
    }
`

//########################################################################################################################
export const Neck1 = styled(neck)`
  background-image: url(${neck1});
  position: absolute;
`
export const Neck1Box = styled(neckBox)`
    top: 29%;
    left: 28%;

    @media screen and (max-width: 450px) {
      top: 54%;
      left: 20%;
    }
`
//########################################################################################################################
export const Neck2 = styled(neck)`
  background-image: url(${neck2});
  position: absolute;
`
export const Neck2Box = styled(neckBox)`
    top: 69%;
    left: 69%;

    @media screen and (max-width: 450px) {
      top: 19%;
      left: 67%;
    }
`