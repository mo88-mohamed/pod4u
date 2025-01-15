import { useEffect, useRef, useState } from 'react'
import audio from '../assets/apt.mp3'
import './audioPlayer.css'
import { FaBackward, FaForward, FaPause, FaPlay } from 'react-icons/fa';
import { HiSpeakerWave ,HiSpeakerXMark} from "react-icons/hi2";
import { Box, Flex, Input,Text } from '@chakra-ui/react';
import { Slider as SliderBar } from './ui/slider';
import { Button } from './ui/button';
import { useAudio } from '../context/audioContext';
import { useMediaQuery } from "@uidotdev/usehooks";
import {  PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTrigger,} from './ui/popover'
import { TbRewindBackward10,TbRewindForward10 } from "react-icons/tb";




const toHHMMSS =  (sec)=> {
    var sec_num = parseInt(sec, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num % 3600) / 60); 
    var seconds = Math.floor(sec_num % 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

const AudioPlayer = () => {
    const {audio,setAudio,audioName,setAudioName} = useAudio();
    const audioRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(0.1);
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
    const [volumeSlider,setVolumeSlider] = useState(false);

    return (
        <>
            <Box className="audio-player audio-player-bottom">
                <audio ref={audioRef} src={audio} autoPlay onPlay={() => setIsPlaying(true)} onPause={() => { setIsPlaying(false) }} onEnded={() => { setIsPlaying(false) }} onTimeUpdate={() => {
                    setProgress(audioRef.current.currentTime);
                }} controls></audio>
                <Text>{audioName}</Text>
                <Flex alignItems={'center'} padding={'10px'} gap={'10px'}>
                    <AudioPlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} />
                    <AudioPlayerProgress duration={audioRef?.current?.duration} currentTime={progress} audioRef={audioRef} />
                    <Flex width={'20%'} alignItems={'center'}>
        
 
   
                        { !isSmallDevice ?
                             <>
                             <Button padding={0} bg={'transparent'} color={'white'} onClick={() => {
                                 audioRef.current.muted = !audioRef.current.muted;
                                 setVolume(audioRef.current.muted ? 0 : 50);
                             }}>
                                 {volume > 0 ?
                                     <HiSpeakerWave width={30} height={30} />
     
                                     :
                                     <HiSpeakerXMark width={30} height={30} />
                                 }
                             </Button>
                             <SliderBar width={'100%'}   value={[volume*100]} onValueChange={(e) => {
                                 audioRef.current.volume = e.value / 100;
                                 console.log(e.value);
                                 audioRef.current.muted && e.value > 0 && (audioRef.current.muted = false);
                                 setVolume(e.value/100);
                             }} />
                             </>
                        :
                        <PopoverRoot open={volumeSlider} onOpenChange={(e)=>setVolumeSlider(e.open)} size={'xs'}>
                            <PopoverTrigger>
                            <Button padding={0} bg={'transparent'} color={'white'}>
                                 {volume > 0 ?
                                     <HiSpeakerWave width={30} height={30} />
     
                                     :
                                     <HiSpeakerXMark width={30} height={30} />
                                 }
                             </Button>
                            </PopoverTrigger>
                            <PopoverContent css={{width:'fit-content'}}>
                                <PopoverArrow />
                                <PopoverBody>
                                <SliderBar height={'200px'} orientation="vertical" value={[volume*100]} onValueChange={(e) => {
                            audioRef.current.volume = e.value /100;
                            audioRef.current.muted && e.value > 0 && (audioRef.current.muted = false);
                            setVolume(e.value/100);
                        }} />
                                </PopoverBody>
                            </PopoverContent>

                        </PopoverRoot>
                        }

                    </Flex>

                </Flex>
            </Box>
        </>
    )
}

const AudioPlayerProgress = ({ duration, currentTime, audioRef }) => {
    const fontsize = {base:'0.8rem',sm:'1rem',md:'1.2rem'}

    return (
        <Flex width={'100%'} alignItems={'center'} gap={'10px'}>
            {/* <div className='audio-progress-bar' ref={progessRef}>
                    <div className='audio-progress-bar-inner' style={{width:(currentTime*(2))}} >

                        <div className='audio-progress-bar-inner-circle'>

                        </div>
                    </div>


                </div> */}
                <Text fontSize={fontsize}>{toHHMMSS(currentTime)}</Text>
            {/* <Input className='audio-progress-bar' type='range' min='0' width={'100%'} max='100' value={((currentTime / duration) * 100)} onChange={(e) => {
                if (audioRef.current) {
                    audioRef.current.currentTime = (audioRef.current.duration * e.target.value) / 100;
                }
            }} /> */}
            <SliderBar width={'100%'} defaultValue={[0]} value={[((currentTime / duration) * 100)]}  onValueChange={
                (e) => {
                    if (audioRef.current) {
                        audioRef.current.currentTime = (audioRef.current.duration * e.value) / 100;
                    }
                }
            }/>
            <Text fontSize={fontsize}>{toHHMMSS(duration?duration:'00')}</Text>
        </Flex>
    )
}
const AudioPlayerControls = ({ isPlaying, setIsPlaying, audioRef }) => {
    const size = 30;
    const togglePLay =()=>{
                if (audioRef.current) {
                    if (isPlaying) {
                        audioRef.current.pause();
                        setIsPlaying(false);
                    }
                    else {
                        audioRef.current.play();
                        setIsPlaying(true);
                    }
                }
    }
    const style ={

    }
    return (
        <Flex alignItems={'center'} gap={'20px'}>
            {/* <Button width={0} rounded={'3xl'} padding={0}> */}
                {/* <FaBackward width={size} height={size} style={{margin:0}} /> */}
                <TbRewindBackward10 cursor={'pointer'}  width={size} height={size} onClick={
                    ()=>{
                        if (audioRef.current) {
                            audioRef.current.currentTime = audioRef.current.currentTime - 10;
                    }
                }
                }/>

            {/* </Button> */}
            {/* <Button rounded={'3xl'} padding={0} onClick={() => { */}
               {/* togglePLay();  */}
            {/* }}> */}
                {isPlaying ? <FaPause cursor={'pointer'}  width={size} height={size} onClick={togglePLay} /> : <FaPlay cursor={'pointer'}  width={size} height={size} onClick={togglePLay} />}
            {/* </Button> */}
            {/* <Button rounded={'3xl'} padding={0}> */}
                {/* <FaForward width={size} height={size} /> */}
                <TbRewindForward10  cursor={'pointer'} width={size} height={size} onClick={()=>{
                    if (audioRef.current) {
                        audioRef.current.currentTime = audioRef.current.currentTime + 10;
                }
                }} />
                
            {/* </Button> */}
            {/* <button>Pause</button> */}
        </Flex>
    )
}

export default AudioPlayer;