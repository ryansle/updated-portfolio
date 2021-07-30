// Components
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Textarea,
} from '@chakra-ui/react';

// Utilities
import { useRecoilState } from 'recoil';
import { fields as fieldsState } from '../../../../utils/atoms';

const Step2 = () => {
  const colors = ['Red', 'Blue', 'Green', 'Yellow'];

  const [fields, setFields] = useRecoilState(fieldsState);

  const updateFields = (e) => {
    const { name, value } = e.target;
    setFields((details) => ({
      ...details,
      [name]: value,
    }));
  };

  return (
    <Box px='5em'>
      <Heading mb={5}>Step 2</Heading>
      <FormControl id='favoriteColor' mb={5} isRequired>
        <FormLabel>Favorite Color</FormLabel>
        <Select
          name='favoriteColor'
          placeholder='Select option'
          value={fields.favoriteColor}
          onChange={updateFields}
        >
          {colors.map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </Select>
      </FormControl>

      <FormControl id='whyFavorite' mb={5} isRequired>
        <FormLabel>Why is this your favorite color?</FormLabel>
        <Textarea
          name='whyFavorite'
          placeholder='Select option'
          value={fields.whyFavorite}
          onChange={updateFields}
        />
      </FormControl>
    </Box>
  );
};

export default Step2;
