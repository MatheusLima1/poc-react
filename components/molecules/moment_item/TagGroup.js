import React from 'react'
import { Center, HStack } from 'native-base'
import Tag from '../../atoms/Tag'

const TagGroup = () => {
    return ( 
        <Center>
            <HStack space={1} marginY={1}>
                <Tag bg={"violet.500"} bgDark={"violet.400"} textColor={"warmGray.50"} description={"Willow"} />
                <Tag bg={"primary.500"} bgDark={"primary.400"} textColor={"warmGray.50"} description={"WYCA"} />
                <Tag bg={"secondary.500"} bgDark={"secondary.400"} textColor={"warmGray.50"} description={"Tiger"} />
                <Tag bg={"tertiary.500"} bgDark={"tertiary.400"} textColor={"warmGray.50"} description={"Panther"} />
                <Tag bg={"fuchsia.500"} bgDark={"fuchsia.400"} textColor={"warmGray.50"} description={"Willis"} />
            </HStack>
        </Center>
    )
}

export default TagGroup
