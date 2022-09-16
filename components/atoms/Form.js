import React from 'react'
import { Box, FormControl, Input, Stack, WarningOutlineIcon } from 'native-base'

const Form = ({label, type, hint, error_hint, defaultValue}) => {
  return (<Box alignItems="center">
  <Box w="100%" maxWidth="500px">
    <FormControl isRequired >
      <Stack mx="8">
        <FormControl.Label>{label}</FormControl.Label>
        <Input type={type ? type : null} defaultValue={defaultValue}/>
        <FormControl.HelperText>
          {hint} 
        </FormControl.HelperText>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {error_hint}
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  </Box>
</Box>)
}

export default Form