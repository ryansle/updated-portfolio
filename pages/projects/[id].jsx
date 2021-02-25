import React from "react";

// Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Wrap,
  Box,
  Heading,
  Text,
  Link,
  Icon,
  Tag,
} from "@chakra-ui/react";
import { 
  ChevronRightIcon as ChevronRight, 
  LinkIcon as Chain, 
} from "@chakra-ui/icons";
import { AiFillGithub as GitHub } from "react-icons/ai"
import AppNavigation from "../../components/Navigation/AppNavigation";

// Content
import projectDetails from "../../content/projects/project-details.json";
import ProjectDetailsContent from "../../content/projects/ProjectDetailsContent";

// Utilities
import { v4 as uuid } from "uuid";

const ProjectPage = (props) => {
  return (
    <AppNavigation width="full" maxWidth="1280px" mx="auto">
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRight color="gray.500" />}
        fontSize="xl"
        mb={5}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">{props.details.title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex justify="space-between" align="center">
        <Box width="50%">
          <Heading size="2xl" mb={2}>
            {props.details.title}
          </Heading>
          {
            props.details.link !== "" && (
              <Text color="#3492D0" fontSize="lg">
                <Chain />:{" "}
                <Link href={props.details.link}>
                  {props.details.link}
                </Link> 
              </Text>
            )
          }
          {
            props.details.github !== "" && (
              <Text color="#3492D0" fontSize="lg">
                <Icon as={GitHub} />:{" "} 
                <Link>
                  {props.details.github}
                </Link>
              </Text>
            )
          }
        </Box>
        <Wrap width="50%" justify="flex-end">
          {
            props.details.stack.map((tech) => (
              <Tag
                key={uuid()}
                size="lg"
                colorScheme="teal"
                borderRadius="full"
                margin={1}
              >
                {tech}
              </Tag>
            ))
          }
        </Wrap>
      </Flex>

      <ProjectDetailsContent project={props.details.title} />
    </AppNavigation>
  );
};

ProjectPage.getInitialProps = ({ query }) => {
  return {
    details: projectDetails[query.id],
  };
};

export default ProjectPage;
