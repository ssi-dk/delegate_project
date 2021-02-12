import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

type TextInputProps = {
  label: string;
  name: string;
  value: string | number | Date | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = (props: TextInputProps) => {
  const { name, value, label, onChange } = props;
  if (name.endsWith("date")) {
    return (
      <>
        <FormControl id={name}>
          <FormLabel>{label}</FormLabel>
          <Input
            type="date"
            value={value as string}
            name={name}
            onChange={onChange}
          />
        </FormControl>
      </>
    );
  }
  return (
    <FormControl id={name}>
      <FormLabel>{label}</FormLabel>
      <Input
        type="text"
        value={value as string}
        name={name}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default React.memo(TextInput);
