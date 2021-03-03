import React from "react";

// Components
import {
  Tr,
  Td,
  Flex,
  Image,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import { StarIcon as Star } from "@chakra-ui/icons";

const Skill = ({ icon, radii, name, experience, rating }) => {
  const [tabletScreen] = useMediaQuery("(max-width: 1400px)");

  return (
    <Tr>
      <Td>
        <Flex align="center">
          {icon && (
            <Image 
              src={icon}
              width="35px" 
              height="35px" 
              mr={3}
              borderRadius={radii ? "full": "none"}
            />
          )}
          <Text fontWeight="bold" fontSize="lg">
            {name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md">
          {experience}
        </Text>
      </Td>
      {
        icon && <Td>
          {
            Array(5)
              .fill("")
              .map((_, i) => (
                <Star 
                  key={i} 
                  color={i < rating ? "teal.500" : "gray.300"} 
                  mr={tabletScreen ? 0 : 1}
                />
              ))
          }
        </Td>
      }
    </Tr>
  );  
};

export default Skill;