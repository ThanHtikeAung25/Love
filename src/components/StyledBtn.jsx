import React, { useState, useEffect } from 'react';
import { Button, Text } from '@chakra-ui/react';

const RunawayComponent = () => {
    const [position, setPosition] = useState({ left: 0, top: 0 });

    console.log(window.innerHeight);

    const updatePosition = () => {
        const randX = Math.floor(Math.random() * (window.innerWidth - 100));
        const randY = Math.floor(Math.random() * (window.innerHeight - 100));
        console.log([randX, randY]);
        setPosition({ left: randX, top: randY });
    };

    return (
        <Button
            id="box"
            size='md'
            height='90px'
            width='410px'
            border='2px'
            borderColor='orange.500'
            position='absolute'
            left={`${position.left}px`}
            top={`${position.top}px`}
            onMouseEnter={updatePosition}
        >
            <Text color="orange">ချစ်ဘူး</Text>
        </Button>
    );
};

export default RunawayComponent;