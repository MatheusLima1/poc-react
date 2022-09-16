import { View, Text } from 'react-native'
import React from 'react'
import { AspectRatio, Avatar, Box, Center, Divider, IconButton, Image, VStack, ZStack } from 'native-base'
import BoxedImage from '../atoms/BoxedImage'
import TagGroup from '../molecules/moment_item/TagGroup'
import MomentHeader from '../molecules/moment_item/MomentHeader'
import MomentFooter from '../molecules/moment_item/MomentFooter'


const TaggedImage = ({ ratio, uri }) => {
    return (
        <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" background="white" borderWidth="1" margin={5}>
            <Center>
                <VStack>
                    <MomentHeader />
                    {imageWithTags(ratio, uri)}
                    <MomentFooter />
                </VStack>
            </Center>
        </Box>
    )
}

export default TaggedImage

function imageWithTags(ratio, uri) {
    return <Center>
        <Box>
            <Box marginX={5}>
                <BoxedImage ratio={ratio} uri={uri} />
            </Box>
            <Box>
                <TagGroup />
            </Box>
        </Box>
    </Center>
}
