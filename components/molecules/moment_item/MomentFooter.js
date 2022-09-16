import React from 'react'
import { Box, IconButton, VStack, Text } from 'native-base'
import { Ionicons } from "@expo/vector-icons";

const MomentFooter = () => {
    return (
        <VStack flex={1}>
            <Box flexDirection="row" overflow="hidden">
                <IconButton marginLeft={4} colorScheme="indigo" _icon={{ as: Ionicons, name: "heart-outline" }} />
                <IconButton colorScheme="indigo" _icon={{ as: Ionicons, name: "chatbox-ellipses-outline" }} marginLeft={-3} />
                <VStack>
                    <Text bold fontSize="xs">Some Title</Text>
                    <Text isTruncated maxW="300" w="90%" fontSize="xs">Lorem ipsum dolor sit amet</Text>
                </VStack>
            </Box>
            <Text fontSize="xs" italic position="absolute" right={1} marginTop={10} bottom={1} marginRight={3} paddingTop={10}>1 day ago</Text>
        </VStack>
    )
}

export default MomentFooter