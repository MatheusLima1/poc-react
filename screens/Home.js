import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import StaggerOptions from '../components/organism/StaggerOptions'
import { Box, Center, FlatList, ScrollView, } from 'native-base'
import TaggedImage from '../components/organism/TaggedImage';
import { getMoments } from '../services/Api';

const Home = () => {
  const [fetchedMoments, setFetchedMoments] = useState([])

  useEffect(() => {
    async function getMomentsAsync() {
      try {
        const moments = await getMoments()
        setFetchedMoments(moments)
      } catch (error) {
        setFetchedMoments(null)
      }

    }
    getMomentsAsync()
  }, [])

  function renderMomentItem(itemData) {
    let imageUrl = itemData.image ? itemData.image[0] : ""
    
    if(imageUrl === "")
      return

    return (
      <Box>
        <TaggedImage
          moment={itemData} />
      </Box>
    )
  }

  return (
    <Box flex={1}>
      <Center>
        <ScrollView>
          {fetchedMoments.map((moment) => {
            return (renderMomentItem(moment))
          })}
        </ScrollView>
      </Center>
      <Box flex={1} alignItems="flex-end">
        <StaggerOptions />
      </Box>
    </Box>
  );
}

export default Home