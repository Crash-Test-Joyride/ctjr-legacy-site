import styled from "styled-components";
import { baseTrait, baseBox } from './BaseTrait';

import nose from '../../images/dragAndPlay/NOSE.png'

export const Nose = styled(baseTrait)`
  width: 0.9vw;
  height: 1.04vw;
  margin-top: 1vw;
  margin-bottom: 0.28vw;
  margin-left: 0.89vw;
  margin-right: 0.89vw;
  z-index: 5;
  background-image: url(${nose});
  cursor: grab;
  position: absolute;

  @media screen and (max-width: 450px) {
    width: 1.575vw;
    height: 1.82vw;
    margin-top: 1.75vw;
    margin-bottom: 0.49vw;
    margin-left: 1.56vw;
    margin-right: 1.56vw;
  }
`
export const NoseBox = styled(baseBox)`
  left: 63%;
  top: 17%;
  width: 2.68vw;
  height: 2.32vw;

  @media screen and (max-width: 450px) {
    width: 4.69vw;
    height: 4.06vw;
    top: 68%;
    left: 40%;
  }
`