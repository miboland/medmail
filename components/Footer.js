import React from "react";
import { Flex, Link, IconButton } from "@chakra-ui/core";

const Footer = () => (
  <Flex justify="center" mb={4}>
    <Link
      href="https://github.com/miboland/medmailectron"
      title="Download"
      isExternal
    >
      <IconButton
        aria-label="Download"
        icon="download"
        size="lg"
        color="gray.500"
        variant="ghost"
      />
    </Link>
    <Link href="https://github.com/miboland/medmail" title="GitHub" isExternal>
      <IconButton
        aria-label="GitHub"
        icon="github"
        size="lg"
        color="gray.500"
        variant="ghost"
      />
    </Link>
    <Link
      href="https://www.linkedin.com/in/miboland-"
      title="LinkedIn"
      isExternal
    >
      <IconButton
        aria-label="LinkedIn"
        icon="linkedin"
        size="lg"
        color="gray.500"
        variant="ghost"
      />
    </Link>
    <Link href="mailto:michael@boland.onl" title="Email" isExternal>
      <IconButton
        aria-label="Email"
        icon="mail"
        size="lg"
        color="gray.500"
        variant="ghost"
      />
    </Link>
  </Flex>
);

export default Footer;
