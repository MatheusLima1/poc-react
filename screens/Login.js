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
import { login } from '../services/Api';
import axios from 'axios';

const Login = ({ navigation }) => {
    const [getUserData, setUserData] = useState("")

    async function loginMoments(){
        console.log("clicked")
        async function loginAsync() {
            try {
                const userData = await axios.post('https://private-28019f-mockendpointsgen2cb.apiary-mock.com/login', {
                    login: "matheusl@curacubby.com", password: "dhasdajsdhj"
                }).then(function (response){
                    setUserData(userData)
                    console.log(response)
                    navigation.navigate("Bottom")
                }).catch(function (error){
                    console.log(error);
                })

            } catch (error) {
                setUserData(null)
            }
        
            }
           await loginAsync();
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