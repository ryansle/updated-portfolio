// Components
import {
  Heading,
  Box,
  Text,
  Center,
  Button,
  Link,
  useMediaQuery,
} from '@chakra-ui/react';
import { DownloadIcon as Download } from '@chakra-ui/icons';
import AppNavigation from '../components/Navigation/AppNavigation';

const Resume = () => {
  const [phoneScreen] = useMediaQuery('(max-width: 600px)');

  return (
    <AppNavigation width='full' maxWidth='1280px' mx='auto'>
      <Heading size='2xl'>Condensed Portfolio</Heading>
      <Box mt={10}>
        <Text fontSize='xl' mb={10}>
          Sometimes there's not enough time to read through all of the details.
          In that case, here's a condensed version of my portfolio that is scannable
          through your company's applicant tracking system.
        </Text>

        <Box borderRadius='full' mb={20}>
          <Center>
            {phoneScreen && (
              <Link href='./resume.pdf' width='full' download>
                <Button
                  leftIcon={<Download />}
                  width='full'
                  colorScheme='teal'
                >
                  Download Resume
                </Button>
              </Link>
            )}
            {!phoneScreen && (
              <iframe
                src='./resume.pdf'
                width='90%'
                height='800px'
                title='My Resume'
                allowFullScreen=''
                frameBorder='0'
              />
            )}
          </Center>
        </Box>
      </Box>
    </AppNavigation>
  );
};

export default Resume;
