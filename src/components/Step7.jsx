import React from "react";
import { Text, Box, Button } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import RunawayComponent from "./StyledBtn";

const Step7 = () => {
    let navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/finalstep');
    }
    return (
        <>
            <img src="assets\media\gif\alone-lonely.gif" width="300px" />
            <Box mt={50}>
                <Text fontSize='2xl'>အာ့ဆိုချစ်တော့ဘူးလား</Text>
            </Box>
            <Stack spacing={5} direction="row" mt={70}>
                <Box>
                    <RunawayComponent />
                </Box>
                <Box>
                    <Button
                        size='md'
                        height='90px'
                        width='410px'
                        border='2px'
                        borderColor='green.500'
                        onClick={handleOnClick}
                    >
                        <Text color="green">အချိုးပြေရင်ချစ်မယ်</Text>
                    </Button>
                </Box>
            </Stack>
        </>
    );
}

export default Step7