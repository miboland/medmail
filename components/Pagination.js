import React from "react";
import NextLink from "next/link";
import { useColorMode, Button, Text, Flex, Box, Link } from "@chakra-ui/core";

const Pagination = ({ reports, slug, query }) => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  const pages = reports.map((report) => report.title);
  const index = reports.findIndex((report) => report.title === slug);

  return (
    <Box mt={4}>
      <Flex>
        {slug !== reports.shift().title && (
          <NextLink
            href={query ? `[slug]?q=${query}` : `[slug]`}
            as={
              query ? `${pages[index - 1]}?q=${query}` : `${pages[index - 1]}`
            }
          >
            <Link as="a">
              <Button leftIcon="arrow-back" variant="subtle">
                Previous Report
              </Button>
            </Link>
          </NextLink>
        )}
        {slug === [...reports].shift().title &&
          slug === reports.pop().title && (
            <Divider orientation="vertical"></Divider>
          )}
        {slug !== [...reports].pop().title && (
          <NextLink
            href={query ? `[slug]?q=${query}` : `[slug]`}
            as={
              query ? `${pages[index + 1]}?q=${query}` : `${pages[index + 1]}`
            }
            passHref
          >
            <Link as="a">
              <Button rightIcon="arrow-forward" variant="subtle">
                Next Report
              </Button>
            </Link>
          </NextLink>
        )}
      </Flex>
    </Box>
  );
};

export default Pagination;
