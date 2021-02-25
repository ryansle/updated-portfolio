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
  Link,
  Code,
  useMediaQuery
} from "@chakra-ui/react";
import { 
  NotAllowedIcon as Bullet, 
  CheckIcon as Check 
} from "@chakra-ui/icons";

// Content
import { hoffmanGallery } from "../../content/projects/hoffman-gallery";

// Utilities
import { v4 as uuid } from "uuid";

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
          <Image 
            src="../projects/legacy.JPG" 
            width="full" 
            borderRadius={10} 
            my={phoneScreen ? 10 : 0} 
          />
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
      <Text fontSize="xl" mb={10}>
        The original portfolio I made was the first thing I ever built when I started 
        learning React.js. As such, the code is messy, disorganized, and inconsistent. 
        At best, it's amateur. That being said, from building that original website, I 
        learned a TON.
      </Text>

      <Heading size="lg" mb={5}>Motivation</Heading>
      <Text fontSize="xl" mb={10}>
        After all, that was the whole reason I even built it in the first place: to
        learn something new while also showcasing my current skillsets to start
        searching for new work opportunities. Up to this point in my college career, I
        hadn't really 'focused' on any aspect of software development yet: I had tried
        my hands at developing VR games, general scripting in Python, and done mobile
        development in Swift. But none of that had really piqued my interest. On top
        of that, I had recently lost a planned internship where I was going to learn
        fundamental web development concepts, and just wanted to spend some time over
        the summer learning <i>something.</i>
      </Text>

      <Heading size="lg" mb={5}>How did I get started?</Heading>
      <Text fontSize="xl" mb={10}>
        I was lucky enough at the time of getting started to have friends who were more
        than experienced with React.js. Initially, I received a lot of inspiration and help
        building out my personal website from my friends{" "} 
        <Link href="https://msich.dev/" color="teal.500">Matt Sichterman</Link>{" "}
        and <Link href="https://www.peytontanzillo.com" color="teal.500">Peyton Tanzillo</Link>.
        Not only were they able to answer my questions when I would get stuck, but they
        were able to point me to different online resources to aid in my learning of the framework.
        Probably the resource I used the most in getting started was{" "}
        <Link href="https://www.freecodecamp.org/" color="teal.500">freecodecamp.org</Link>. They
        provided me the baseline information I needed to understand how to <i>use</i> React.js,
        just not how to use it correctly and as intended.
      </Text>

      <Heading size="lg" mb={2}>What did I learn?</Heading>
      <List spacing={2} fontSize="xl">
        <ListItem>
          <ListIcon as={Check} color="green.500" />
          What a component library was in React.js and how to use one
        </ListItem>
        <ListItem>
          <ListIcon as={Check} color="green.500" />
          The basic ideas behind React.js, component building, and state
        </ListItem>
        <ListItem>
          <ListIcon as={Check} color="green.500" />
          Bare basics of web development practices and principles 
        </ListItem>
      </List>
    </Box>
  );

  const cardholderPortal = (
    <Box>

    </Box>
  );

  const hoffmanAnalytics = (
    <Box>
      <Text fontSize="xl" mb={5}>
        Hoffman Analytics was an ambitious project that aimed to consolidate 
        the groups' daily workflows in date warehousing, project management, 
        report generation, and business intelligence.{" "}
        <Link href="https://msich.dev" color="teal.500">Matt Sichterman</Link>{" "}
        and I worked to redevelop the existing senior design solution into something
        both more maintainable and more cohesive.
      </Text>
      <Text fontSize="xl" mb={10}>
        Through months of collaboration, Matt and I rebuilt the entire platform from
        the ground up using new technologies such as Material-UI and a variety of
        Amazon Web Services while primarily learning on one another (and StackOverflow!)
        when we faced problems.
      </Text>
      
      <Heading size="lg" mb={5}>What did I learn?</Heading>
      <Text fontSize="xl" mb={5}>
        Working with the Hoffman Strategy Group was an excellent way to break into the 
        web development domain of software engineering. It also helped that my partner
        Matt had been sharpening his web development skills previously over the last year,
        and was always able to point me in the right direction of growth as a newbie
        web developer. Thanks to my time with the Hoffman Strategy Group, I learned how to:
      </Text>
      <List spacing={2} fontSize="xl" mb={10}>
        <ListItem>
          <ListIcon as={Check} color="green.500" />
          Develop responsive React.js front-ends from the ground up
        </ListItem>
        <ListItem>
          <ListIcon as={Check} color="green.500" />
          Manage diverse client expectations from non-technical stakeholders
        </ListItem>
        <ListItem>
          <ListIcon as={Check} color="green.500" />
          Continue to practice leading the development of large-scale software systems
        </ListItem>
        <ListItem>
          <ListIcon as={Check} color="green.500" />
          Work with modern web development frameworks and technologies like React.js, Material-UI, and Amazon Web Services
        </ListItem>
      </List>

      <Heading size="lg" mb={5}>Gallery</Heading>
      {
        hoffmanGallery.map((photo) => (
          <Box key={uuid()} mb={10}>
            <Image src={photo.image} borderRadius={5} mb={3}/>
            <Text fontSize="xl" color="gray" align="center">
              {photo.description}
            </Text>
          </Box>
        ))
      }
    </Box>
  );

  const dtcReportGenerator = (
    <Box>

    </Box>
  );

  const grouve = (
    <Box>

    </Box>
  );

  const socialMediaMarketing = (
    <Box>

    </Box>
  );

  const vrSpaceExplorer = (
    <Box>

    </Box>
  );
  // #endregion

  const renderProjectContent = (title) => {
    switch (title) {
      case "Updated Portfolio":
        return updatedPortfolio;
      case "Legacy Portfolio":
        return legacyPortfolio;
      case "Cardholder Portal":
        return cardholderPortal;
      case "Hoffman Analytics":
        return hoffmanAnalytics;
      case "DTC Report Generator":
        return dtcReportGenerator;
      case "Grouve":
        return grouve;
      case "Social Media Marketing":
        return socialMediaMarketing;
      case "Virtual Reality Space Explorer":
        return vrSpaceExplorer;
      default:
        return;
    }
  }

  return (
    <Box mt={10}>
      {renderProjectContent(project)}
    </Box>
  );
};

export default ProjectDetailsContent;