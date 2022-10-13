import React, { useEffect, useState } from 'react'
import { Camera, CameraType } from 'expo-camera';
import StaggerOptions from '../components/organism/StaggerOptions'
import { Alert, Box, Button, Center, CheckIcon, ScrollView, Select, Text, } from 'native-base'
import TaggedImage from '../components/organism/TaggedImage';
import { getQuestions } from '../services/Api';
import { useDispatch, useSelector } from "react-redux";
import * as Location from 'expo-location';

const Home = () => {
  const [fetchedMoments, setFetchedMoments] = useState([])
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = useState(null);
  const [service, setService] = React.useState("ux");
  const userData = useSelector((state) => state.userData.user)
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  console.log("Home: " + userData.schools[0].schoolName)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      requestPermission(status === "granted")
    })();

    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
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

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  if (permission === null) {
    return <Box />
  }

  if (permission === false) {
    return <Text> Access Denied</Text>
  }

  function schoolSelector() {
    return <Box maxW="300">
      <Select selectedValue={service} minWidth="150" accessibilityLabel="Choose Service" _selectedItem={{
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
      <Select selectedValue={service} minWidth="150" accessibilityLabel="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
        <Select.Item label="Campus Mocked" value="ux" />
        <Select.Item label="Campus Two" value="web" />
      </Select>
    </Box>
  }

  function showCurrentLocation(){
    <Alert w="100%" variant={key} colorScheme="success" status="success">
                <VStack space={2} flexShrink={1} w="100%">
                  <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                    <HStack space={2} flexShrink={1} alignItems="center">
                      <Alert.Icon />
                      <Text color={getTextColor(key)}>
                        Selection successfully moved!
                      </Text>
                    </HStack>
                  </HStack>
                </VStack>
              </Alert>
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

  console.log(location)

  return (
    <Box flex={1}>
      <Center>
        <Camera type={type} style={{ flex: 1 }} />
        {
          schoolSelector(userData.schools)
        }
        {
          campusSelector()
        }
        {/* {location == null ? errorMsg : 'Current Location: ' + JSON.stringify(location)} */}
        <ScrollView>
          {fetchedMoments.map((moment) => {
            return (renderMomentItem(moment))
          })}
        </ScrollView>
      </Center>
      <Box flex={1} >
        <StaggerOptions onClickCamera={toggleCameraType} />
      </Box>
    </Box>
  );
}

export default Home