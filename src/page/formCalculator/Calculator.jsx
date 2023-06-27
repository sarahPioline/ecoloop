import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  Grid,
  Text,
} from "@chakra-ui/react";
import { FaHamburger } from "react-icons/fa";
import { BsCarFrontFill } from "react-icons/bs";
import { useState } from "react";
import { FormFood } from "./FormFood";
import { FormDriver } from "./FormDriver";

export const Calculator = () => {
  const [startedTest, setStartedTest] = useState(false);

  return (
    <Stack mr="70px" ml="70px" mt="100px" mb="70px">
      <Heading size="xl" mb="20px" as="u" textDecorationColor={"#6B70D6"}>
        Bilan Carbone{" "}
      </Heading>
      <Stack mb="20px">
        <HStack>
          <Text>
            Tu as fait le bon choix c'est partit ! Ton bilan carbone se passera
            en deux étapes, ton
          </Text>
          <Text color={"#FD8D25"}> alimentation</Text>
          <Text> et tes </Text>
          <Text color={"#6B70D6"}> moyens de transport</Text>
          <Text>.</Text>
        </HStack>
        <HStack>
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            bgColor={"#FD8D25"}
            w="205px"
            h="205px"
            borderRadius={"14"}
          >
            <FaHamburger color="white" size="70%" />
          </Box>
          <Box
            bgColor={"#6B70D6"}
            w="205px"
            h="205px"
            borderRadius={"14"}
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <BsCarFrontFill color="white" size="70%" />
          </Box>
        </HStack>
      </Stack>
      {!startedTest && (
        <Stack>
          <Text fontWeight={"bold"}>Vous êtes prêts à commencer ? </Text>
          <Button
            backgroundColor={"#00CC81"}
            color={"white"}
            borderRadius={"26"}
            w="250px"
            _hover={{ backgroundColor: "#78E2BB" }}
            onClick={() => setStartedTest(true)}
          >
            Commencer le test
          </Button>
        </Stack>
      )}
      {startedTest && <FormFood />}
    </Stack>
  );
};
