import { Box, Container, Text, Link, Stack, Image } from "@chakra-ui/react";
import { ReactComponent as Logo } from "../logo.svg";
import footerBackground from "../images/footerBackground.png";
export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box
      backgroundImage={`url(${footerBackground})`}
      bgSize="cover"
      // bgPosition="center"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        //align={{ base: "center", md: "center" }}
        alignItems={"flex-end"}
      >
        <Logo />
        <Text>{"© " + year + " BastienSarahCorp. Tout droit réservé"}</Text>

        <Stack direction={"row"} spacing={2}>
          <Stack alignItems={"flex-start"}>
            <Text fontWeight={"semibold"}>Navigation</Text>
            <Link href="/">Accueil</Link> <Link href="/news">Actualités</Link>{" "}
            <Link href="/calculator">Bilan carbonne</Link>
            <Link href="/">Contact</Link>
          </Stack>
        </Stack>
      </Container>
      <Stack alignItems={"center"}></Stack>
    </Box>
  );
};
