export const getFormData = (): void => {
  const result = {};
  const nodes = document.querySelectorAll("input");

  nodes.forEach((input) => {
    result[input.name] = input.value;
  });

  console.log(result);
};
