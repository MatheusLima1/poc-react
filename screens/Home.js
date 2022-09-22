import React, { useEffect, useState } from 'react'
import { Camera, CameraType } from 'expo-camera';
import StaggerOptions from '../components/organism/StaggerOptions'
import { Box, Center, FlatList, ScrollView, } from 'native-base'
import TaggedImage from '../components/organism/TaggedImage';
import { getMoments } from '../services/Api';
import { Pressable } from 'react-native';

const Home = () => {
  const [fetchedMoments, setFetchedMoments] = useState([])

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      requestPermission(status === "granted")
    })();

    async function getMomentsAsync() {
      try {
        const moments = await getMoments()
        setFetchedMoments(moments)
      } catch (error) {
        setFetchedMoments(null)
      }

    }
    getMomentsAsync();

  }, [])

  if(permission === null){
    return <Box />
  }

  if(permission === false){
    return <Text> Access Denied</Text>
  }

  function toggleCameraType() {
    console.log("Clicked buttom camera")
    setType((current) => (
      current === CameraType.back ? CameraType.front : CameraType.back
    ));
  }

  function renderMomentItem(itemData) {
    let imageUrl = itemData.image ? itemData.image[0] : ""

    if (imageUrl === "")
      return

    return (
      <Box key={Math.random()}>
        <TaggedImage
          moment={itemData} />
      </Box>
    )
  }

  return (
    <Box flex={1}>
      <Center>
        <Camera type={type} style={{flex: 1}}/>
        <ScrollView>
          {fetchedMoments.map((moment) => {
            return (renderMomentItem(moment))
          })}
        </ScrollView>
      </Center>
      <Box flex={1} alignItems="flex-end">
        <StaggerOptions onClickCamera={toggleCameraType} />
      </Box>
    </Box>
  );
}

export default Home