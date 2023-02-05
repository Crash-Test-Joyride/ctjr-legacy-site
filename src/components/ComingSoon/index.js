import { Container, Image, Span} from './ComingSoonElements'
import Gif from '../../images/irl_title.gif';
import CounterSection from '../Counter';
import Countdown from "react-countdown";

const startDate = new Date(1657074600000);

const renderCounter = ({ days, hours, minutes, seconds, milliseconds }) => {
    return (
        <CounterSection days={days} hours={hours} minutes={minutes} seconds={seconds} milliseconds={milliseconds}/>
    );
};

const ComingSoon = () => {

    return (
    <>
        <Container>
            <Image src={Gif}/>
            <Countdown
                date={startDate}
                key={startDate.getTime()}
                renderer={renderCounter}
            />
        </Container>            
    </>
    )
}

export default ComingSoon;