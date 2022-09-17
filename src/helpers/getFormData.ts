import { RecordString } from "../types/types";

export const getFormData = (): void => {
  const result: RecordString = {};
  const nodes = document.querySelectorAll("input");

  nodes.forEach((input: HTMLInputElement) => {
    result[input.name] = input.value;
  });

  console.log(result);
};
