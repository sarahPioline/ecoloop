import {
  Box,
  Container,
  Text,
  Link,
  Stack,
  Image,
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="404"
              height="140"
              viewBox="0 0 404 140"
            >
              <text
                id="Ecoloop"
                transform="translate(0 105)"
                fill="#00cc81"
                font-size="100"
                font-family="Poppins-Bold, Poppins"
                font-weight="700"
              >
                <tspan x="0" y="0" fill="#000">
                  Eco
                </tspan>
                <tspan y="0" fill="#00cc81">
                  loop
                </tspan>
              </text>
            </svg>
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
