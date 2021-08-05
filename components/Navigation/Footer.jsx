// Components
import {
  Box,
  Flex,
  Text,
  HStack,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import SocialMedia from '../SocialMedia';

// Content
import { socials } from '../../content/social-media';

// Utilities
import { v4 as uuid } from 'uuid'; // eslint-disable-line

const Footer = () => {
  const { colorMode } = useColorMode();
  const bg = { light: 'white', dark: 'gray.800' };

  return (
    <Box
      as='footer'
      borderTopWidth='1px'
      bg={bg[colorMode]}
      py='2rem'
      px={['10%', '14%']}
      mx={[0, null, '-2rem']}
    >
      <Flex align='center' justify='space-between' wrap='wrap'>
        <Box>
          <HStack spacing={6} mb={3}>
            {socials.map((account) => <SocialMedia key={uuid()} channel={account} />)}
          </HStack>
          <Text fontSize='md' mb={3}>
            Copyright &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            Ryan Le. All Rights Reserved.
          </Text>
        </Box>
        <Box>
          <Text fontSize='md' mb={1}>
            Portfolio created with
            {' '}
            <Link href='https://nextjs.org/' color='teal.500'>Next.js</Link>
            {' '}
            and
            {' '}
            <Link href='https://chakra-ui.com/' color='teal.500'>Chakra UI</Link>
            {' '}
            components.
          </Text>
          <Text fontSize='md' mb={3}>
            Hosted on
            {' '}
            <Link href='https://vercel.com/dashboard' color='teal.500'>Vercel</Link>
            .
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
