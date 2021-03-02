import React from "react";

// Components
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
} from "@chakra-ui/react";
import Skill from "./Skill";

// Utilities
import { v4 as uuid } from "uuid";

const SkillTable = ({ caption, skills }) => {
  return (
    <Table variant="simple" size={caption ? "sm" : "md"} mb={20}>
      <TableCaption>
        {caption}
      </TableCaption>
      <Thead>
        <Tr>
          {caption && <Th>Language/Framework</Th>}
          {!caption && <Th>Skill</Th>}
          <Th>Experiences</Th>
          {caption && <Th>Confidence</Th>}
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