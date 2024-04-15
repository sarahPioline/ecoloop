import React, { useEffect, useState } from "react";

import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spinner,
} from "@chakra-ui/react";
import { FieldProps, useField } from "@formiz/core";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

import { FormGroup, FormGroupProps } from "./FormGroup";

export const FieldInput = (props: any) => {
  const {
    errorMessage,
    id,
    isValid,
    isPristine,
    isSubmitted,
    isValidating,
    resetKey,
    setValue,
    value,
    otherProps,
  } = useField(props);

  const {
    children,
    label,
    type,
    placeholder,
    noInputStep = false,
    helper,
    size = "md",
    colorScheme,
    autoFocus,
    focusBorderColor,
    ...rest
  } = otherProps;
  const { required } = props;
  const [isTouched, setIsTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const showError = !isValid && ((isTouched && !isPristine) || isSubmitted);

  useEffect(() => {
    setIsTouched(false);
  }, [resetKey]);

  const formGroupProps = {
    errorMessage,
    helper,
    id,
    isRequired: !!required,
    label,
    showError,
    ...rest,
  };
  const handleChange = (value: any) => setValue(value);

  return (
    <FormGroup {...formGroupProps}>
      <InputGroup size={size}>
        {type === "number" ? (
          <NumberInput
            min={0}
            focusBorderColor="#15D08B"
           _hover={{borderColor: 'gray.400'}}
            borderColor={"gray.200"}
            value={value ?? ""}
            onChange={handleChange}
          >
            <NumberInputField />
            {!noInputStep && (
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            )}
          </NumberInput>
        ) : (
          <Input
            focusBorderColor="#15D08B"
            border={"1px"}
            borderColor={"gray.200"}
            type={showPassword ? "text" : type || "text"}
            id={id}
            _hover={{borderColor: 'gray.400'}}
            value={value ?? ""}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsTouched(false)}
            onBlur={() => setIsTouched(true)}
            placeholder={placeholder ? String(placeholder) : ""}
            autoFocus={autoFocus}
          />
        )}

        {(isTouched || isSubmitted) && isValidating && (
          <InputRightElement>
            <Spinner size="sm" flex="none" />
          </InputRightElement>
        )}
      </InputGroup>
      {children}
    </FormGroup>
  );
};
