import {React, useCallback, useState, useEffect, useRef} from 'react';
import { GameArea, RunningRider, JumpingRider, SlidingRider, ObstacleLow, ObstacleHigh, ScoreSpan,
         ScoreContainer, HighSpan, GameSettingsBar, SoundButton, ProfileImage, 
         HighScoresContainer, HighScoresSection, HighScoresTitle, HighScoresEntry, HighScoresEntryText,
         ProfileImageHolder, HighScoresAddressText, SoundButtonOff, PFPGallery, AzaleaRunnerContainer,
         GameDescription, GameDescriptionHolder, GameDescriptionIcon, HighScoresEntryTextBold} from './ArcadeElements';
import UIfx from 'uifx';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import RunningRiderMain from '../../images/lounge/arcade/runningrider.gif';
import RunningRiderJump from '../../images/lounge/arcade/runningrider_jump.png';
import RunningRiderSlide from '../../images/lounge/arcade/runningrider_slide.png';
import RunningRiderStand from '../../images/lounge/arcade/runningrider_stand.png';
import JumpSound from '../../sounds/jump_sound.mp3';
import EndGameSound from '../../sounds/end_game_sound.mp3';
import Guest from '../../images/lounge/arcade/guest.png';

const UP_ARROW = 38;
const DOWN_ARROW = 40;
const SPACE_BAR = 32;
const W = 87;
const S = 83;

const awsCollectionBaseURL = 'https://ctjr.s3.us-west-2.amazonaws.com/images/';
const apiRoot = process.env.REACT_APP_BACKEND_SERVER;

const jumpSound = new UIfx(JumpSound, {volume: 0.15, throttleMs: 100});
const endGameSound = new UIfx(EndGameSound, {volume: 0.15, throttleMs: 100});

var startTime = 0;
var lastObstacleTime = 0;
var timeout = 100;
var isJumping = false;
var jumpedQueued = false;
var slideQueued = false;
var isPlaying = false;
var isSoundOn = true;
var blockSpeed = 2500;
var activeHighs = [false, false, false, false, false];
var activeLows = [false, false, false, false, false];
var jumpTimeout;
var score = 0;
var obstacleTimeoutsIndex = 0;
var obstacleTimeouts = [];

