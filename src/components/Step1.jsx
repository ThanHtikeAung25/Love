import React from "react";
import { Text, Box, Button } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
    let navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/step2');
    }
    return (
        <>
            <img src="assets\media\gif\angry.gif" />
            <Box mt={50}>
                <Text fontSize='2xl'>ကို့ကိုစိတ်ဆိုးတုန်းလား</Text>
            </Box>
            <Stack spacing={5} direction="row" mt={70}>
            <Box>
                <Button
                    size='md'
                    height='48px'
                    width='200px'
                    border='2px'
                    borderColor='red.500'
                    onClick={() => handleOnClick()}
                >
                    <Text color="red">အရမ်းဆိုးနေတယ်</Text>
                </Button>
            </Box>
            <Box>
                <Button
                    size='md'
                    height='90px'
                    width='410px'
                    border='2px'
                    borderColor='green.500'
                    onClick={() => navigate("/finalstep")}
                >
                    <Text color="green">မဆိုးတော့ဘူး</Text>
                </Button>
            </Box>
            </Stack>
        </>
    );
}

export default Step1