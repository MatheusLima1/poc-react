import React from 'react'
import { Dimensions } from 'react-native'
import { AspectRatio, Box, Image } from 'native-base'
import { width } from '../../utils/DimensionScreen'

const BoxedImage = ({ratio, uri}) => {
    return (
        <Box maxW={width * 0.9} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" >
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