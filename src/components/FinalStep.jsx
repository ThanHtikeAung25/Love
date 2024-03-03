import React from "react";
import { Text, Box } from "@chakra-ui/react";
import Confetti from "./Confetti";

const FinalStep = () => {
    return (
        <>
            <Confetti />
            <img src="src\media\gif\hug.gif" />
            <Box mt={50}>
                <Text fontSize='2xl'>ရေး....................</Text>
                <Text fontSize='2xl'>ကိုကလည်း ချစ်ကိုပဲ တစ်သက်လုံးချစ်နေမှာ</Text>
            </Box>
        </>
    );
}

export default FinalStep