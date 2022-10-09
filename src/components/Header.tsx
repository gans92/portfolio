import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      mx="auto"
      px="6"
      align="center"
      bg="#0C0C0C"

    >
      <Icon as={FaReact} fontSize="24" color="#61dafb" />
      <Text color="#61dafb" m="2">
        Gabriel
      </Text>
      Alisson
      <Button
        
        as="a"
        size="sm"
        fontSize="sm"
        colorScheme="blue"
        ml="auto"
      >
        Repositories
      </Button>
      <Button
        as="a"
        size="sm"
        fontSize="sm"
        colorScheme="blue"
        ml="2"
      >About</Button>
      <Button
        as="a"
        size="sm"
        fontSize="sm"
        colorScheme="blue"
        ml="2"
      >Contact</Button>
      <Button
        as="a"
        size="sm"
        fontSize="sm"
        colorScheme="blue"
        ml="2"
      >Skils</Button>
    </Flex>
  );
}
