import { RecordString } from "../types/types";

export const getFormData = (): RecordString => {
  const result: RecordString = {};
  const nodes = document.querySelectorAll("input");

  nodes.forEach((input: HTMLInputElement) => {
    result[input.name] = input.value;
  });

  console.log(result);

  return result;
};
