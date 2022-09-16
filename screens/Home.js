import { View, Text } from 'react-native'
import React from 'react'
import StaggerOptions from '../components/organism/StaggerOptions'
import { Box, Center, } from 'native-base'
import TaggedImage from '../components/organism/TaggedImage';

const Home = () => {
  return (
    <>
      <Center alignItems="center" position="absolute">
        <TaggedImage
        uri={"https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"}
        ratio={16 / 9} />
      </Center>
      <Box flex={1} alignItems="flex-end">
        <StaggerOptions />
      </Box>
    </>
  );
}

export default Home