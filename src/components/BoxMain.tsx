import Image from 'next/image'
import { Box, Text, Img } from '@chakra-ui/react'

export const BoxMain = () => {
    return (
        <Box
        as="main"
        w="full"
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDirection="column"
        textAlign="center"
      >
        <Image 
         src={'/images/react-bt.png'}
         width={'400px'}
         height={'400px'}
         alt={'Programmer programming'}
        />
        <Img
          bgImage="url(https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777655/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png)"
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          width="100%"
          height="100vh"
          filter="auto"
          blur="4px"
          position="absolute"
          zIndex="-1"
        />
        <Box
        display='flex'
        flexDirection='row'
        justifyContent='space-evenly'
        alignItems='center'
        w='100%'
        h='100vh'
        >
        <Box
          bg="#0C0C0C"
          p="10"
          rounded="xl"
          shadow="inner"
          backdropBlur="sm"
          backdropFilter="blur(10px)"
          marginTop={20}
        >
          <Text display="flex" fontSize={"3xl"} fontWeight="bold" w="64">
            Hi, I&apos;m
            <Text color="#61dafb" as="span" ml="1">
              Gabriel
            </Text>
            .
          </Text>
          <Text display="flex">
            I&apos;m a
            <Text color="rgb(5 242 155)" as="span" ml="1">
              Front-end
            </Text>
            <Text as='span' ml="1">Js developer from Brazil!</Text>
          </Text>
        </Box>
        <Img
          src="https://www.fabiohrfilho.com/_next/image?url=%2Fimages%2FheaderBetter.jpeg&w=384&q=75"
          w="300px"
          h="300px"
          position="relative"
          top={20}
          rounded="full"
          border="4px solid #61dafb"
        />
      </Box>
        </Box>
    )
}