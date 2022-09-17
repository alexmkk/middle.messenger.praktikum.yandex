export function queryString(data) {
  return Object.keys(data)
    .reduce((prev, cur) => `${prev}${cur}=${data[cur]}&`, "?")
    .slice(0, -1);
}
