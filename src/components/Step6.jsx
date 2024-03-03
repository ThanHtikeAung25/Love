import React from "react";
import { Text, Box, Button } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Step6 = () => {
    let navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/step7');
    }
    return (
        <>
            <img src="assets\media\gif\love.gif" width="300px"/>
            <Box mt={50}>
                <Text fontSize='2xl'>မဆိုးပါနဲ့တော့ ချစ်ကလည်း နော်နော် 🥺</Text>
            </Box>
            <Stack spacing={5} direction="row" mt={70}>
            <Box>
                <Button
                    size='md'
                    height='15px'
                    width='50px'
                    border='2px'
                    borderColor='red.500'
                    onClick={() => handleOnClick()}
                >
                    <Text fontSize="3" color="red">ဆိုးမှာဆိုးမှာ</Text>
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

export default Step6