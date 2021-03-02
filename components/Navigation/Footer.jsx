import React from "react";

// Components
import {
  Box,
  Flex,
  // Heading,
  Text,
  // HStack,
  Link,
  // Stack,
  // useMediaQuery,
} from "@chakra-ui/react";
// import SocialMedia from "../SocialMedia";

// Content
// import { socials } from "../../content/social-media";

// Utilities
// import { v4 as uuid } from "uuid";

const Footer = () => {
  // const [phoneScreen] = useMediaQuery("(max-width: 1200px)");

  return (
    <Box>
      {/* <Flex justify="space-between">
        <Box width={phoneScreen ? "100%" : "30%"}>
          <Heading size="md" mb={5}>My name is Ryan Le.</Heading>
          <Text fontSize="md">
            I currently work as a Software Engineer Intern at Nelnet. My passion is in
            front-end web development using the React.js framework.
          </Text>
        </Box>
        <Box 
          width={phoneScreen ? "100%" : "20%"} 
        >
          <Heading size="md" mb={5}>Learn about me &amp; my work</Heading>
          <Stack>
            <Link href="/about" color="#3492D0">About Me</Link>
            <Link href="/about" color="#3492D0">Experience</Link>
            <Link href="/about" color="#3492D0">Skills</Link>
            <Link href="/about" color="#3492D0">Projects</Link>
          </Stack>
        </Box>
        <Box width={phoneScreen ? "100%" : "30%"}>
          <Heading size="md" mb={5}>Connect with me</Heading>
          <Text fontSize="md" mb={5}>
            Follow me on Instagram, start a conversation with me,
            or just see what I'm currently listening to.
          </Text>
          <HStack spacing={6}>
            {socials.map((account) => <SocialMedia key={uuid()} channel={account} />)}
          </HStack>
        </Box>
      </Flex> */}
      <Flex justify="space-between" wrap="wrap">
        <Text fontSize="md" mb={3}>
          Copyright &copy; {new Date().getFullYear()} Ryan Le. All Rights Reserved.
        </Text>
        <Text fontSize="md" mb={3}>
          Portfolio created with <Link href="https://chakra-ui.com/" color="teal.500">Chakra UI</Link> components.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
