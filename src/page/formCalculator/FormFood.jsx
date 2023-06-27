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
import { FieldRadios } from "../../components/form/FieldRadios";
import { HiInformationCircle } from "react-icons/hi";
import { FieldInput } from "../../components/form/FieldInput";
import { Formiz, FormizStep, useForm } from "@formiz/core";

export const FormFood = () => {
  const formFood = useForm({ subscribe: "form" });

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
  const handleSubmit = (values) => {
    console.log(values); // Retrieves values after submit
  };
  return (
    <Formiz connect={formFood} onValidSubmit={handleSubmit}>
      <form noValidate onSubmit={formFood.submitStep}>
        <Stack>
          <Stack spacing="6" mt="8">
            <StepperWrapper />{" "}
          </Stack>
          <FormizStep name="step1">
            <HStack mt="15px" mb="15px">
              <HiInformationCircle size="50px" color="#FF8D1C" />
              <Text>
                Environ 30 % des bouteilles d’eau en plastique sont fabriquées à
                partir de matériaux recyclés. C’est encore bien trop peu.
              </Text>
            </HStack>
            <FieldInput
              type="number"
              name="drink"
              label="Quelle est votre consommation par semaine de sodas, jus de fruit, sirops, etc. ?"
            />
          </FormizStep>
          <FormizStep name="step2">
            <FieldRadios name="water" options={water} />
          </FormizStep>
          <FormizStep name="step3">
            <FieldRadios name="milk" options={water} />
          </FormizStep>
          <HStack alignContent={"space-between"}>
            <PreviousButton />
            <NextButton />
          </HStack>{" "}
        </Stack>
      </form>
    </Formiz>
  );
};

const PreviousButton = (props) => {
  const form = useForm({ subscribe: "myForm" });

  if (form.isFirstStep) {
    return <Box />;
  }

  return (
    <Button
      size="sm"
      onClick={form.prevStep}
      variant="ghost"
      color="#FF8D1C"
      border={"2px"}
      borderColor={"#FF8D1C"}
      {...props}
    >
      Previous
    </Button>
  );
};

const NextButton = (props) => {
  const form = useForm({ subscribe: "myForm" });
  return (
    <Button
      type="submit"
      bg={"#FF8D1C"}
      color="white"
      size="sm"
      colorScheme="brand"
      isDisabled={
        (form.isLastStep ? !form.isValid : !form.isStepValid) &&
        form.isStepSubmitted
      }
      {...props}
    >
      {form.isLastStep ? "Submit" : "Next"}
    </Button>
  );
};

const DotsStepper = (props) => {
  const form = useForm({ subscribe: "myForm" });
  const spacing = 4;

  return (
    <Stack
      direction="row"
      display="flex"
      alignItems="center"
      justifyContent="center"
      spacing={spacing}
      {...props}
    >
      {form.steps?.map((step) => {
        const inactiveProps = !step.isVisited
          ? {
              bg: "#FF8D1C",
              color: "white",
            }
          : {};

        const visitedProps =
          step.isVisited && !step.isCurrent
            ? {
                bg: "white",
                color: "brand.500",
                borderColor: "currentColor",
                as: "button",
                type: "button",
                onClick: () => form.goToStep(step.name),
                _hover: {
                  bg: "brand.500",
                  color: "white",
                  borderColor: "brand.500",
                },
                _focus: {
                  boxShadow: "outline",
                },
              }
            : {};

        const currentProps = step.isCurrent
          ? {
              zIndex: 1,
              bg: "#FFB76F",
              color: "white",
            }
          : {};

        return (
          <AspectRatio key={step.name} w="6" ratio={1}>
            <Box
              zIndex={0}
              borderRadius="full"
              border="2px solid transparent"
              fontWeight={step.isCurrent || step.isVisited ? "bold" : null}
              outline="none"
              fontSize="xs"
              overflow="visible"
              transition="0.2s"
              _after={
                step.index !== 0
                  ? {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      mt: "-1px",
                      mr: "2px",
                      top: "50%",
                      right: "100%",
                      bg:
                        step.isVisited || step.isCurrent
                          ? "brand.500"
                          : "gray.100",
                      h: "2px",
                      w: spacing,
                    }
                  : null
              }
              {...inactiveProps}
              {...visitedProps}
              {...currentProps}
            >
              {step.index + 1}
            </Box>
          </AspectRatio>
        );
      })}
    </Stack>
  );
};

const StepperWrapper = ({ title, children, ...rest }) => (
  <Stack {...rest}>
    {title && <Heading fontSize="md">{title}</Heading>}
    <Box bg="gray.50" p="4" borderRadius="md">
      <Grid templateColumns="1fr 2fr 1fr" alignItems="center">
        {children}
      </Grid>
    </Box>
  </Stack>
);
