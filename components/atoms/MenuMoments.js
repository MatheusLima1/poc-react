import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Box, Divider, HamburgerIcon, Menu } from 'native-base';

const MenuMoments = () => {
    return (
        <Box>
            <Menu trigger={triggerProps => {
                return <Pressable {...triggerProps}>
                    <HamburgerIcon />
                </Pressable>;
            }}>
                <Menu.Group title="free">
                    <Menu.Item>Edit</Menu.Item>
                </Menu.Group>
                <Divider mt="3" w="100%" />
                <Menu.Group title="free">
                    <Menu.Item>Delete</Menu.Item>
                </Menu.Group>
            </Menu>
        </Box>
    )
}

export default MenuMoments