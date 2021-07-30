// Components
import {
  Heading, Box, Text, Divider,
} from '@chakra-ui/react';
import AppNavigation from '../components/Navigation/AppNavigation';
import Credit from '../components/Credits/Credit';

// Content
import { credits } from '../content/credits';

const Credits = () => (
  <AppNavigation width='full' maxWidth='1280px' mx='auto'>
    <Heading size='2xl'>Credits</Heading>
    <Box mt={10} mb={[40, null, null, 20]}>
      <Text fontSize='xl' mb={10}>
        I had help building this portfolio. A lot of it, actually,
        and it couldn't have ended up looking this nice without any
        one of these peoples help, support, or inspiration.
      </Text>

      {credits.map((person, index) => (
        <Box>
          <Credit person={person} />
          {index !== credits.length - 1 && <Divider my={10} />}
        </Box>
      ))}
    </Box>
  </AppNavigation>
);

export default Credits;
