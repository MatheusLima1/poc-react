import React, { useEffect, useState } from 'react'
import { Camera, CameraType } from 'expo-camera';
import StaggerOptions from '../components/organism/StaggerOptions'
import { Box, Center, CheckIcon, ScrollView, Select, } from 'native-base'
import TaggedImage from '../components/organism/TaggedImage';
import { getQuestions } from '../services/Api';
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [fetchedMoments, setFetchedMoments] = useState([])
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = useState(null);
  const [service, setService] = React.useState("ux");
  const userData = useSelector((state) => state.userData.userId)

  console.log("Home: " + userData[0].schools[0].schoolName)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      requestPermission(status === "granted")
    })();

    async function getMomentsAsync() {
      try {
        const moments = await getQuestions()
        setFetchedMoments(moments)
      } catch (error) {
        setFetchedMoments(null)
      }

    }
    getMomentsAsync();

  }, [])

  if (permission === null) {
    return <Box />
  }

  if (permission === false) {
    return <Text> Access Denied</Text>
  }

  function schoolSelector(schools) {
    console.log("When enter" + schools)
    return <Box maxW="300">
      <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
        <Select.Item label="Moments Mocked" value="ux" />
        <Select.Item label="Moments" value="web" />
      </Select>
    </Box>
  }

  function campusSelector() {
    return <Box maxW="300" marginBottom={1}>
      <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
        <Select.Item label="Campus Mocked" value="ux" />
        <Select.Item label="Campus Two" value="web" />
      </Select>
    </Box>
  }

  function toggleCameraType() {
    setType((current) => (
      current === CameraType.back ? CameraType.front : CameraType.back
    ));
  }

  function renderMomentItem(itemData) {
    let imageUrl = itemData.image ? itemData.image[0] : ""
    console.log(imageUrl)
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
        <Camera type={type} style={{ flex: 1 }} />
        {
          schoolSelector(userData[0].schools)
        }
        {
          campusSelector()
        }
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