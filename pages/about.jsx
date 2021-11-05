// Components
import {
  Heading,
  Text,
  HStack,
  Flex,
  Box,
  Image,
  List,
  Divider,
  ListItem,
  ListIcon,
  Icon,
} from '@chakra-ui/react';
import { MdCheckCircle as Check } from 'react-icons/md';
import { FaGraduationCap as Grad } from 'react-icons/fa';
import AppNavigation from '../components/Navigation/AppNavigation';
import SocialMedia from '../components/SocialMedia';

// Utilities
import { v4 as uuid } from 'uuid'; // eslint-disable-line

// Content
import { socials } from '../content/social-media';
import { accomplishments } from '../content/accomplishments';

const About = () => (
  <AppNavigation width='full' maxWidth='1280px' mx='auto'>
    <Heading size='2xl' mb={10}>About Me</Heading>
    <Flex
      justify='space-between'
      align='flex-start'
      mb={20}
      flexWrap='wrap-reverse'
    >
      <Box width={['100%', null, '50%']}>
        <Text fontSize='xl' mb={5}>
          Hey there, my name is Ryan Le and I am a recent graduate of the University of
          Nebraska-Lincoln with a Bachelor of Science degree in Software Engineering.
        </Text>
        <Text fontSize='xl' mb={5}>
          I am an Vietnamese-American front-end developer originally from Sioux Falls,
          South Dakota. I'm currently based out of New York City. I work primarily with
          JavaScript-based technologies like React.js, Node.js, and Chakra UI, among other things.
        </Text>
        <Text fontSize='xl' mb={10}>
          As such, I specialize in web development and enjoy working on projects of all
          shapes and sizes, ranging from deep within the initial design process to building
          out large-scale systems. In time, I am hoping to gain more full-stack experience,
          leveraging tools like Amazon Web Services, Firebase, and Supabase.
        </Text>

        <Heading size='lg' mb={5}>Connect with me on Social Media</Heading>
        <HStack spacing={6}>
          {socials.map((account) => <SocialMedia key={uuid()} channel={account} />)}
        </HStack>
      </Box>
      <Box width={['100%', null, '40%']} align='center'>
        <Image
          src='https://i.imgur.com/TAchISX.jpg'
          width={500}
          borderRadius={10}
          boxShadow='md'
        />
        <Text
          fontSize='lg'
          color='gray'
          mt={5}
          align='center'
          mb={[5, 5, 5, 0]}
        >
          Sandpoint, Idaho, March 2020
        </Text>
      </Box>
    </Flex>

    <Divider />

    <Flex
      justify='space-between'
      align='center'
      mt={20}
      mb={[20, null, null, 20]}
      flexWrap='wrap'
    >
      <Box width={['100%', null, null, '30%']} align='center'>
        <Image
          src='./about/nebraska.svg'
          width={['50%', null, null, '80%']}
          // mb={tabletScreen ? 10 : 0}
          mb={[10, null, null, 0]}
        />
      </Box>
      <Box width={['100%', null, null, '60%']}>
        <Heading size='2xl' mb={5}>Education</Heading>
        <Heading size='lg' mb={2}>University of Nebraska-Lincoln</Heading>
        <Text fontSize='xl'>
          Bachelor of Science in
          {' '}
          <b>Software Engineering</b>
          ; Minor in
          {' '}
          <b>Mathematics</b>
        </Text>
        <Text fontSize='xl'>
          <b>Cumulative GPA</b>
          : 3.636/4.000
        </Text>
        <Text fontSize='xl' mb={10}>
          <b>Graduation Date</b>
          : May 8th, 2021
          {' '}
          <Icon as={Grad} />
        </Text>

        <Heading size='lg' mb={5}>Accomplishments</Heading>
        <List spacing={3}>
          {accomplishments.map((bullet) => (
            <ListItem key={uuid()}>
              <ListIcon as={Check} color='teal.500' />
              {bullet}
            </ListItem>
          ))}
        </List>
      </Box>
    </Flex>
  </AppNavigation>
);

export default About;
