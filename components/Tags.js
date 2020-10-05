import React from "react";
import { useColorMode, Flex, Tag, TagIcon, TagLabel } from "@chakra-ui/core";
import styled from "@emotion/styled";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag } from "../utils/drag";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 85px;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Tags = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "gray.900",
  };
  const primarytextColor = {
    light: "black",
    dark: "white",
  };
  const navBgColor = {
    light: "rgba(255, 255, 255, 1)",
    dark: "rgba(23, 25, 35, 1)",
  };

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        bg={navBgColor[colorMode]}
        as="nav"
        p={8}
        mt={[0, 2]}
        mb={2}
        mx="auto"
      >
        <Flex>
          <Tag size="sm" variantColor="yellow" mx={1}>
            <TagIcon icon="star" size="12px" />
            <TagLabel>Starred</TagLabel>
          </Tag>
          <Tag size="sm" variantColor="green">
            <TagIcon icon="check" size="12px" />
            <TagLabel>Good Report</TagLabel>
          </Tag>
          <Tag size="sm" variantColor="red" mx={1}>
            <TagIcon icon="bell" size="12px" />
            <TagLabel>Condition Present</TagLabel>
          </Tag>
        </Flex>
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
      >
        {children}
      </Flex>
    </>
  );
};

export default Tags;
