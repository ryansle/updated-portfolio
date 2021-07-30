// Components
import { Tr, Td, Text } from '@chakra-ui/react';
import { StarIcon as Star } from '@chakra-ui/icons';

// Utilities
import { v4 as uuid } from 'uuid';

const LegendCell = ({ amount }) => {
  const renderText = (stars) => {
    switch (stars) {
    case 5:
      return 'I know exactly what I\'m doing.';
    case 4:
      return 'I have an advanced understanding of it.';
    case 3:
      return 'I\'m as good as the next person with it.';
    case 2:
      return 'I know my way around the documentation.';
    case 1:
      return 'I have a beginner\'s level understanding.';
    default:
      return '';
    }
  };

  return (
    <Tr>
      <Td>
        {
          Array(5)
            .fill('')
            .map((_, i) => (
              <Star
                key={uuid()}
                color={i < amount ? 'teal.500' : 'gray.300'}
                mr={[0, null, 1]}
              />
            ))
        }
      </Td>
      <Td>
        <Text fontSize='sm'>
          {renderText(amount)}
        </Text>
      </Td>
    </Tr>
  );
};

export default LegendCell;
