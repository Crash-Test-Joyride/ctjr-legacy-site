import styled from 'styled-components';
  
const WrapperStyled = styled.div`
  align-self: center;
  justify-content: center;
  display: flex;
  margin-top: 10px;

  @media screen and (max-width: 450px) {
      margin-bottom: 10px;
  }
`;
  
const CounterStyled = styled.div`
  font-size: 22px;
  letter-spacing: 0.25vw;
  text-align: center;
  z-index: 999;

  @media screen and (max-width: 900px) {
      font-size: 12px;
  }
`;

const CounterStyledMillis = styled.div`
  color: #777;
  font-size: 22px;
  letter-spacing: 0.25vw;
  text-align: center;
  z-index: 999;
  width: 25px;

  @media screen and (max-width: 900px) {
      font-size: 12px;
  }
`;

// components
const Counter = ({ displayValue, colon=false, dot=false}) => (
  <CounterStyled>
    {displayValue}{dot ? '.' : (colon ? ':' : '')}
  </CounterStyled>
);

const CounterMillis = ({ displayValue }) => (
  <CounterStyledMillis>
    {displayValue}
  </CounterStyledMillis>
);

export const CounterSection = ({days, hours, minutes, seconds, milliseconds}) => {
    function numberWrapper(number) {
      if (number <= 9) {
        return "0" + number;
      } else {
        return number.toString();
      }
    }

    return (
        <div>
          <WrapperStyled>
            <Counter displayValue={days} colon={true} />
            <Counter displayValue={numberWrapper(hours)} colon={true} />
            <Counter displayValue={numberWrapper(minutes)} colon={true}/>
            <Counter displayValue={numberWrapper(seconds)} dot={false}/>
            {/* <CounterMillis displayValue={milliseconds}/> */}
          </WrapperStyled>
        </div>
    )
}