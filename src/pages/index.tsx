import { Heading, Text, Box, Img, HStack, Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";


export default function Home() {
  return (
    <div>
      <Header />
      <Box
        as="main"
        w="full"
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDirection="column"
        textAlign="center"
      >
        <Box
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
          maxH="100vh"
        />
        <Box
          bg="#0C0C0C"
          p="10"
          rounded="xl"
          shadow="inner"
          backdropBlur="sm"
          backdropFilter="blur(10px)"
          marginTop={20}
        >
          <Heading display="flex">
            Hi, I m
            <Text color="#61dafb" as="span">
              Gabriel.
            </Text>
          </Heading>
          <Text display="flex">
            I m a
            <Text color="rgb(5 242 155)" as="span">
              Front-end
            </Text>
            Js developer from Brazil!
          </Text>
        </Box>
        <Img
            src="https://www.fabiohrfilho.com/_next/image?url=%2Fimages%2FheaderBetter.jpeg&w=384&q=75"
            w="300px"
            h="300px"
            position='relative'
            top={20}
            rounded='full'
            border='4px solid #61dafb'
          />
      </Box>
      <Flex as='main'
      flexDirection='column'
      >
        <h1>About me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
          voluptatum quidem quos natus quas. Quisquam, quae. Quisquam, quae.

        </p>

        <h1>My skills</h1>
        <HStack>
          <Img
          src='https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png'
            alt={'typescript'}
            w="100px"
            h="100px"
            position='relative'
            top={20}
          />
          <Img
          src='https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png'
            alt={'react'}
            w="100px"
            h="100px"
            position='relative'
            top={20}
          />
          <Img
          src='https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png'
            alt={'node'}
            w="100px"
            h="100px"
            position='relative'
            top={20}
          />
          <Img
          src='https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png'

            alt={'javascript'}

            w="100px"
            h="100px"
            position='relative'
            top={20}
          />

            
          <Img
          src='https://cdn.iconscout.com/icon/free/png-512/css-131-722685.png'
            alt={'css'}
            w="100px"
            h="100px"
            position='relative'
            top={20}
            
          />

        </HStack>

        <h1>My projects</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
          voluptatum quidem quos natus quas. Quisquam, quae. Quisquam, quae.


        </p>

        <footer>
          <p>
            copyrigth &copy; 2022 All rights reserved
          </p>
          <p>
          Designed by Gabriel Alisson
          </p>
        </footer>
      </Flex>
      
    </div>
  );
}
