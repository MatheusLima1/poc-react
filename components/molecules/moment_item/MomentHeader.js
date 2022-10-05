import React from 'react'
import { Avatar, Box, IconButton, Text } from 'native-base'
import { Ionicons } from "@expo/vector-icons";
import { width } from '../../../utils/DimensionScreen';

const MomentHeader = ({userName, imageSrc, momentIsPublished}) => {
    return (
        <Box flexDirection="row" flex={1}>
            <Avatar marginLeft={5} marginTop={3} marginBottom={1} size={width * 0.06} source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }} />
            <Box marginLeft={2} marginTop={3.5} marginBottom={1} >
                <Text fontSize="xs">{userName}</Text>
            </Box>
            <Box marginTop={2} marginLeft={-1}>
                <IconButton colorScheme="red" _icon={{ as: Ionicons, name: "checkmark-circle", size: "3"}} />
            </Box>
            <Box right={1} position="absolute">
                <IconButton colorScheme="indigo" _icon={{ as: Ionicons, name: "options-outline" }} />
            </Box>
        </Box>
    )
}

export default MomentHeader