// Components
import {
  Box,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const AppNavigation = ({ children, ...rest }) => {
  const { colorMode } = useColorMode();
  const [isSmallScreen] = useMediaQuery('(max-width: 767px)');

  return (
    <Box>
      <Header />
      <Box
        px={[4, null, 8]}
        backgroundColor={colorMode === 'light' ? 'gray.100' : 'gray.900'}
      >
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
          {!isSmallScreen && <Footer />}
        </Box>
      </Box>
      {isSmallScreen && <Footer />}
    </Box>
  );
};

export default AppNavigation;
