import { View, Text } from 'react-native'
import React from 'react'
import { AspectRatio, Box, Image } from 'native-base'

const BoxedImage = ({ratio, uri}) => {
    return (
        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" >
        <Box rounded="lg" overflow="hidden">
            <AspectRatio width="100%" ratio={ratio}>
                <Image source={{
                    uri: uri    
                }} alt="image" />
            </AspectRatio>
        </Box>
        </Box>
    )
}

export default BoxedImage