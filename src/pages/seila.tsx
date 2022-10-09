import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Button,
    Img,
  } from "@chakra-ui/react";
  import react from "../src/public/images/react-bt.png";
  
  export default function Home() {
    return (
      <div>
        <main>
          <Box
            bgImage="url(https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777655/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png)"
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
            filter="auto"
            blur="4px"
            height="90%"
            width="100%"
            position="absolute"
          ></Box>
          <Flex
            display="flex"
            direction="column"
            align="center"
            justify="center"
            minH="60vh"
            h="90vh"
            w="100%"
            position='relative'
          >
  
  
            <FormControl>
              <FormLabel  color="white" >celular</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel  color="white" >confirm celular</FormLabel>
              <Input type="password" />
            </FormControl>
            
            <Button
              type="submit"
              colorScheme="teal"
              variant="outline"
              width="full"
              mt={4}
            >
              Sign in
            </Button>
  
  
          </Flex>
        </main>
  
        <Box>div div div div</Box>
  
        <main>
          <Box
            bgImage="url(https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777655/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png)"
            bgPos="center"
            bgSize="cover"
            bgRepeat="no-repeat"
            filter="auto"
            blur="4px"
            height="100%"
            width="100%"
            position="absolute"
          ></Box>
          <Flex
            display="flex"
            direction="column"
            align="center"
            justify="center"
            h="100vh"
            w="100%"
            position="relative"
          >
  
  
            <FormControl id="email" mt={4}>
              <FormLabel color="white">Email address</FormLabel>
              <Input type="email" placeholder="Enter email" color="white" />
            </FormControl>
            <FormControl id="password" mt={4}>
              <FormLabel color="white">Password</FormLabel>
              <Input type="password" placeholder="Enter password" color="white" />
            </FormControl>
            <Button mt={4} colorScheme="teal" variant="outline">
              Login
            </Button>
  
  
          </Flex>
        </main>
      </div>
    );
  }  