import {
  Box,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useForm } from "@formiz/core";
import { BsCarFrontFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";

export const LineStepper = ({ type, unactive = false, valueFood }) => {
  const form = useForm({ subscribe: "form" });
  const firstColor = type === "transport" ? "#6B70D6" : "#FF8D1C";
  const secondColor = type === "transport" ? "#CCC4FB" : "#FFB76F";

  const widthCalculator = (currentStep, numberOfStep) => {
    const totalSteps = numberOfStep - 1; // Nombre total d'étapes
    const stepperWidth = 100; // Largeur totale du stepper en pixels
    const stepWidth = stepperWidth / totalSteps; // Largeur d'une étape
    const currentWidth =
      currentStep === 1
        ? "2%"
        : ((currentStep - 1) * stepWidth).toString() + "%";

    return currentWidth;
  };
  const step = () => {
    const divider = "/" + form?.steps?.length;
    const dividend = unactive
      ? type === "transport"
        ? "0"
        : "5"
      : form?.currentStep?.index + 1;
    return dividend + divider;
  };

  return (
    <Stack>
      <HStack>
        <Box backgroundColor={firstColor} p="10px" w="91px">
          <HStack>
            <Text color="white" fontWeight={"semibold"}>
              {step()}
            </Text>
            {type === "food" ? (
              <FaHamburger color="white" size="30%" />
            ) : (
              <BsCarFrontFill color="white" size="30%" />
            )}
          </HStack>
        </Box>{" "}
        <Box ml="30%">
          <Text color={firstColor} fontWeight={"bold"}>
            {" "}
            {type === "transport" ? "Transport" : "Alimentaire"}
          </Text>
        </Box>
      </HStack>

      <Box w="100%" height={"23px"} backgroundColor={secondColor}>
        <Box
          height="100%"
          width={
            unactive
              ? type === "transport"
                ? "0px"
                : "100%"
              : widthCalculator(
                  form?.currentStep?.index + 1,
                  form?.steps?.length
                )
          } // Ajustez cette valeur pour représenter l'avancement du formulaire
          backgroundColor={firstColor} // Couleur de l'indicateur d'avancement
        />
      </Box>
      <Stack direction="row" justifyContent={"space-between"}>
        {form.steps?.map((step, index) => (
          <Text
            color={
              unactive ? "#7B7C7C" : step.isCurrent ? firstColor : "#7B7C7C"
            }
            fontWeight={"semibold"}
            onClick={() => !unactive && form.goToStep(step.name)}
            cursor={unactive ? "default" : "pointer"}
          >
            {index + 1}
          </Text>
        ))}
      </Stack>
    </Stack>
  );
};