export const AzaleaRunner = ({account, ownedRiders}) => {
    const [riderState, setRiderState] = useState(3); // 0 = running, 1 = jumping, 2 = sliding, 3 = dead
    const [gameOver, setGameOver] = useState(1);
    const [highObstacle0, setHighObstacle0] = useState(false);
    const [highObstacle1, setHighObstacle1] = useState(false);
    const [highObstacle2, setHighObstacle2] = useState(false);
    const [highObstacle3, setHighObstacle3] = useState(false);
    const [highObstacle4, setHighObstacle4] = useState(false);
    const [lowObstacle0, setLowObstacle0] = useState(false);
    const [lowObstacle1, setLowObstacle1] = useState(false);
    const [lowObstacle2, setLowObstacle2] = useState(false);
    const [lowObstacle3, setLowObstacle3] = useState(false);
    const [lowObstacle4, setLowObstacle4] = useState(false);
    const [selectedRider, setSelectedRider] = useState(ownedRiders.length > 0 ? ownedRiders[0] : -1)
    const [highscore, setHighscore] = useState(0);
    const [soundOn, setSoundOn] = useState(true);
    const [top5AllTime, setTop5AllTime] = useState([]);
    const [top5Daily, setTop5Daily] = useState([]);

    useInterval(function() {
        if (!isPlaying) return;
        let currTime = Date.now()
        if (isRiderHit()) {
            if (isSoundOn) endGameSound.play();
            endGame(false);
        } else {
            // set score
            score = currTime - startTime; 
            if (!score) score = 0;
            const scoreSpan = document.getElementById("scoreSpan");
            if (scoreSpan) scoreSpan.innerHTML = pad(Math.floor(score / 100), 5);

            //activate obstacle
            let isLow = Math.random() < 0.67;
            if (currTime - timeout > lastObstacleTime) {
                lastObstacleTime = currTime;
                const high = Math.max(blockSpeed - 600, 750);
                const low = Math.max(333, blockSpeed/3.5);

                timeout = Math.random() * (high - low) + low;
                if (isLow) {
                    if (!activeLows[0]) activateBlock(true, 0);
                    else if (!activeLows[1]) activateBlock(true, 1);
                    else if (!activeLows[2]) activateBlock(true, 2);
                    else if (!activeLows[3]) activateBlock(true, 3);
                    else if (!activeLows[4]) activateBlock(true, 4);
                } else {
                    if (!activeHighs[0]) activateBlock(false, 0);
                    else if (!activeHighs[1]) activateBlock(false, 1);
                    else if (!activeHighs[2]) activateBlock(false, 2);
                    else if (!activeHighs[3]) activateBlock(false, 3);
                    else if (!activeHighs[4]) activateBlock(false, 4);
                }
            }

            //adjust blockspeed
            blockSpeed = Math.max(2500 - ((currTime - startTime) / 100), 1000);
        }
    }, 25);

    function checkCollision(rider, isLow, i) {
        let obstacle;
        let id = "";
        if (isLow) {
            id = "lowObstacle" + i.toString();
        } else {
            id = "highObstacle" + i.toString();
        }

        obstacle = document.getElementById(id);
        if (!obstacle) return false;
        let riderRect = rider.getBoundingClientRect();
        let obstacleRect = obstacle.getBoundingClientRect();

        // adjust for image padding
        const widthBuffer = (riderRect.right - riderRect.left) * 0.4;
        const heightBuffer = (riderRect.bottom - riderRect.top) * 0.1;

        const riderRight = riderRect.right - widthBuffer; 
        const riderLeft = riderRect.left + widthBuffer;
        const riderTop = riderState == 2 ? riderRect.top + (heightBuffer * 9) : riderRect.top + (heightBuffer * 2); // lower top on slide

        return obstacleRect.left < riderRight && obstacleRect.right > riderLeft && obstacleRect.top < riderRect.bottom && obstacleRect.bottom > riderTop;
    }

    function isRiderHit() {
        let riderName;
        if (riderState === 0) {
            riderName = "runningRider";
        } else if (riderState === 1) {
            riderName = "jumpingRider";
        } else if (riderState === 2) {
            riderName = "slidingRider";
        } else if (riderState === 3) {
            riderName = "standingRider";
        }
        const rider = document.getElementById(riderName);
        if (!rider) return false;
        for (let i = 0; i < activeHighs.length; i++) {
            if (activeHighs[i]) {
                const hit = checkCollision(rider, false, i);
                if (hit) return true;
            }
        }
        for (let i = 0; i < activeLows.length; i++) {
            if (activeLows[i]) {
                const hit = checkCollision(rider, true, i);
                if (hit) return true;
            }
        }

        return false;
    }

    function startGame() {
        isPlaying = true;
        timeout = 100;
        blockSpeed = 2500;
        lastObstacleTime = Date.now(); 
        startTime = Date.now();
        isJumping = false;
        activeHighs = [false, false, false, false, false];
        activeLows = [false, false, false, false, false];

        setHighObstacle0(false);
        setHighObstacle1(false);
        setHighObstacle2(false);
        setHighObstacle3(false);
        setHighObstacle4(false);
        setLowObstacle0(false);
        setLowObstacle1(false);
        setLowObstacle2(false);
        setLowObstacle3(false);
        setLowObstacle4(false);
        setRiderState(0);
        setGameOver(0);
    }
    
    function postScore() {
        if (Math.floor(score / 100) > highscore) {
            setHighscore(Math.floor(score / 100));
            let payload = { address: account, riderId: selectedRider, score: Math.floor(score / 100)};
            if (account && account != '0xTest') axios.post(`${apiRoot}/postAzaleaRunnerScore`, payload);
        }
    }

    function endGame(unmounted) {
        clearTimeout(jumpTimeout);
        for (const timeout of obstacleTimeouts) {
            clearTimeout(timeout);
        }
        postScore();
        isPlaying = false;
        isSoundOn = true;
        startTime = null;
        lastObstacleTime = 0;
        timeout = 100;
        isJumping = false;
        isPlaying = false;
        score = 0;
        jumpedQueued = false;
        slideQueued = false;
        blockSpeed = 2500;
        activeHighs = [false, false, false, false, false];
        activeLows = [false, false, false, false, false];
        if (!unmounted) {
            setGameOver(1);
            setRiderState(3);
            setHighObstacle0(false);
            setHighObstacle1(false);
            setHighObstacle2(false);
            setHighObstacle3(false);
            setHighObstacle4(false);
            setLowObstacle0(false);
            setLowObstacle1(false);
            setLowObstacle2(false);
            setLowObstacle3(false);
            setLowObstacle4(false);
        }
    }

    function getJumpTime() {
        return Math.max(Math.min(blockSpeed / 3600, 0.65), 0.35);
    }

    function jump() {
        if (isJumping) {
            slideQueued = false;
            jumpedQueued = true;
            return;
        } 
        isJumping = true;
        setRiderState(1);
        if (isSoundOn) {
            jumpSound.play();
        }
        jumpTimeout = setTimeout(function() {
            setRiderState(isPlaying ? 0 : 3);
            isJumping = false;
            if (jumpedQueued) {
                jumpedQueued = false;
                jump();
            } else if (slideQueued) {
                slideQueued = false;
                slide();
            }
        }, getJumpTime() * 1000);
    }

    function slide() {
        if (isJumping) {
            jumpedQueued = false;
            slideQueued = true;
            return;
        }
        setRiderState(2);
    }

    function unslide() {
        if (isJumping) setRiderState(1);
        else if (!isPlaying) setRiderState(3);
        else setRiderState(0);
    }

    const handleKeyDown = useCallback((event) => {
        switch (event.keyCode) {
            case W:
            case UP_ARROW:
                jump();
                break;
            case S:
            case DOWN_ARROW:
                slide();
                break;
            case SPACE_BAR:
                if (!isPlaying)
                    startGame();
                break;
        }
    }, []);

    const handleKeyUp = useCallback((event) => {
        switch (event.keyCode) {
            case S:
            case DOWN_ARROW:
                unslide();
                break;
        }
    }, []);

    const arrow_keys_handler = function(e) {
        switch(e.code){
            case "ArrowUp": case "ArrowDown": case "ArrowLeft": case "ArrowRight": 
                case "Space": e.preventDefault(); break;
            default: break; // do not block other keys
        }
    };

    useEffect(() => {
        async function doFetchScores() {
            await axios.get(`${apiRoot}/azaleaRunnerScores/${account}`)
                .then(res => {
                    setTop5AllTime(res.data['allTime'] ? res.data['allTime'] : []);
                    setTop5Daily(res.data['daily'] ? res.data['daily'] : []);
                    setHighscore(res.data['userHighscore'] && res.data['userHighscore']['score'] ? res.data['userHighscore']['score'] : 0);
                    if (res.data['userHighscore']) setSelectedRider(res.data['userHighscore']['riderId'])      
            });
        }
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);
        window.addEventListener("keydown", arrow_keys_handler, false);
        doFetchScores();
        return () => {
            endGame(true);
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
            window.removeEventListener("keydown", arrow_keys_handler, false);
        };
    }, []);

    function activateBlock(isLow, index) {
        if (isLow) {
            activeLows[index] = true;
            switch (index){
                case 0:
                    setLowObstacle0(true);
                    break;
                case 1:
                    setLowObstacle1(true);
                    break;
                case 2:
                    setLowObstacle2(true);
                    break;
                case 3:
                    setLowObstacle3(true);
                    break;
                case 4:
                    setLowObstacle4(true);
                    break;
            }
        } else {
            activeHighs[index] = true;
            switch (index){
                case 0:
                    setHighObstacle0(true);
                    break;
                case 1:
                    setHighObstacle1(true);
                    break;
                case 2:
                    setHighObstacle2(true);
                    break;
                case 3:
                    setHighObstacle3(true);
                    break;
                case 4:
                    setHighObstacle4(true);
                    break;
            }
        }
        obstacleTimeouts[obstacleTimeoutsIndex++] = setTimeout(function(low, i) {
            if (low) {
                activeLows[index] = false;
                switch (index){
                    case 0:
                        setLowObstacle0(false);
                        break;
                    case 1:
                        setLowObstacle1(false);
                        break;
                    case 2:
                        setLowObstacle2(false);
                        break;
                    case 3:
                        setLowObstacle3(false);
                        break;
                    case 4:
                        setLowObstacle4(false);
                        break;
                }
            } else {
                activeHighs[index] = false;
                switch (i){
                    case 0:
                        setHighObstacle0(false);
                        break;
                    case 1:
                        setHighObstacle1(false);
                        break;
                    case 2:
                        setHighObstacle2(false);
                        break;
                    case 3:
                        setHighObstacle3(false);
                        break;
                    case 4:
                        setHighObstacle4(false);
                        break;
                }
            }
        }, blockSpeed, isLow, index);
        if (obstacleTimeoutsIndex > 9) {
            obstacleTimeoutsIndex = 0;
        }
    }

    function changeSound(on) {
        if (on) {
            setSoundOn(true);
            isSoundOn = true;
        } else {
            setSoundOn(false);
            isSoundOn = false;
        }
    }

    function getHighScoreEntry(entry) {
        return (
            <HighScoresEntry>
                <ProfileImage src={`${awsCollectionBaseURL}${entry.riderId}.png`}/>
                <HighScoresAddressText>{shortenAddress(entry.address)}</HighScoresAddressText>
                <HighScoresEntryText>{entry.score}</HighScoresEntryText>
            </HighScoresEntry>
        )
    }

    function getPFPImage(id) {
        return (
            <ProfileImageHolder onClick={() => setSelectedRider(id)}>
                <ProfileImage src={`${awsCollectionBaseURL}${id}.png`} />
            </ProfileImageHolder>
        )
    }

    return (
        <AzaleaRunnerContainer>
            <GameDescriptionHolder>
                <GameDescriptionIcon/>
                <GameDescription>
                    Azalea Runner is here for all Joyriders. Dodge azaleas and go for a high score. You must be a CTJR holder to have your score counted towards the daily and all-time leaderboards. Press <HighScoresEntryTextBold>space</HighScoresEntryTextBold> to start. Use the <HighScoresEntryTextBold>up arrow key</HighScoresEntryTextBold> to jump, and <HighScoresEntryTextBold>down arrow key</HighScoresEntryTextBold> to duck.
                </GameDescription>
            </GameDescriptionHolder>
            <GameSettingsBar>
                {soundOn ? <SoundButton onClick={() => changeSound(false)}/> : <SoundButtonOff onClick={() => changeSound(true)}/>}
                <Popup trigger={<ProfileImageHolder><ProfileImage src={selectedRider >= 0 ? `${awsCollectionBaseURL}${selectedRider}.png` : Guest}/></ProfileImageHolder>} position="left center">
                    <PFPGallery>
                        {ownedRiders.map(id => (
                            getPFPImage(id)
                        ))}
                    </PFPGallery>
                </Popup>
            </GameSettingsBar>
            <GameArea id="game">
                <ScoreContainer>
                    <HighSpan>
                        High:{pad(highscore, 5)}
                    </HighSpan>
                    <ScoreSpan id="scoreSpan">00000</ScoreSpan>
                </ScoreContainer>
                {riderState === 0 && <RunningRider id="runningRider" src={RunningRiderMain}/>}
                {riderState === 1 && <JumpingRider id="jumpingRider" jumpTime={() => getJumpTime()} src={RunningRiderJump}/>}
                {riderState === 2 && <SlidingRider id="slidingRider" src={RunningRiderSlide}/>}
                {riderState === 3 && <RunningRider id="standingRider" src={RunningRiderStand}/>}
                {!gameOver && highObstacle0 && <ObstacleHigh color="red" id='highObstacle0' isLow={false} animationTime={blockSpeed}/>}
                {!gameOver && highObstacle1 && <ObstacleHigh color="orange" id='highObstacle1' isLow={false} animationTime={blockSpeed}/>}
                {!gameOver && highObstacle2 && <ObstacleHigh color="yellow" id='highObstacle2' isLow={false} animationTime={blockSpeed}/>}
                {!gameOver && highObstacle3 && <ObstacleHigh color="pink" id='highObstacle3' isLow={false} animationTime={blockSpeed}/>}
                {!gameOver && highObstacle4 && <ObstacleHigh color="black" id='highObstacle4' isLow={false} animationTime={blockSpeed}/>}
                {!gameOver && lowObstacle0 && <ObstacleLow color="red" id='lowObstacle0' isLow={true} animationTime={blockSpeed}/>}
                {!gameOver && lowObstacle1 && <ObstacleLow color="orange" id='lowObstacle1' isLow={true} animationTime={blockSpeed}/>}
                {!gameOver && lowObstacle2 && <ObstacleLow color="yellow" id='lowObstacle2' isLow={true} animationTime={blockSpeed}/>}
                {!gameOver && lowObstacle3 && <ObstacleLow color="pink" id='lowObstacle3' isLow={false} animationTime={blockSpeed}/>}
                {!gameOver && lowObstacle4 && <ObstacleLow color="black" id='lowObstacle4' isLow={false} animationTime={blockSpeed}/>}
            </GameArea>
            <HighScoresContainer>
                <HighScoresSection>
                    <HighScoresTitle>Daily Leaderboard</HighScoresTitle>
                    {top5Daily.map(entry => ( getHighScoreEntry(entry)))}
                </HighScoresSection>
                <HighScoresSection>
                    <HighScoresTitle>All-Time Leaderboard</HighScoresTitle>
                    {top5AllTime.map(entry => ( getHighScoreEntry(entry)))}
                </HighScoresSection>
            </HighScoresContainer>
        </AzaleaRunnerContainer>
    )
}

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function shortenAddress(address) {
    return (address.slice(0, 6) + '...' + address.slice(address.length - 4)).toLowerCase();
}