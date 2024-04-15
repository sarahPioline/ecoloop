import {
  Box,
  Container,
  Text,
  Link,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
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
        // py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        // justify={{ base: "center", md: "space-between" }}
        //align={{ base: "center", md: "center" }}
        p="50px"
        ml="30px"
      >
        <Wrap spacing="150px">
          <WrapItem>
          <Logo />
          </WrapItem>
          <WrapItem>
            <Stack direction={"row"} spacing={2}>
              <Stack alignItems={"flex-start"}>
                <Text fontWeight={"semibold"}>Navigation</Text>
                <Link href="/">Accueil</Link>{" "}
                <Link href="/news">Actualités</Link>{" "}
                <Link href="/calculator">Bilan carbonne</Link>
                <Link href="/">Contact</Link>
              </Stack>
            </Stack>
          </WrapItem>
        </Wrap>
      </Container>
      <Text textAlign={"center"} pb="20px" fontSize={"2xs"}>
        {"© " + year + " BastienSarahCorp. Tout droit réservé"}
      </Text>

      <Stack alignItems={"center"}></Stack>
    </Box>
  );
};
