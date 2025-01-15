import { Box, Flex, Spinner } from "@chakra-ui/react"

const Loading = () => {

    return(
        <Box position='fixed' zIndex='overlay' w='100vw' h='100vh' top='0' left='0' overflow='hidden' colorPalette={'gray'} >
        <Flex w='100%' h='100%' justifyContent='center' alignItems='center'>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            size='xl'
          />
        </Flex>
      </Box>
    )
}

export default Loading