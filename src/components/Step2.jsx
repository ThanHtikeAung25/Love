import React from "react";
import { Text, Box, Button } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

const Step2 = () => {
    let navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/step3');
    }
    return (
        <>
            <img src="src\media\gif\unhappy-crossed.gif" />
            <Box mt={50}>
                <Text fontSize='2xl'>ဘာလို့အဲ့လောက်ဆိုးနေတာလဲ🥺</Text>
            </Box>
            <Stack spacing={5} direction="row" mt={70}>
            <Box>
                <Button
                    size='md'
                    height='30px'
                    width='150px'
                    border='2px'
                    borderColor='red.500'
                    onClick={handleOnClick}
                >
                    <Text fontSize='10px' color="red">ဘာလို့ဆိုးဆိုးပေါ့</Text>
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

export default Step2