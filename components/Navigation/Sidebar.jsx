// Components
import {
  useColorMode,
  Stack,
  Text,
  Box,
  Flex,
  Divider,
  VStack,
  Center,
  Image,
  Heading,
} from '@chakra-ui/react';
import { ComponentLink } from './NavLink'; // eslint-disable-line

// Icons
import {
  AiFillHome as Home,
  AiFillGithub as GitHub,
  AiFillLinkedin as LinkedIn,
  AiOutlinePaperClip as Resume,
} from 'react-icons/ai';
import { IoPerson as Person } from 'react-icons/io5';
import { AtSignIcon as Contact, EditIcon as Credits } from '@chakra-ui/icons';
import {
  MdWork as Work,
  MdCode as Code,
  MdLaptopMac as Mac,
} from 'react-icons/md';

const SideNavLink = ({ href, children, icon }) => (
  <ComponentLink href={href}>
    <Flex align='center' padding={1}>
      <Box as={icon} mr={3} w='24px' />
      <Text fontWeight='bold'>{children}</Text>
    </Flex>
  </ComponentLink>
);

const PageLinks = () => (
  <Stack spacing={0} marginBottom={8}>
    <Center>
      <VStack>
        <Image
          borderRadius='full'
          boxSize='200px'
          boxShadow='md'
          src='https://i.imgur.com/G2OKPI4.png'
          alt='Ryan Le'
          mb='5px'
        />
        <Heading size='sm'>Ryan Le</Heading>
        <Text size='sm' align='center'>
          Software Engineer III @ American Express
        </Text>
      </VStack>
    </Center>

    <br />
    <Divider />
    <br />

    <SideNavLink href='/' icon={Home}>
      Home
    </SideNavLink>
    <SideNavLink href='/about' icon={Person}>
      About
    </SideNavLink>
    <SideNavLink href='/experience' icon={Work}>
      Experience
    </SideNavLink>
    <SideNavLink href='/skills' icon={Code}>
      Skills
    </SideNavLink>
    <SideNavLink href='/projects' icon={Mac}>
      Projects
    </SideNavLink>
    <SideNavLink href='/contact' icon={Contact}>
      Contact
    </SideNavLink>

    <br />
    <Divider />
    <br />

    <Heading size='sm' mb={5}>
      Other Links
    </Heading>
    <SideNavLink href='https://github.com/ryansle' icon={GitHub}>
      GitHub
    </SideNavLink>
    <SideNavLink href='https://www.linkedin.com/in/ryansle/' icon={LinkedIn}>
      LinkedIn
    </SideNavLink>
    <SideNavLink href='/resume' icon={Resume}>
      Resume
    </SideNavLink>
    <SideNavLink href='/credits' icon={Credits}>
      Credits
    </SideNavLink>
    <br />
    {' '}
    <br />
    {' '}
    <br />
  </Stack>
);

const Sidebar = (props) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      backgroundColor={colorMode === 'light' ? 'white' : 'gray.800'}
      position='fixed'
      left='0'
      width='100%'
      height='100%'
      top='0'
      right='0'
      {...props}
    >
      <Box
        top='4em'
        position='relative'
        overflowY='auto'
        borderRightWidth='1px'
        mb={6}
      >
        <Box>
          <Flex
            justify='space-between'
            direction='column'
            height='calc(100vh - 4rem)'
            fontSize='sm'
            p='6'
            pb='3em'
          >
            <PageLinks />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
