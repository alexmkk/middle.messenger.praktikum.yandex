import { merge } from "./merge";
import { Indexed } from "../types/types";

export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof path !== "string") {
    throw new Error("path must be string");
  }

  if (typeof object !== "object") {
    return object;
  }

  const targetObject = path.split(".").reduceRight(
    (prev, cur) => ({
      [cur]: prev,
    }),
    value
  );

  return merge(object as Indexed, targetObject as Indexed);
}
