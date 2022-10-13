import { View, Text } from 'react-native'
import React from 'react'
import { Box, Center,VStack } from 'native-base'
import BoxedImage from '../atoms/BoxedImage'
import TagGroup from '../molecules/moment_item/TagGroup'
import MomentHeader from '../molecules/moment_item/MomentHeader'
import MomentFooter from '../molecules/moment_item/MomentFooter'
import { height, width } from '../../utils/DimensionScreen'


const TaggedImage = ({ moment }) => {
    let imageUrl = moment.image ? moment.image[0] : ""

    return (
        <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" background="white" borderWidth="1" margin={2} maxWidth={width * 0.8} maxHeight={height * 0.4}>
            <Center>
                <VStack>
                    <MomentHeader userName={moment.authorName} />
                    {imageWithTags(16/9, imageUrl ? imageUrl : "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png")}
                    <MomentFooter title={moment.title} description={moment.description}/>
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
