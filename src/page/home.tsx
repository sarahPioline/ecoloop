import { Button, HStack, Stack, Text, Link } from "@chakra-ui/react";
import Menu from "../componants/menu";
import { ReactComponent as HomeEarth } from "../images/homeEarth.svg";
import { ReactComponent as Arrow } from "../images/arrow.svg";
import { ActualityHome } from "../componants/ActualityHome";

export const Home = () => {
  return (
    <Stack>
      <Stack
        ml="70px"
        mr="70px"
        direction={{ base: "column", sm: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack>
          <Text fontSize={"35px"} fontWeight={"600"} margin={"0"}>
            Améliore ton bilan carbone.{" "}
          </Text>
          <HStack>
            <Text fontSize={"35px"} margin={"0"} fontWeight={"600"}>
              Et te
            </Text>
            <Text
              color={"#00CC81"}
              fontSize={"35px"}
              margin={"0"}
              fontWeight={"600"}
            >
              loop
            </Text>
            <Text fontSize={"35px"} margin={"0"} fontWeight={"600"}>
              pas sur les prochaines années.
            </Text>
          </HStack>
          <Stack w="48%">
            <Text>Cela ne te prendra que 5 minutes promis.</Text>
            <Link href="/calculator">
              <Button
                backgroundColor={"#00CC81"}
                color={"white"}
                borderRadius={"26"}
                _hover={{ backgroundColor: "#78E2BB" }}
              >
                Ton bilan carbonne ici
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Stack boxSize="xl">
          <HomeEarth />
        </Stack>
      </Stack>
      <Stack alignItems={"center"} ml="70px" mr="70px">
        <Text>Regarde l'actualité autour de l'écologie ça vaut le coup !</Text>
        <Arrow />
      </Stack>
      <ActualityHome />
    </Stack>
  );
};
