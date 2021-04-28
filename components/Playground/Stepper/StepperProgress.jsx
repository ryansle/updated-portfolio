// Components
import { Box } from '@chakra-ui/react';

const StepperProgress = ({ index, selected }) => {
  return (
    <Box>
      {index !== '' && (
        <Box
          height='2px'
          width='6em'
          backgroundColor={selected > index ? 'teal.500' : 'gray.500'}
          mx={5}
        />
      )}
    </Box>
  );
};

export default StepperProgress;
