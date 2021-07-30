// Components
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  useMediaQuery,
} from '@chakra-ui/react';
import Skill from './Skill';

// Utilities
import { v4 as uuid } from 'uuid'; // eslint-disable-line

const SkillTable = ({ caption, skills }) => {
  const [phoneScreen] = useMediaQuery('(max-width: 600px)');

  return (
    <Table variant='simple' size={caption ? 'sm' : 'md'} mb={20}>
      <TableCaption>
        {caption}
      </TableCaption>
      <Thead>
        <Tr>
          <Th>Language/Framework</Th>
          {!phoneScreen && <Th>Experiences</Th>}
          <Th>Confidence</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          skills.map((tech) => (
            <Skill
              key={uuid()}
              icon={tech.image}
              radii={tech.radii}
              name={tech.title}
              experience={tech.experience}
              rating={tech.rating}
            />
          ))
        }
      </Tbody>
    </Table>
  );
};

export default SkillTable;
