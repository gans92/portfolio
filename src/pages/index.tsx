import { Heading, Text, Box, Img, HStack, Flex } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BoxMain } from "../components/BoxMain";

export default function Home() {
  return (
    <div>
      <Header />
      <BoxMain/>

      <Flex as="main" flexDirection="column">
        <Heading
          as="h1"
          textAlign="center"
          fontSize="4xl"
          fontWeight="bold"
          mt="75"
        >
          About me
        </Heading>
        <Box
          as="aside"
          display="flex"
          w="400px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          rounded="xl"
          bg="#0C0C0C"
          p="10"
          shadow="inner"
          backdropBlur="sm"
          backdropFilter="blur(10px)"
          marginTop={20}
          marginLeft="auto"
          marginRight="auto"
        >
          <Text fontFamily="montserrat">
            I&apos;m a Front-end developer from Brazil, I&apos;m 23 years old
            and I&apos;m currently in Labenu school of programming. I&apos;m
            passionate about technology and I&apos;m always looking for new
            challenges and knowledge.
          </Text>
          <Text
            mt="3"
            textAlign="left"
            fontFamily="montserrat"
            fontSize="1rem"
            lineHeight="1.5rem"
          >
            Currently focused on learning more about the
            <Text
              as="span"
              animation={" spin 1s linear infinite"}
              color="rgb(5 242 155)"
              ml="1"
              fontWeight="bold"
            >
              M
            </Text>
            <Text
              as="span"
              animation={"spin 1s linear infinite"}
              color="#ff1d23"
              fontWeight="bold"
            >
              E
            </Text>
            <Text
              as="span"
              animation={"spin 1s linear infinite"}
              color="#ff9d00"
              fontWeight="bold"
            >
              R
            </Text>
            <Text
              as="span"
              animation={"spin 1s linear infinite"}
              color="rgb(5 242 155)"
              mr="1"
              fontWeight="bold"
            >
              N
            </Text>
            universe (Mongo, Express, React and NodeJs).
            {/* <p class="mb-3 text-left font-montserrat text-base text-white hd:text-base">Currently focused on learning more about the<!-- --> <!-- --><span class="animate-pulse font-bold text-[#0CF25D]">M</span><span class="animate-pulse font-bold text-[#FF1D23]">E</span><span class="animate-pulse font-bold text-[#61dafb]">R</span><span class="animate-pulse font-bold text-[#6cc24a]">N</span> <!-- -->universe (Mongo, Express, React, NodeJs).<!-- --></p> */}
          </Text>
        </Box>
        <h1>My skills</h1>
        <HStack>
          <Img
            src="https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png"
            alt={"typescript"}
            w="100px"
            h="100px"
            position="relative"
            top={20}
          />
          <Img
            src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
            alt={"react"}
            w="100px"
            h="100px"
            position="relative"
            top={20}
          />
          <Img
            src="https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png"
            alt={"node"}
            w="100px"
            h="100px"
            position="relative"
            top={20}
          />
          <Img
            src="https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png"
            alt={"javascript"}
            w="100px"
            h="100px"
            position="relative"
            top={20}
          />

          <Img
            src="https://cdn.iconscout.com/icon/free/png-512/css-131-722685.png"
            alt={"css"}
            w="100px"
            h="100px"
            position="relative"
            top={20}
          />
        </HStack>
        <h1>My projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
          voluptatum quidem quos natus quas. Quisquam, quae. Quisquam, quae.
        </p>
        <Flex
          as="aside"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          rounded="xl"
          gap="5px"
          p="10"
          position='fixed'
          top='50%'
          left='-2%'
          transform='translateY(25%, -50%)'
          color='rgb(5 242 155)'

        >
          <Text as='a'
          href=""
          mb='15px'
          >
            <FaLinkedinIn 
            size='2.5rem'
            
            />
          </Text>
          <Text as='a'
          mb='15px'>
            <FaGithub 
            size='2rem'/>
          </Text>
          <a>
            <SiGmail 
            size='2rem'/>
          </a>
        </Flex>
      <footer>
        <p>copyrigth &copy; 2022 All rights reserved</p>
        <p>Designed by Gabriel Alisson</p>
      </footer>
      </Flex>
    </div>
  );
}
