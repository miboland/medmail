import React from "react";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Box,
  Icon,
  Button,
} from "@chakra-ui/core";
import { NextSeo } from "next-seo";

import { useRouter } from "next/router";
import NextLink from "next/link";

import Container from "../../components/Container";
import Pagination from "../../components/Pagination";
import getReports from "../../utils/reporting";

const title = "Medmail";

const Report = ({ reports }) => {
  const router = useRouter();
  const { slug } = router.query;
  const query = router.query.q ? router.query.q : null;

  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  const report = reports.find((report) => report.title === slug);
  const { body } = report;

  const filteredReports = query
    ? reports.filter((report) =>
        report.body.toLowerCase().includes(query.toLowerCase())
      )
    : reports;

  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          title,
        }}
      />
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
              {slug.charAt(0).toUpperCase() + slug.slice(1)}
            </Heading>
            <Box minHeight="200px">
              <Text>{body}</Text>
            </Box>
            {query && (
              <Box mt={10}>
                <Text color={secondaryTextColor[colorMode]}>
                  {filteredReports.length - 1} More Reports Containing "{query}"
                </Text>
              </Box>
            )}
            <Pagination reports={filteredReports} slug={slug} query={query} />
            {query && (
              <Box>
                <Box mt={10}>
                  <NextLink href={`[slug]`} as={slug} passHref>
                    <Flex mt={6} alignItems="baseline" as="a">
                      <Button>
                        <Icon mr={1} name="small-close" color="red.500" />
                        remove query "{query}"
                      </Button>
                    </Flex>
                  </NextLink>
                </Box>
              </Box>
            )}
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

Report.getInitialProps = async (ctx) => {
  const reports = await getReports();
  return {
    reports,
  };
};

export default Report;
