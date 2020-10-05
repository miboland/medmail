import React from "react";
import {
  Flex,
  Link,
  Heading,
  Text,
  Stack,
  Icon,
  useColorMode,
} from "@chakra-ui/core";

import NextLink from "next/link";

const ProjectCard = ({ report, searchValue }) => {
  const { title, body } = report;
  const route = searchValue
    ? `archive/${title}?q=${searchValue}`
    : `archive/${title}`;
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };
  const iconColor = {
    light: "gray.1000",
    dark: "white",
  };

  return (
    <NextLink href={`archive/[slug]?q=${searchValue}`} as={route} passHref>
      <Link
        as="a"
        mb={4}
        _hover={{
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          textDecoration: "none",
        }}
      >
        <Flex
          align="center"
          border="1px solid"
          borderColor={borderColor[colorMode]}
          borderRadius={4}
          p={4}
        >
          {/* <Icon
          aria-label="LinkedIn"
          name={icon}
          color={iconColor[colorMode]}
          size="32px"
          ml={2}
          mr={4}
        /> */}
          <Stack>
            <Heading
              as="h4"
              size="md"
              fontWeight="bold"
              mb={4}
              letterSpacing="tighter"
            >
              {title}
            </Heading>
            <Text lineHeight="1.3">{body}</Text>
          </Stack>
        </Flex>
      </Link>
    </NextLink>
  );
};

export default ProjectCard;
