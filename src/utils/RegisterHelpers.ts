import * as Handlebars from "handlebars/dist/handlebars.runtime";

export const registerHelpers = () => {
  Handlebars.registerHelper("isNo", function (value: any) {
    console.log("value", value);
    return value === null || value === "";
  });
};
