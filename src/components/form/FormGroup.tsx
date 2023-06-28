import React, { ReactNode } from "react";

import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  SlideFade,
} from "@chakra-ui/react";
import { LuAlertCircle } from "react-icons/lu";

import { FiAlertCircle } from "react-icons/fi";

export type FormGroupProps = Omit<
  FormControlProps,
  "onChange" | "defaultValue" | "label"
> & {
  children?: ReactNode;
  errorMessage?: ReactNode;
  helper?: ReactNode;
  id?: string;
  isRequired?: boolean;
  label?: ReactNode;
  showError?: boolean;
};

export const FormGroup = ({
  children,
  errorMessage,
  helper,
  id,
  isRequired,
  label,
  showError,
  ...props
}: FormGroupProps) => (
  <FormControl isInvalid={showError} isRequired={isRequired} {...props}>
    {!!label && (
      <FormLabel
        htmlFor={id}
        fontWeight={"semibold"}
        fontSize={"25px"}
        mb={"20px"}
      >
        {label}
      </FormLabel>
    )}
    {children}
    {!!helper && <FormHelperText>{helper}</FormHelperText>}

    {!!errorMessage && (
      <FormErrorMessage id={`${id}-error`}>
        <SlideFade in offsetY={-6}>
          <FiAlertCircle />
          {errorMessage}
        </SlideFade>
      </FormErrorMessage>
    )}
  </FormControl>
);
