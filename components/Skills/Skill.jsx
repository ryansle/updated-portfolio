// Components
import {
  Tr,
  Td,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { StarIcon as Star } from '@chakra-ui/icons';

// Utilities
import { v4 as uuid } from 'uuid';

const Skill = ({
  icon,
  radii,
  name,
  experience,
  rating,
}) => {
  const [phoneScreen] = useMediaQuery('(max-width: 600px)');

  return (
    <Tr>
      <Td>
        <Flex align='center'>
          {icon && (
            <Image
              src={icon}
              width='35px'
              height='35px'
              mr={3}
              borderRadius={radii ? 'full' : 'none'}
            />
          )}
          <Text fontWeight='bold' fontSize='lg'>
            {name}
          </Text>
        </Flex>
      </Td>
      {
        !phoneScreen && (
          <Td>
            <Text fontSize='md'>
              {experience}
            </Text>
          </Td>
        )
      }
      {
        icon && (
          <Td>
            {
              Array(5)
                .fill('')
                .map((_, i) => (
                  <Star
                    key={uuid()}
                    color={i < rating ? 'teal.500' : 'gray.300'}
                    mr={[0, null, null, 1]}
                  />
                ))
            }
          </Td>
        )
      }
    </Tr>
  );
};

export default Skill;
