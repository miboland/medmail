import React, { useState } from "react";
import { useColorMode, Heading, Text, Flex, Stack, Box } from "@chakra-ui/core";
import { NextSeo } from "next-seo";

import { useRouter } from "next/router";

import Container from "../../components/Container";
import ReportCard from "../../components/ReportCard";
import getReports from "../../utils/reporting";

const title = "Medmail";

const Dashboard = ({ reports }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [searchValue, setSearchValue] = useState("");
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  const report = reports.find((report) => report.title === slug);
  const { body } = report;

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
            <Box>
              <Text>{body}</Text>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

Dashboard.getInitialProps = async (ctx) => {
  const reports = await getReports();
  return {
    reports,
  };
};

export default Dashboard;
