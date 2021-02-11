import React from "react";

// Components
import {
  useColorMode,
  Stack,
  Text,
  Box,
  Flex,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { ComponentLink } from "./NavLink";

// Icons
import {
  AiFillHome as Home,
  AiFillGithub as GitHub,
  AiFillLinkedin as LinkedIn,
  AiOutlinePaperClip as Resume,
} from "react-icons/ai";
import { IoPerson as Person } from "react-icons/io5";
import { AtSignIcon as Contact } from "@chakra-ui/icons";
import {
  MdWork as Work,
  MdCode as Code,
  MdLaptopMac as Mac,
} from "react-icons/md";

const SideNavLink = ({ href, children, icon }) => (
  <ComponentLink href={href}>
    <Flex align="center" padding={1}>
      <Box as={icon} mr={3} w="24px" />
      <Text fontWeight="bold">{children}</Text>
    </Flex>
  </ComponentLink>
);

const PageLinks = () => (
  <Stack spacing={0} marginBottom={8}>
    <SideNavLink href="/" icon={Home}>
      Home
    </SideNavLink>
    <SideNavLink href="/about" icon={Person}>
      About
    </SideNavLink>
    <SideNavLink href="/experience" icon={Work}>
      Experience
    </SideNavLink>
    <SideNavLink href="/skills" icon={Code}>
      Skills
    </SideNavLink>
    <SideNavLink href="/projects" icon={Mac}>
      Projects
    </SideNavLink>
    <SideNavLink href="/contact" icon={Contact}>
      Contact
    </SideNavLink>
    <br />
    <Divider />
    <br />
    <Heading size="sm">Other Links</Heading>
    <br />
    <SideNavLink href="https://github.com/ryansle" icon={GitHub}>
      GitHub
    </SideNavLink>
    <SideNavLink href="https://www.linkedin.com/in/ryansle/" icon={LinkedIn}>
      LinkedIn
    </SideNavLink>
    <SideNavLink href="/resume" icon={Resume}>
      Resume
    </SideNavLink>
  </Stack>
);

const SideNav = (props) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      backgroundColor={colorMode === "light" ? "white" : "gray.800"}
      position="fixed"
      left="0"
      width="100%"
      height="100%"
      top="0"
      right="0"
      {...props}
    >
      <Box
        top="4em"
        position="relative"
        overflowY="auto"
        borderRightWidth="1px"
      >
        <Box>
          <Flex
            justify="space-between"
            direction="column"
            height="calc(100vh - 4rem)"
            fontSize="sm"
            p="6"
            pb="3em"
          >
            <PageLinks />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default SideNav;
