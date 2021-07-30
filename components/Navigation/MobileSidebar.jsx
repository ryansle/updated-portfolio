import { useEffect } from 'react';

// Components
import {
  Drawer,
  DrawerBody,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Sidebar from './Sidebar';

// Utilities
import { useRouter } from 'next/router'; // eslint-disable-line

const useRouteChanged = (callback) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      callback();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, callback]);
};

const MobileSidebar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  useRouteChanged(onClose);

  return (
    <>
      <IconButton
        aria-label='Navigation Menu'
        fontSize='20px'
        variant='ghost'
        display={{ sm: 'inline-flex', md: 'none' }}
        color='gray.500'
        icon={<HamburgerIcon />}
        onClick={onToggle}
        ml='1em'
      />
      <Drawer size='xs' isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody padding={0}>
            <Sidebar height='100vh' top='0' />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileSidebar;
