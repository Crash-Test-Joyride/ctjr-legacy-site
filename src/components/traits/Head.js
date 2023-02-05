import styled from "styled-components";
import { baseTrait, baseBox } from './BaseTrait';

import head1 from '../../images/dragAndPlay/VIRAL_HEAD.png'
import head6 from '../../images/dragAndPlay/CUSTARD_HEAD.png'


const head = styled(baseTrait)`
    z-index: 4;
    width: 8.33vw;
    height: 12.15vw;
    margin-top: 0.69vw;
    margin-bottom: 0.35vw;
    margin-left: 0.35vw;
    margin-right: 0.35vw;

    @media screen and (max-width: 450px) {
      width: 14.58vw;
      height: 21.26vw;
      margin-top: 1.21vw;
      margin-bottom: 0.61vw;
      margin-left: 0.61vw;
      margin-right: 0.61vw;
    }
`
const headBox = styled(baseBox)`
    width: 9.03vw;
    height: 13.19vw;

    @media screen and (max-width: 450px) {
      width: 15.80vw;
      height: 23.08vw;
    }
`
//########################################################################################################################
export const Head1 = styled(head)`
  background-image: url(${head1});
  position: absolute;
`
export const Head1Box = styled(headBox)`
    top: 53%;
    left: 1%;

    @media screen and (max-width: 450px) {
      top: 49%;
    }
`
//########################################################################################################################
export const Head6 = styled(head)`
  background-image: url(${head6});
  position: absolute;
`
export const Head6Box = styled(headBox)`
    top: 41%;
    left: 88.5%;

    @media screen and (max-width: 450px) {
      top: 6%;
      left: 82%;
    }
`
//########################################################################################################################