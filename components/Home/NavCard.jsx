import React from "react";

// Components
import {
  Box,
  Heading,
  Link,
  Button,
  Text,
  Image,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { AiOutlinePaperClip as Resume } from "react-icons/ai";
import { IoPerson as Person } from "react-icons/io5";
import { AtSignIcon as Contact } from "@chakra-ui/icons";
import {
  MdWork as Work,
  MdCode as Code,
  MdLaptopMac as Mac,
} from "react-icons/md";

const NavCard = ({ image, icon, title, description, link, linkText }) => {
  // Responsive hooks
  const [tabletScreen] = useMediaQuery("(max-width: 1400px)");
  const [phoneScreen] = useMediaQuery("(max-width: 600px)");

  const renderIcon = (icon) => {
    switch (icon) {
      case "about":
        return Person;
      case "experience":
        return Work;
      case "skills":
        return Code;
      case "projects":
        return Mac;
      case "contact":
        return Contact;
      case "resume":
        return Resume;
      default:
        return;
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      mx={phoneScreen ? 0 : 4}
      mb={8}
      width={phoneScreen ? "100%" : tabletScreen ? "45%" : "30%"}
    >
      <Image
        src={image}
        objectFit="cover"
        borderTopRadius="lg"
        width="100%"
        height="200px"
      />
      <Box padding={5}>
        <Heading size="lg" pb={3}>
          <Icon as={renderIcon(icon)} /> {title}
        </Heading>
        <Text fontSize="md" mb={5}>
          {description}
        </Text>
        <Link href={link}>
          <Button width="full" colorScheme="teal">
            {linkText}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NavCard;
