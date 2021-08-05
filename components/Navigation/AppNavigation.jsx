// Components
import { Box, useColorMode } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const AppNavigation = ({ children, ...rest }) => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Header />
      <Box px={[4, null, 8]} backgroundColor={colorMode === 'light' ? 'gray.100' : 'gray.900'}>
        <Sidebar
          display={['none', null, 'block']}
          maxWidth='18rem'
          width='full'
        />
        <Box pl={[0, null, '18rem']} marginTop='4rem'>
          <Box
            as='section'
            minHeight='calc(85vh - 4rem)'
          >
            <Box py='2em' {...rest}>
              {children}
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default AppNavigation;
