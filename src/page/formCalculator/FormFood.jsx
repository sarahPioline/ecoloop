import React, { useEffect } from "react";
import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  Wrap,
  Text,
  WrapItem,
  FormLabel,
} from "@chakra-ui/react";
import { FieldRadios } from "../../components/form/FieldRadios";
import { HiInformationCircle } from "react-icons/hi";
import { FieldInput } from "../../components/form/FieldInput";
import { Formiz, FormizStep, useForm } from "@formiz/core";
import { FaHamburger } from "react-icons/fa";
import { LineStepper } from "../../components/form/LineStepper";

export const FormFood = ({
  setTransition,
  setValueFood,
  setActiveFormFood,
  valueFood,
}) => {
  const formFood = useForm({ subscribe: "form" });

  useEffect(() => {
    console.log(formFood);
  }, [formFood]);
  const water = [
    {
      label: "Oui",
      value: "1",
    },
    {
      label: "Non",
      value: "0",
    },
  ];

  const milk = [
    {
      label: "Lait de vache",
      value: "1",
    },
    {
      label: "Lait de soja",
      value: "2",
    },
    {
      label: "Lait d'avoine",
      value: "3",
    },
    {
      label: "Je ne bois pas de lait",
      value: "4",
    },
  ];

  const breakfast = [
    {
      label: "Viennoiserie et baguette",
      value: "1",
    },
    {
      label: "Lait et céréales",
      value: "2",
    },
    {
      label: "Salé (type britanique)",
      value: "3",
    },
    {
      label: "Fruits",
      value: "4",
    },
    {
      label: "Pas de petit-déjeuner",
      value: "5",
    },
  ];
  const handleSubmit = (values) => {
    console.log(values);
    setValueFood(values);
    setTransition(true);
    setActiveFormFood(false);
  };
  return (
    <>
      <Heading size="xl" mb="20px">
        Test bilan carbone, partie alimentation
      </Heading>
      <Formiz
        connect={formFood}
        onValidSubmit={handleSubmit}
        initialValues={valueFood}
      >
        <form noValidate onSubmit={formFood.submitStep}>
          <Stack>
            <HStack>
              <Stack w={"50%"}>
                <LineStepper type="food" />
              </Stack>
              <Stack w={"50%"}>
                <LineStepper type="transport" unactive={true} />
              </Stack>
            </HStack>
            <FormizStep name="step1">
              <HStack mt="30px" mb="30px">
                <HiInformationCircle size="50px" color="#FF8D1C" />
                <Text>
                  Environ 30 % des bouteilles d’eau en plastique sont fabriquées
                  à partir de matériaux recyclés. C’est encore bien trop peu.
                </Text>
              </HStack>
              <FieldRadios
                isRequired={false}
                name="water"
                options={water}
                label="Bois-tu ton eau en bouteille plastique ?"
              />
            </FormizStep>
            <FormizStep name="step2">
              <HStack mt="15px" mb="15px">
                <HiInformationCircle size="50px" color="#FF8D1C" />
                <Text>
                  Les scientifiques affirment, qu’à long terme la consommation
                  de sodas provoque des troubles de la mémoire. De plus, ces
                  boissons sucrées seraient également à l’origine de stress
                  oxydatif, mais aussi de vieillissement cellulaire.
                </Text>
              </HStack>

              <FieldInput
                type="number"
                name="drink"
                label="Quelle est votre consommation par semaine de sodas, jus de fruit, sirops, etc ?"
              />
            </FormizStep>
            <FormizStep name="step3">
              <HStack mt="15px" mb="15px">
                <HiInformationCircle size="50px" color="#FF8D1C" />
                <Text>
                  Les vaches laitières du monde entier sont manipulées
                  génétiquement et reçoivent régulièrement des antibiotiques et
                  des hormones.
                </Text>
              </HStack>
              <FieldRadios
                isRequired={false}
                name="milk"
                options={milk}
                label="Le lait que vous consommez est-il d'origine animale ou végétale ?"
              />
            </FormizStep>
            <FormizStep name="step4">
              <HStack mt="15px" mb="15px">
                <HiInformationCircle size="50px" color="#FF8D1C" />
                <Text>
                  La prise d'un repas le matin fournit le carburant nécessaire à
                  votre corps et à votre cerveau. Il peut également aider à
                  réguler la faim, réduisant ainsi l'envie de grignoter tout au
                  long de la journée.
                </Text>
              </HStack>
              <FieldRadios
                isRequired={false}
                name="breakfast"
                options={breakfast}
                label="Quel petit déjeuner vous correspond le plus ?"
              />
            </FormizStep>
            <FormizStep name="step5">
              <HStack mt="15px" mb="15px">
                <HiInformationCircle size="50px" color="#FF8D1C" />
                <Text>
                  En Amazonie brésilienne, par exemple, 63% de la déforestation
                  est due à l’élevage.
                </Text>
              </HStack>
              <Text fontWeight={"semibold"} fontSize={"25px"} mb={"20px"}>
                Choisissez les plats de vos déjeuners et dîners pour une semaine
                type
              </Text>
              <Wrap spacing="30px">
                <WrapItem w="390px">
                  <HStack>
                    <FieldInput type="number" name="végétalien" w="100px" />
                    <Text fontWeight={"medium"}>Végétalien</Text>
                  </HStack>
                </WrapItem>
                <WrapItem w="390px">
                  <HStack>
                    <FieldInput type="number" name="chiken" w="100px" />
                    <Text fontWeight={"medium"}>Poulet, porc ou fromage</Text>
                  </HStack>
                </WrapItem>
                <WrapItem w="390px">
                  <HStack>
                    <FieldInput type="number" name="salmon" w="100px" />
                    <Text fontWeight={"medium"}>
                      Saumon, thon, sardine ou maquereau
                    </Text>
                  </HStack>{" "}
                </WrapItem>
                <WrapItem w="390px">
                  <HStack>
                    <FieldInput type="number" name="veggie" w="100px" />
                    <Text fontWeight={"medium"}>Végétarien</Text>
                  </HStack>{" "}
                </WrapItem>
                <WrapItem w="390px">
                  <HStack>
                    <FieldInput type="number" name="meet" w="100px" />
                    <Text fontWeight={"medium"}>Boeuf, veau ou agneau</Text>
                  </HStack>{" "}
                </WrapItem>
                <WrapItem w="390px">
                  <HStack>
                    <FieldInput type="number" name="whiteFish" w="100px" />
                    <Text fontWeight={"medium"}>Filet de poisson blanc</Text>
                  </HStack>
                </WrapItem>
              </Wrap>
            </FormizStep>
            <HStack
              mt="59px"
              alignContent={"space-between"}
              justifyContent={"space-between"}
            >
              <PreviousButton />
              <NextButton />
            </HStack>{" "}
          </Stack>
        </form>
      </Formiz>
    </>
  );
};

const PreviousButton = (props) => {
  const form = useForm({ subscribe: "form" });

  if (form.isFirstStep) {
    return <Box />;
  }

  return (
    <Button
      size="sm"
      w="467px"
      onClick={form.prevStep}
      variant="ghost"
      color="#FF8D1C"
      border={"2px"}
      borderRadius={"26"}
      borderColor={"#FF8D1C"}
      {...props}
    >
      Question précédente
    </Button>
  );
};

const NextButton = (props) => {
  const form = useForm({ subscribe: "form" });
  return (
    <Button
      borderRadius={"26"}
      type="submit"
      bg={"#FF8D1C"}
      color="white"
      size="sm"
      w="254px"
      colorScheme="brand"
      isDisabled={
        (form.isLastStep ? !form.isValid : !form.isStepValid) &&
        form.isStepSubmitted
      }
      {...props}
    >
      {form.isLastStep ? "Valider" : "Suivant"}
    </Button>
  );
};
