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
import { Result } from "./Result";

export const Calculator = () => {
  const [activeFormFood, setActiveFormFood] = useState(false);
  const [activeFormTransport, setActiveFormTransport] = useState(false);

  const [valueFood, setValueFood] = useState({});
  const [valueTransport, setValueTransport] = useState({});
  const [transition, setTransition] = useState(false);
  const [result, setResult] = useState(false);
  console.log(result);
  return (
    <Stack mr="70px" ml="70px" mt="100px" mb="70px">
      {result ? (
        <Stack>
          <Result valueTransport={valueTransport} valueFood={valueFood} />
        </Stack>
      ) : (
        <Stack>
          {!activeFormFood && !activeFormTransport && !transition && (
            <>
              <Heading
                size="xl"
                mb="20px"
                as="u"
                textDecorationColor={"#6B70D6"}
              >
                Bilan Carbone{" "}
              </Heading>

              <Stack mb="20px">
                <HStack>
                  <Text>
                    Tu as fait le bon choix c'est partit ! Ton bilan carbone se
                    passera en deux étapes, ton
                    <span style={{ color: "#FD8D25" }}> alimentation </span>
                    et tes{" "}
                    <span style={{ color: "#6B70D6" }}>
                      moyens de transport
                    </span>
                    .
                  </Text>
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

              <Stack>
                <Text fontWeight={"bold"}>Vous êtes prêts à commencer ? </Text>
                <Button
                  backgroundColor={"#00CC81"}
                  color={"white"}
                  borderRadius={"26"}
                  w="250px"
                  _hover={{ backgroundColor: "#78E2BB" }}
                  onClick={() => setActiveFormFood(true)}
                >
                  Commencer le test
                </Button>
              </Stack>
            </>
          )}
          {transition && (
            <Stack mr="70px" ml="70px" mb="70px">
              <Heading size="xl" mb="20px">
                <HStack>
                  <Text>C'est fini pour l'</Text>{" "}
                  <Text color="#FD8D25">alimentation</Text>
                  <Text>, on passe au</Text>{" "}
                  <Text color="#6B70D6">transport</Text>{" "}
                </HStack>
              </Heading>
              <Text fontWeight={"semibold"} mb="20px">
                Tu as déjà fait la moitié du chemin ! Si tu veux t'arrêter ici
                car tu dois y aller tu peux, ta progression est sauvegardé
                automatiquement pour pouvoir reprendre un test que tu as
                commencé, ou même refaire un test pour comparer avec tes anciens
                résultats.
              </Text>
              <Button
                backgroundColor={"#00CC81"}
                color={"white"}
                borderRadius={"26"}
                w="400px"
                _hover={{ backgroundColor: "#78E2BB" }}
                onClick={() => {
                  setActiveFormTransport(true);
                  setTransition(false);
                }}
              >
                On commence la partie transport{" "}
              </Button>
            </Stack>
          )}
          {activeFormFood && (
            <FormFood
              setTransition={setTransition}
              setActiveFormFood={setActiveFormFood}
              setValueFood={setValueFood}
              valueFood={valueFood}
            />
          )}
          {activeFormTransport && (
            <FormDriver
              setValueTransport={setValueTransport}
              setActiveFormFood={setActiveFormFood}
              setActiveFormTransport={setActiveFormTransport}
              valueTransport={valueTransport}
              setResult={setResult}
            />
          )}
        </Stack>
      )}
    </Stack>
  );
};
