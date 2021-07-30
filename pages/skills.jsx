// Components
import {
  Heading,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react';
import AppNavigation from '../components/Navigation/AppNavigation';
import Note from '../components/Note';
import Legend from '../components/Skills/Legend';
import SkillTable from '../components/Skills/SkillTable';

// Content
import {
  webdev, mobiledev, languages, other,
} from '../content/skills';

const Skills = () => (
  <AppNavigation width='full' maxWidth='1280px' mx='auto'>
    <Heading size='2xl' mb={10}>My Skillsets</Heading>
    <Flex justify='space-between' align='flex-start' wrap='wrap'>
      <Box width={['100%', null, null, '54%']}>
        <Heading size='lg' mb={5}>Web Development</Heading>
        <Text fontSize='xl' mb={5}>
          Primarily, my skillsets are in builing web applications - specifically the front-ends.
          I'm hoping in time to pivot more towards full-stack web development so that I can build
          out every aspect of my applications from start to finish. Here are some of my favorite
          technologies to use at the moment:
        </Text>

        <Note>
          Note: Experiences are truncated to
          {' '}
          <b>latest three</b>
          {' '}
          experiences in order to improve readability.
          It has also been hidden from mobile devices, as the tables can't expand large enough.
        </Note>
      </Box>
      <Box width={['100%', null, null, '40%']} mb={[10, null, null, 0]}>
        <Legend />
      </Box>
    </Flex>
    <SkillTable
      caption='Technologies I use regularly in my career as a web developer.'
      skills={webdev}
    />

    <Heading size='lg' mb={5}>Mobile Development</Heading>
    <Text fontSize='xl' mb={5}>
      I had a brief stint in mobile development a while ago. While it wasn't my favorite thing
      in the world, I feel that the year I spent doing gave me enough experience to include
      it on this list with the following technologies:
    </Text>
    <SkillTable
      caption="Things I've familiarized myself with in the past."
      skills={mobiledev}
    />

    <Heading size='lg' mb={5}>Other Programming Languages</Heading>
    <Text fontSize='xl' mb={5}>
      Of course, I've dabbled with other programming languages as well,
      both in and out of the classroom. Here they are:
    </Text>
    <SkillTable
      caption="Languages I don't use super regularly, but am confident in picking back up when needed."
      skills={languages}
    />

    <Heading size='lg' mb={5}>Other Skills</Heading>
    <Text fontSize='xl' mb={5}>
      Some of the other random things I've picked up in college,
      or and during my stints in industry, include:
    </Text>
    <SkillTable
      caption="Frameworks and technologies I've dabbled in that I feel I know how to use."
      skills={other}
    />
  </AppNavigation>
);

export default Skills;
