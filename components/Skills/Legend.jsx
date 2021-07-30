// Components
import {
  Box,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  TableCaption,
} from '@chakra-ui/react';
import LegendCell from './LegendCell';

const Legend = () => (
  <Box
    width='full'
    borderWidth='1px'
    borderRadius='lg'
    p={3}
  >
    <Table variant='simple' size='sm'>
      <TableCaption>
        Note: All rankings are relative - 5 stars != senior level.
      </TableCaption>
      <Thead>
        <Tr>
          <Th>Confidence</Th>
          <Th>Meaning</Th>
        </Tr>
      </Thead>
      <Tbody>
        <LegendCell amount={5} />
        <LegendCell amount={4} />
        <LegendCell amount={3} />
        <LegendCell amount={2} />
        <LegendCell amount={1} />
      </Tbody>
    </Table>
  </Box>
);

export default Legend;
