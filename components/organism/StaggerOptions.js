import React, {useState} from 'react';
import { Box, useDisclose, IconButton, Stagger, HStack, Icon, Center, NativeBaseProvider } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { height } from '../../utils/DimensionScreen';

const StaggerOptions = ({onClickCamera}) => {
    
    const buttonSize = height * 0.045

    const {
        isOpen,
        onToggle
    } = useDisclose();
    return <Box alignItems="flex-end" flex={1} position="absolute" bottom="12" right="5">
        <Box alignItems="flex-end" minH={height * 0.2}>
            <Stagger visible={isOpen} initial={{
                opacity: 0,
                scale: 0,
                translateY: 34
            }} animate={{
                translateY: 0,
                scale: 1,
                opacity: 1,
                transition: {
                    type: "spring",
                    mass: 0.8,
                    stagger: {
                        offset: 30,
                        reverse: true
                    }
                }
            }} exit={{
                translateY: 34,
                scale: 0.5,
                opacity: 0,
                transition: {
                    duration: 100,
                    stagger: {
                        offset: 30,
                        reverse: true
                    }
                }
            }}>
                <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon as={MaterialIcons} size={buttonSize} name="description" _dark={{
                    color: "warmGray.50"
                }} color="warmGray.50" />} />
                <IconButton mb="4" variant="solid" bg="yellow.400" colorScheme="yellow" borderRadius="full" icon={<Icon as={MaterialCommunityIcons} _dark={{
                    color: "warmGray.50"
                }} size={buttonSize} name="camera" color="warmGray.50" />} onPress={onClickCamera}/>
                <IconButton mb="4" variant="solid" bg="teal.400" colorScheme="teal" borderRadius="full" icon={<Icon as={MaterialCommunityIcons} _dark={{
                    color: "warmGray.50"
                }} size={buttonSize} name="video" color="warmGray.50" />} />
                <IconButton mb="4" variant="solid" bg="red.500" colorScheme="red" borderRadius="full" icon={<Icon as={MaterialIcons} size={buttonSize}name="photo-library" _dark={{
                    color: "warmGray.50"
                }} color="warmGray.50" />} />
            </Stagger>
        </Box>
        <HStack alignItems="center">
            <IconButton variant="solid" borderRadius="full" size="lg" onPress={onToggle} bg="cyan.400" icon={<Icon as={MaterialCommunityIcons} size={buttonSize} name="plus" color="warmGray.50" _dark={{
                color: "warmGray.50"
            }} />} />
        </HStack>
    </Box>;
};

export default StaggerOptions