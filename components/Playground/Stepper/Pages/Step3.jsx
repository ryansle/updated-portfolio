// Components
import {
  Box,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  PinInput,
  PinInputField,
  FormHelperText,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

// Utilities
import { useRecoilState } from 'recoil';
import { fields as fieldsState } from '../../../../utils/atoms';

const Step3 = () => {
  const [fields, setFields] = useRecoilState(fieldsState);

  const updateFields = (e) => {
    setFields((details) => ({
      ...details,
      pin: e,
    }));
  };

  return (
    <Box px='5em'>
      <Heading mb={5}>Step 3</Heading>
      <Flex justify='space-between'>
        <Box width={['100%', '45%']}>
          <FormControl id='pin' mb={5} isRequired>
            <FormLabel>Set A Pin</FormLabel>
            <HStack>
              <PinInput
                name='pin'
                value={fields.pin}
                onChange={updateFields}
              >
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
            <FormHelperText>This pin will help us to secure your account.</FormHelperText>
          </FormControl>
        </Box>
        <Box width={['100%', '45%']} borderWidth='1px' borderRadius={5} p={5}>
          <Heading size='md' mb={1}>Security Tips</Heading>
          <UnorderedList>
            <ListItem>Don't use a common set of numbers (12346).</ListItem>
            <ListItem>Don't use the same number in succession.</ListItem>
            <ListItem>Don't use an old school ID.</ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </Box>
  );
};

export default Step3;
