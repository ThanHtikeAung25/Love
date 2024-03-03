import React, { useEffect, useState } from "react";
import { Text, Box, Button } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useNavigate } from "react-router-dom";

const PlayAudio = () => {
    return (
        <>
            <Stack direction="row">
                <Box>
                    <Text>English version</Text>
                    <AudioPlayer
                        src="assets\media\mp3\always.mp3"
                    />
                </Box>
                <Box>
                    <Text>Myanmar version</Text>
                    <AudioPlayer
                        src="assets\media\mp3\amyal_tan_pl_min_ver0.2.MP3"
                    />
                </Box>
            </Stack>
        </>
    );
}

const Step3 = () => {
    let navigate = useNavigate();
    const [isPlay, setIsPlay] = useState(false);
    const [text, setText] = useState("ဘူး");
    const handleYes = () => {
        setIsPlay(true);
    }
    const handleLittle = () => {
        navigate('/step4');
    }
    useEffect(() => {
        setIsPlay(false);
    }, []);
    const handleHover = () => {
        setText("မယ်");
    }
    const handleMouseLeave = () => {
        setText("ဘူး");
    }
    return (
        <>
            <img src="assets\media\gif\peach-cat.gif" />
            <Box mt={50}>
                <Text fontSize='2xl'>အာ့ဆို သီချင်းဆိုပြမယ်</Text>
            </Box>
            <Stack spacing={5} direction="row" mt={70}>
                {!isPlay && (<Box>

                    <Button
                        size='md'
                        height='70px'
                        width='110px'
                        border='2px'
                        borderColor='red.500'
                        onMouseEnter={() => handleHover()}
                        onMouseLeave={() => handleMouseLeave()}
                        onClick={() => handleYes()}
                    >
                        <Text color="red">နားထောင်{text}</Text>
                    </Button>
                </Box>)}
                {!isPlay && (
                    <Box>
                        <Button
                            size='md'
                            height='90px'
                            width='410px'
                            border='2px'
                            borderColor='green.500'
                            onClick={handleYes}
                        >
                            <Text color="green">နားထောင်မယ်</Text>
                        </Button>
                    </Box>
                )}
                {isPlay && (
                    <Box>
                        <Button
                            size='md'
                            height='90px'
                            width='450px'
                            border='2px'
                            borderColor='blue.500'
                            onClick={handleLittle}
                        >
                            <Text color="blue">နည်းနည်း စိတ်ဆိုးပြေပေးမယ်</Text>
                        </Button>
                    </Box>
                )}
            </Stack>
            {isPlay && (<PlayAudio />)}
        </>
    );
}

export default Step3