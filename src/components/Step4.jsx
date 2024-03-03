import React from "react";
import { Text, Box, Button } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Step4 = () => {
    let navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/step5');
    }
    return (
        <>
            <img src="src\media\gif\github-sticker.gif" width="360" />
            <Box mt={50}>
                <Text fontSize='2xl'>စိတ်မဆိုးပါနဲ့တော့ ချစ်ကလည်း😭</Text>
            </Box>
            <Stack spacing={5} direction="row" mt={70}>
            <Box>
                <Button
                    size='md'
                    height='23px'
                    width='100px'
                    border='2px'
                    borderColor='red.500'
                    onClick={() => handleOnClick()}
                >
                    <Text fontSize='7px' color="red">မရဘူး ဆိုးမှာ</Text>
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

export default Step4