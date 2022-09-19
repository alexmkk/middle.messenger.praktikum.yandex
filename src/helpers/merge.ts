import { Indexed } from "../types/types";

export function merge(left: Indexed, right: Indexed): Indexed {
  for (const n in right) {
    if (typeof left[n] != "object") {
      left[n] = right[n];
    } else if (typeof right[n] === "object") {
      left[n] = merge(left[n] as Indexed, right[n] as Indexed);
    }
  }

  return left;
}
