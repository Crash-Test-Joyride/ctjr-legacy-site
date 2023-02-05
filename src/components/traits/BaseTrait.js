import styled from 'styled-components';

import myBox300x300 from '../../images/dragAndPlay/BOX-300X300.png'

export const baseTrait = styled.div`
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  cursor: grab;
  filter: grayscale(100%);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;

  &:hover {
    filter: grayscale(0%);
  }
`

export const baseBox = styled.div`
    //border: 1px solid #aaa;
    position: absolute;
`

export const BoxImage = styled.img`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  z-index: -1;
`
BoxImage.defaultProps = {
  src: myBox300x300,
};