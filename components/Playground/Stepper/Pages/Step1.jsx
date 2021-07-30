// Components
import {
  Box,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react';

// Utilities
import { useRecoilState } from 'recoil';
import { fields as fieldsState } from '../../../../utils/atoms';

const Step1 = () => {
  const [fields, setFields] = useRecoilState(fieldsState);

  const updateFields = (e) => {
    const { name, value } = e.target;
    setFields((details) => ({
      ...details,
      [name]: value,
    }));
  };

  // useEffect(() => {
  //   if (fields.email !== '' && fields.name !== '' && fields.phoneNumber !== '') {
  //     // setComplete(true);
  //   }
  // }, [fields]);

  return (
    <Box px='5em'>
      <Heading mb={5}>Step 1</Heading>
      <Flex justify='space-between'>
        <Box width={['100%', '45%']}>
          <FormControl id='email' mb={5} isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              name='email'
              placeholder='Email Address'
              value={fields.email}
              onChange={updateFields}
            />
            <FormHelperText>We'll never share your email address.</FormHelperText>
          </FormControl>

          <FormControl id='name' mb={5} isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              name='name'
              placeholder='Name'
              value={fields.name}
              onChange={updateFields}
            />
            <FormHelperText>What should we call you?</FormHelperText>
          </FormControl>

        </Box>
        <Box width={['100%', '45%']}>
          <FormControl id='phoneNumber' isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input
              name='phoneNumber'
              placeholder='Phone Number'
              value={fields.phoneNumber}
              onChange={updateFields}
            />
            <FormHelperText>
              For us to send you reminders. You can opt out of this later.
            </FormHelperText>
          </FormControl>
        </Box>
      </Flex>
    </Box>
  );
};

export default Step1;
