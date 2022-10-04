import { Heading, Text, Box, ModalHeader } from "@chakra-ui/react";
import { Header } from "../components/Header";
import Image from "next/image";

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
      >
        <Image 
        src="/images/react-bt.png"
        alt="Background"
        width={1920}
        height={1080}
      />
        <Box
          bg="#0C0C0C"
          p="10"
          rounded="xl"
          shadow="inner"
          backdropBlur="sm"
          backdropFilter="blur(10px)"
        >
          <Heading>
            Hi, I'm{" "}
            <Text color="#61dafb" as="span">
              Gabriel.
            </Text>
          </Heading>
          <Text>
            I'm a{" "}
            <Text color="rgb(5 242 155)" as="span">
              Front-end
            </Text>{" "}
            Js developer from Brazil!
          </Text>
        </Box>
      </Box>
    </div>
  );
}
