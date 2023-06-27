import React, { ReactNode, useEffect, useState } from "react";

import { Radio, RadioGroup, Wrap, WrapItem } from "@chakra-ui/react";
import { FieldProps, useField } from "@formiz/core";

import { FormGroup, FormGroupProps } from "./FormGroup";

export const FieldRadios = (props: any) => {
  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    resetKey,
    setValue,
    value,
    otherProps,
  } = useField(props);
  //const { required } = props;
  const {
    children,
    label,
    colorScheme,
    options = [],
    helper,
    size = "md",
    ...rest
  } = otherProps;
  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  useEffect(() => {
    setIsTouched(false);
  }, [resetKey]);

  const formGroupProps = {
    errorMessage,
    helper,
    id,
    isRequired: !!require,
    label,
    showError,
    ...rest,
  };

  return (
    <FormGroup {...formGroupProps}>
      <RadioGroup
        size={size}
        id={id}
        value={value ?? undefined}
        onChange={setValue}
      >
        <Wrap spacing="4" overflow="visible">
          {options?.map((option: any) => (
            <WrapItem key={option.value}>
              <Radio
                id={`${id}-${option.value}`}
                name={id}
                value={option.value}
                colorScheme={colorScheme ?? "orange"}
              >
                {option.label ?? option.value}
              </Radio>
            </WrapItem>
          ))}
        </Wrap>
      </RadioGroup>
      {children}
    </FormGroup>
  );
};
