// Components
import { Box, Text, useColorMode } from '@chakra-ui/react';

const Note = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      width='full'
      borderRadius={10}
      p={3}
      pl={5}
      backgroundColor={colorMode === 'light' ? '#FDEBC8' : '#3E3D3C'}
      borderLeftWidth='6px'
      borderLeftColor={colorMode === 'light' ? '#DD6B21' : '#FAD38D'}
      borderLeftStyle='inherit'
      mb={10}
    >
      <Text fontSize='lg'>
        {children}
      </Text>
    </Box>
  );
};

export default Note;
