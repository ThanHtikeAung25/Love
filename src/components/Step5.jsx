import React from "react";
import { Text, Box, Button } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MyVideo } from "./Video";

const Step5 = () => {
    let navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/step6');
    }
    return (
        <>
            <img src="assets\media\gif\ahaaaa-mad.gif" />
            <Stack direction="row">
                <Box mt={50}>
                    <Text fontSize='2xl'>အာ့ဆိုလည်း video လေးတော့ကြည့်🙄</Text>
                </Box>
                <Box width="450px">
                    <MyVideo />
                </Box>
            </Stack>
            <Stack spacing={5} direction="row" mt="30px">
                <Box>
                    <Button
                        size='md'
                        height='18px'
                        width='70px'
                        border='2px'
                        borderColor='red.500'
                        onClick={() => handleOnClick()}
                    >
                        <Text fontSize="5" color="red">ဘာမှလာမပြနဲ့ စိတ်ဆိုးတုန်းပဲ</Text>
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

export default Step5