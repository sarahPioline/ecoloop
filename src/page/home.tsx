import { Button,  Stack, Text, Link } from "@chakra-ui/react";
import { ReactComponent as HomeEarth } from "../images/homeEarth.svg";
import { ReactComponent as Arrow } from "../images/arrow.svg";
import { ActualityHome } from "../components/ActualityHome";

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
        <Stack gap={0}>
          <Text fontSize={"35px"} fontWeight={"600"} margin={"0"}>
            Améliore ton bilan carbone.
          </Text>
          <Text fontSize={"35px"} margin={"0"} fontWeight={"600"}>
            Et te <span style={{ color: "#00CC81" }}>loop</span> pas sur les
            prochaines années.
          </Text>
          <Stack w="48%" mt="10px">
            <Text>Cela ne te prendra que 5 minutes promis.</Text>

            <Link href="/calculator" mt="10px">
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
