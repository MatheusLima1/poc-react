import React, { useEffect, useState } from 'react'
import {
    Center,
    Button,
    VStack,
    HStack,
    Box,
    Image
} from "native-base";
import Form from "../components/atoms/Form";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from '../redux/userData/userData';

const Login = ({ navigation }) => {
    const userData = useSelector((state) => state.userData)
    const dispatch = useDispatch()

    async function loginMoments(){
        console.log("clicked")
        async function loginAsync() {
            try {
                await axios.post('https://private-28019f-mockendpointsgen2cb.apiary-mock.com/login', {
                    login: "matheusl@curacubby.com", password: "dhasdajsdhj"
                }).then(function (response){
                    let convertedData = convertUserDataIntoObject(response.data)
                    userData.userId.includes(convertedData)
                    dispatch(addUserData(convertedData))
                    navigation.navigate("Bottom")
                }).catch(function (error){
                    console.log(error);
                })
            } catch (error) {
                console.log(error);
            }
        
            }
           await loginAsync();
    }

    function convertUserDataIntoObject(m) {
        return {
          "userId": m.userId,
          "firstName": m.firstName,
          "lastName": m.lastName,
          "email": m.email,
          "phone": m.phone,
          "roles": m.roles,
          "schools": m.schools,
          "classrooms": m.classrooms,
          "restrictions": m.restrictions,
          "token": m.token,
          "expiresAt": m.expiresAt
        };
      }

    return (
        <Box safeAreaTop="5">
            <VStack space="5">
                <Center>
                    <Image source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg"
                    }
                    } size={150} borderRadius={100} alt="image"/>
                </Center>
                <Center>
                    <Form
                        label={"Email"}
                        hint={" Please enter with your email "}
                        error_hint={"An email is required"} />
                </Center>
                <Center>
                    <Form
                        label={"Password"}
                        type={"password"}
                        hint={" Must be at least 6 characters."}
                        error_hint={"At least 6 characters are required."} />
                </Center>
                <HStack space={3} justifyContent="center">
                    <Center>
                        <Button
                            minW={100}
                            colorScheme="primary"
                            onPress={async () => {
                                loginMoments()          
                            }}>
                            Login
                        </Button>
                    </Center>
                    <Center>
                        <Button
                            minW={100}
                            // variant="subtle" 
                            colorScheme="secondary"
                            onPress={() => {
                                console.log('hello')
                            }}>
                            Sign up
                        </Button>
                    </Center>
                </HStack>
            </VStack>
        </Box>
    )
}

export default Login