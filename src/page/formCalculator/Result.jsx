import {
  Box,
  HStack,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { FaHamburger } from "react-icons/fa";
import { BsCarFrontFill } from "react-icons/bs";
import { AiFillWarning } from "react-icons/ai";

export const Result = ({ valueTransport, valueFood }) => {
  return (
    <Stack>
      <Heading size="xl" mb="20px">
        Bravo tu as fini, voici les résultats ! Reviens nous voir pour l'
        <span style={{ color: "#00CC81" }}>améliorer</span> !{" "}
      </Heading>
      <Box
        h="87px"
        bgColor="#FFB76F"
        borderRightRadius={"44"}
        borderLeftRadius={"14"}
        w="50%"
        display={"flex"}
        alignItems={"center"}
        mb="20px"
      >
        <Box w="150px" bgColor={"#FD8D25"} borderRadius={"14"} h="100%">
          <Stack alignItems={"center"} h="100%" justifyContent={"center"}>
            <FaHamburger color="white" size="50%" margin={"auto"} />

            <Text
              color={"white"}
              fontWeight={"bold"}
              fontSize={"xs"}
              textAlign={"center"}
            >
              {" "}
              Alimentation{" "}
            </Text>
          </Stack>
        </Box>
        <Stack ml="23px" w="100%">
          <Text fontWeight={"bold"} fontSize={"5xl"}>
            2,8 tonnes
          </Text>
        </Stack>
      </Box>
      <Box
        h="87px"
        bgColor="#CCC4FB"
        borderRightRadius={"44"}
        borderLeftRadius={"14"}
        w="50%"
        display={"flex"}
        alignItems={"center"}
        mb="20px"
      >
        <Box w="150px" bgColor={"#6B70D6"} borderRadius={"14"} h="100%">
          <Stack alignItems={"center"} h="100%" justifyContent={"center"}>
            <BsCarFrontFill color="white" size="50%" margin={"auto"} />

            <Text
              color={"white"}
              fontWeight={"bold"}
              fontSize={"xs"}
              textAlign={"center"}
            >
              {" "}
              Moyens de transport{" "}
            </Text>
          </Stack>
        </Box>
        <Stack ml="23px" w="100%">
          <Text fontWeight={"bold"} fontSize={"5xl"}>
            1,8 tonnes
          </Text>
        </Stack>
      </Box>
      <Heading mb="20px" as={"h3"} size={"lg"}>
        Petit récapitulatif pour savoir ou te situer.{" "}
      </Heading>
      <UnorderedList fontWeight={"semibold"} spacing={"3"} mb="20px">
        <ListItem>
          Empreinte carbone de l'
          <span style={{ color: "#FD8D25" }}>alimentation</span> d'un Français :
          2,1 tonnes équivalent CO2
        </ListItem>
        <ListItem>
          Selon les données du CITEPA (Centre interprofessionnel technique
          d'études de la pollution atmosphérique), en 2019, la consommation
          moyenne en CO2 liée aux{" "}
          <span style={{ color: "#6B70D6" }}>transports</span> en France
          s'élevait à environ 2,7 tonnes par personne et par an
        </ListItem>
      </UnorderedList>
      <Box bgColor={"#15797A"} borderRadius={"13"} p="20px">
        <HStack>
          <AiFillWarning color="white" size="10%" />
          <Text color={"white"} fontWeight={"semibold"}>
            Toutes activités confondues, la consommation moyenne de CO2 par
            personne en France était d'environ 10 tonnes de CO2 par an en 2019.
            Cependant, pour limiter le réchauffement climatique à 1,5°C, la
            consommation moyenne de CO2 devrait être considérablement réduite,
            de l'ordre de 2 tonnes de CO2 par personne et par an d'ici 2050.
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};
