import styled from "styled-components";
import { baseTrait, baseBox } from './BaseTrait';

import bodysymbol1 from '../../images/dragAndPlay/BODYSYMBOL_POLY.png'

const bodysymbol = styled(baseTrait)`
  width: 1.67vw;
  height: 1.67vw;
  margin-top: 0.88vw;
  margin-bottom: 0.56vw;
  margin-left: 0.79vw;
  margin-right: 0.79vw;
  z-index: 2;

  @media screen and (max-width: 450px) {
      width: 2.92vw;
      height: 2.92vw;
      margin-top: 1.54vw;
      margin-bottom: 0.98;
      margin-left: 1.38vw;
      margin-right: 1.38vw;
    }
`

const bodysymbolBox = styled(baseBox)`
    width: 3.25vw;
    height: 3.11vw;

    @media screen and (max-width: 450px) {
      width: 5.686vw;
      height: 5.44vw;
    }
`
//########################################################################################################################
export const Bodysymbol1 = styled(bodysymbol)`
  background-image: url(${bodysymbol1});
  position: absolute;
`

export const Bodysymbol1Box = styled(bodysymbolBox)`
    top: 76%;
    left: 25%;

    @media screen and (max-width: 450px) {
      top: 30%;
      left: 77%;
    }
`
//########################################################################################################################