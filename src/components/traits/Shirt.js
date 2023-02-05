import styled from "styled-components";
import { baseTrait, baseBox } from './BaseTrait';

import shirt2 from '../../images/dragAndPlay/BLUE_HOODIE.png'
import shirt4 from '../../images/dragAndPlay/SNOW_WHITE_BUBBLE.png'
import shirt5 from '../../images/dragAndPlay/FOREST_TURTLE.png'

const shirt = styled(baseTrait)`
  z-index: 2;
`
//########################################################################################################################
export const Shirt2 = styled(shirt)`
  background-image: url(${shirt2});
  position: absolute;
  z-index: 8;
`
export const Shirt2Box = styled(baseBox)`
    width: 11.18vw;
    height: 11.5vw;
    top: 18%;
    left: 16%;

    @media screen and (max-width: 450px) {
      width: 19.565vw;
      height: 20.125vw;
      top: 21%;
      left: 4%;
    }
`
//########################################################################################################################
export const Shirt4 = styled(shirt)`
  background-image: url(${shirt4});
  position: absolute;
  z-index: 9;
`
export const Shirt4Box = styled(baseBox)`
    width: 11.60vw;
    height: 10.76vw;
    top: 60.5%;
    left: 11%;

    @media screen and (max-width: 450px) {
      width: 20.3vw;
      height: 18.83vw;
      top: 74%;
      left: 30%;
    }
`
//########################################################################################################################
export const Shirt5 = styled(shirt)`
  background-image: url(${shirt5});
  position: absolute;
  z-index: 7;
  width: 10.625vw;
  height: 12.78vw;
  margin: 0.28vw;

  @media screen and (max-width: 450px) {
      width: 18.59vw;
      height: 22.365vw;
      margin: 0.49vw;
    }
`
export const Shirt5Box = styled(baseBox)`
    width: 11.185vw;
    height: 13.34vw;
    top: 6%;
    left: 68%;

    @media screen and (max-width: 450px) {
      width: 19.57vw;
      height: 23.345vw;
      top: 3%;
      left: 56%;
    }
`
//########################################################################################################################


