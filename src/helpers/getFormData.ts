export const getFormData = () => {
  const result: { [key: string]: any } = {};
  const nodes = document.querySelectorAll("input");

  nodes.forEach((input: HTMLInputElement) => {
    result[input.name] = input.value;
  });

  return result;
};
