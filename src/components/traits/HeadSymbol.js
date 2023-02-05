import styled from "styled-components";
import { baseTrait, baseBox } from './BaseTrait';

import headsymbol1 from '../../images/dragAndPlay/HEADSYMBOL_POLY.png'

const headsymbol = styled(baseTrait)`
  width: 1.8vw;
  height: 3vw;
  z-index: 5;
  margin-top: 0.83vw;
  margin-bottom: 0.56vw;
  margin-left: 0.56vw;
  margin-right: 0.28vw;

  @media screen and (max-width: 450px) {
      width: 3.15vw;
      height: 5.25vw;
      margin-top: 1.45vw;
      margin-bottom: 0.98vw;
      margin-left: 0.98vw;
      margin-right: 0.49vw;
    }  
`
const headsymbolBox = styled(baseBox)`
    width: 3vw;
    height: 4vw;

    @media screen and (max-width: 450px) {
      width: 5.25vw;
      height: 7vw;
    }
`
//########################################################################################################################
export const Headsymbol1 = styled(headsymbol)`
  background-image: url(${headsymbol1});
  position: absolute;
`
export const Headsymbol1Box = styled(headsymbolBox)`
    top: 67%;
    left: 75%;

    @media screen and (max-width: 450px) {
      top: 20%;
      left: 27%;
    }
`
//########################################################################################################################