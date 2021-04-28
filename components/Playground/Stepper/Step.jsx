// Components
import { Box, Center, VStack, CircularProgress, Text } from '@chakra-ui/react';
import { CheckCircleIcon as Check } from '@chakra-ui/icons';

const Step = ({ label = '', setStep, index, selected }) => {
  return (
    <Box cursor='pointer' onClick={() => setStep(index)}>
      <Center>
        <VStack>
          {selected === index && (
            <CircularProgress
              size='20px'
              color='gray.500'
              trackColor='teal.500'
              isIndeterminate
            />
          )}

          {selected !== index && selected > index && (
            <Check width='20px' height='auto' color='teal.500' />
          )}

          {selected !== index && selected < index && (
            <CircularProgress
              size='20px'
              color='gray.500'
              trackColor='gray.500'
            />
          )}

          <Text mt={1}>{label}</Text>
        </VStack>
      </Center>
    </Box>
  );
};

export default Step;
