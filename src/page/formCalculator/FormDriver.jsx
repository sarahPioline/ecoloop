import {
  Button,
  HStack,
  Heading,
  Stack,
  Text,

} from "@chakra-ui/react";
import { FieldRadios } from "../../components/form/FieldRadios";
import { HiInformationCircle } from "react-icons/hi";
import { FieldInput } from "../../components/form/FieldInput";
import { Formiz, FormizStep, useForm } from "@formiz/core";
import { LineStepper } from "../../components/form/LineStepper";

export const FormDriver = ({
  setValueTransport,
  setActiveFormTransport,
  setActiveFormFood,
  valueTransport,
  setResult,
}) => {
  const formFood = useForm();

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

  const typeCar = [
    {
      label: "Petit",
      value: "1",
    },
    {
      label: "Moyen",
      value: "2",
    },
    {
      label: "Véhicule utilitaire",
      value: "3",
    },
    {
      label: "Berline",
      value: "4",
    },
    {
      label: "SUV",
      value: "5",
    },
  ];

  const full = [
    {
      label: "Gazole (B7 ou B10 )",
      value: "1",
    },
    {
      label: "Essence (E5 ou E10)",
      value: "2",
    },
    {
      label: "Essence (E85)",
      value: "3",
    },
  ];
  const handleSubmit = (values) => {
    setValueTransport(values);
    setResult(true);
  };
  return (
    <>
      <Heading size="xl" mb="20px">
        Test bilan carbone, partie transport
      </Heading>
      <Formiz
        connect={formFood}
        onValidSubmit={handleSubmit}
        initialValues={valueTransport}
      >
        <form noValidate onSubmit={formFood.submitStep}>
          <Stack>
            <HStack>
              <Stack w={"50%"}>
                <LineStepper type="food" unactive={true} />
              </Stack>
              <Stack w={"50%"}>
                <LineStepper type="transport" />
              </Stack>{" "}
            </HStack>{" "}
            <FormizStep name="step1">
              <HStack mt="30px" mb="30px">
                <HiInformationCircle size="50px" color="#6B70D6" />
                <Text>
                  Les émissions de CO2 représentent près de 97 % des émissions
                  de GES des transports. Elles sont essentiellement dues aux
                  émissions du transport routier (94 %). La moitié des émissions
                  de CO2 de l'ensemble des transports (51 %) provient de
                  voitures particulières.
                </Text>
              </HStack>
              <Stack>
                <Text fontWeight={"semibold"} fontSize={"25px"} mb={"20px"}>
                  Quelle distance parcourez-vous à l'année en voiture ?
                </Text>
                <HStack>
                  <FieldInput
                    type="number"
                    noInputStep
                    isRequired={false}
                    name="km"
                    options={water}
                    w="200px"
                  />
                  <Text fontWeight={"semibold"}>Km/An</Text>
                </HStack>
              </Stack>
            </FormizStep>
            <FormizStep name="step2">
              <HStack mt="15px" mb="15px">
                <HiInformationCircle size="50px" color="#6B70D6" />
                <Text>
                  32 millions: c'est le nombre de voitures particulières
                  immatriculées en France selon Eurostat
                </Text>
              </HStack>

              <FieldRadios
                type="number"
                name="drink"
                options={water}
                label="Avez-vous votre propre voiture individuelle ?"
              />
            </FormizStep>
            <FormizStep name="step3">
              <HStack mt="15px" mb="15px">
                <HiInformationCircle size="50px" color="#6B70D6" />
                <Text>
                  Les véhicules plus volumineux et plus lourds tendent à
                  consommer davantage de carburant, ce qui contribue à une
                  augmentation des émissions de dioxyde de carbone (CO2) et
                  d'autres polluants atmosphériques.
                </Text>
              </HStack>
              <FieldRadios
                isRequired={false}
                name="typeCar"
                options={typeCar}
                label="Quel est le gabarit de la voiture ?"
              />
            </FormizStep>
            <FormizStep name="step4">
              <HStack mt="15px" mb="15px">
                <HiInformationCircle size="50px" color="#6B70D6" />
                <Text>
                  La consommation moyenne d'une voiture a un impact écologique
                  significatif, car une réduction de la consommation de
                  carburant contribue à la diminution des émissions de gaz à
                  effet de serre et favorise une conduite plus respectueuse de
                  l'environnement.
                </Text>
              </HStack>
              <Text fontWeight={"semibold"} fontSize={"25px"} mb={"20px"}>
                Connaissez-vous la consommation moyenne de la voiture ?{" "}
              </Text>
              <HStack>
                <FieldInput
                  type="number"
                  noInputStep
                  isRequired={false}
                  name="km"
                  options={water}
                  w="200px"
                />
                <Text fontWeight={"semibold"}>L/centkm</Text>
              </HStack>
            </FormizStep>
            <FormizStep name="step5">
              <HStack mt="15px" mb="15px">
                <HiInformationCircle size="50px" color="#6B70D6" />
                <Text>
                  Le choix du type de carburant des voitures a un impact
                  écologique considérable, car l'adoption de carburants plus
                  propres tels que l'électricité, l'hydrogène ou les
                  biocarburants permet de réduire les émissions polluantes et de
                  favoriser une mobilité plus respectueuse de l'environnement.
                </Text>
              </HStack>
              <FieldRadios
                isRequired={false}
                name="full"
                options={full}
                label="Quel type de carburant votre voiture consomme-t-elle ? Obtenir de l'aide pour cette saisie"
              />
            </FormizStep>
            <HStack
              mt="59px"
              alignContent={"space-between"}
              justifyContent={"space-between"}
            >
              <PreviousButton
                setValueTransport={setValueTransport}
                setActiveFormFood={setActiveFormFood}
                setActiveFormTransport={setActiveFormTransport}
                formFood={formFood}
              />
              <NextButton />
            </HStack>{" "}
          </Stack>
        </form>
      </Formiz>
    </>
  );
};

const PreviousButton = ({
  props,
  setActiveFormFood,
  setValueTransport,
  formFood,
  setActiveFormTransport,
}) => {
  const form = useForm({ subscribe: "form" });

  if (form.isFirstStep) {
    const back = () => {
      setValueTransport(formFood.flatValues);
      setActiveFormFood(true);
      setActiveFormTransport(false);
    };
    return (
      <Button
        size="sm"
        w="467px"
        onClick={() => back()}
        variant="ghost"
        color="#6B70D6"
        border={"2px"}
        borderRadius={"26"}
        borderColor={"#6B70D6"}
        {...props}
      >
        Revenir à la partie alimentation{" "}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      w="467px"
      onClick={form.prevStep}
      variant="ghost"
      color="#6B70D6"
      border={"2px"}
      borderRadius={"26"}
      borderColor={"#6B70D6"}
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
      bg={"#6B70D6"}
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
