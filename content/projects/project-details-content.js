import React from "react";

// Components
import {
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  Flex,
  Heading,
  Image,
  Code,
  useMediaQuery
} from "@chakra-ui/react";
import { NotAllowedIcon as Bullet } from "@chakra-ui/icons";

const ProjectDetailsContent = ({ project }) => {
  const [phoneScreen] = useMediaQuery("(max-width: 985px)");

  // #region Project Detail Content
  const updatedPortfolio = (
    <Box>
      <Text fontSize="xl" mb={5}>
        If you ever saw my old portfolio, you might remember how... clunky it felt. 
        So, once I realized how easy Chakra UI was to work with, and how nice it looked, 
        I knew I couldn't try to advertise my skills as a front-end developer while 
        sticking with my original portfolio website that I built while still trying to 
        figure out how to use React.js.
      </Text>
      <Text fontSize="xl" mb={5}>
        There were a number of things wrong with it. For starters, I was literally 
        building the website at the time to learn how to use React.js. For a time, 
        I had no idea what I was doing. Whatever code I could steal off of StackOverflow 
        to make things functional, whether I understood it or not, I did. The codebase 
        probably violates the DRY principle of software development more times than you 
        can count, and I didn't know how to use functions like <Code>arrays.map()</Code>, so there were 
        all sorts of wonky things inside.
      </Text>

      <Flex justify="space-between" align="center" mb={10} flexWrap="wrap-reverse">
        <Box width={phoneScreen ? "100%" : "65%"}>
          <Heading size="lg" mb={2}>Summary</Heading>
          <List spacing={2} fontSize="xl">
            <ListItem>
              <ListIcon as={Bullet} color="red.500" />
              Since I was in the process of learning React.js, I didn't understand the best practices.
            </ListItem>
            <ListItem>
              <ListIcon as={Bullet} color="red.500" />
              I completely misunderstood the concept of building components.
            </ListItem>
            <ListItem>
              <ListIcon as={Bullet} color="red.500" />
              I rushed out development to have something ready for the fall recruiting season.
            </ListItem>
            <ListItem>
              <ListIcon as={Bullet} color="red.500" />
              I wasn't aware of JavaScript's functional programming paradigms.
            </ListItem>
          </List>
        </Box>
        <Box width={phoneScreen ? "100%" : "30%"}>
          <Image src="../projects/legacy.JPG" width="full" borderRadius={10} my={phoneScreen ? 10 : 0} />
        </Box>
      </Flex>

      <Heading size="lg" mb={5}>What did I learn building this?</Heading>
      <Text fontSize="xl" mb={5}>
        For starters: better practices within React.js! I've learned how to build 
        more function-specific components, and some better ways to handle written content like this.
        It's not perfect yet, but it's a big step forward from my previous implementation. More
        specifically, how to use a new component library, Chakra UI, which I've fallen in love with!
        I also got to gain some additional practice using Next.js and some of its core functions like
        server-side rendering, routing, and more.
      </Text>
    </Box>
  );

  const legacyPortfolio = (
    <Box>
      <Text fontSize="xl">
        The original portfolio I made was the first thing I ever built when I started 
        learning React.js. As such, the code is messy, disorganized, and inconsistent. 
        At best, it's amateur. That being said, from building that original website, I 
        learned a TON.
      </Text>
    </Box>
  );
  // #endregion

  const renderProjectContent = (title) => {
    switch (title) {
      case "Updated Portfolio":
        return updatedPortfolio;
      case "Legacy Portfolio":
        return legacyPortfolio;
      default:
        return;
    }
  }

  return (
    <Box>
      {renderProjectContent(project)}
    </Box>
  );
};

export default ProjectDetailsContent;