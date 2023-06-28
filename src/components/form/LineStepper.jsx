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
import { useForm } from "@formiz/core";
import { BsCarFrontFill } from "react-icons/bs";

export const LineStepper = ({ type }) => {
  const form = useForm({ subscribe: "form" });
  const firstColor = type === "transport" ? "#6B70D6" : "#FF8D1C";
  const secondColor = type === "transport" ? "#CCC4FB" : "#FFB76F";

  const widthCalculator = (currentStep, numberOfStep) => {
    const totalSteps = numberOfStep - 1; // Nombre total d'étapes
    const stepperWidth = 100; // Largeur totale du stepper en pixels
    const stepWidth = stepperWidth / totalSteps; // Largeur d'une étape
    console.log(currentStep);
    const currentWidth =
      currentStep === 1
        ? "2%"
        : ((currentStep - 1) * stepWidth).toString() + "%";

    console.log(currentWidth);
    return currentWidth;
  };

  return (
    <Stack>
      <Box backgroundColor={firstColor} p="10px" w="91px">
        <HStack>
          <Text color="white" fontWeight={"semibold"}>
            {form?.currentStep?.index + 1 + " / " + form?.steps?.length}
          </Text>
          <BsCarFrontFill color="white" size="30%" />
        </HStack>
      </Box>

      <Box w="100%" height={"23px"} backgroundColor={secondColor}>
        <Box
          height="100%"
          width={widthCalculator(
            form?.currentStep?.index + 1,
            form?.steps?.length
          )} // Ajustez cette valeur pour représenter l'avancement du formulaire
          backgroundColor={firstColor} // Couleur de l'indicateur d'avancement
        />
      </Box>
      <Stack direction="row" justifyContent={"space-between"}>
        {form.steps?.map((step, index) => (
          <Text
            color={step.isCurrent ? firstColor : "#7B7C7C"}
            fontWeight={"semibold"}
            onClick={() => form.goToStep(step.name)}
            cursor={"pointer"}
          >
            {index + 1}
          </Text>
        ))}
      </Stack>
    </Stack>
  );
};
