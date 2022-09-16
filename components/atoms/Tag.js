import React from 'react'
import { Center } from 'native-base'

const Tag = ({ bg, bgDark, textColor, description }) => {
    return (
        <Center
            backgroundColor={bg}
            rounded="lg"
            _dark={{
                backgroundColor: bgDark
            }} _text={{
                color: textColor,
                fontWeight: "700",
                fontSize: "10"
            }} px="2" py="1" minWidth="30">
            {description}
        </Center>
    )
}

export default Tag