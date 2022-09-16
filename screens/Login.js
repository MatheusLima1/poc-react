import React from 'react'
import {
    Center,
    Button,
    VStack,
    HStack,
    Box,
    Image
} from "native-base";
import Form from "../components/atoms/Form";

const Login = ({ navigation }) => {
    return (
        <Box safeAreaTop="5">
            <VStack space="5">
                <Center>
                    <Image source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg"
                    }
                    } size={150} borderRadius={100} />
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
                            onPress={() => {
                                navigation.navigate("Bottom")
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