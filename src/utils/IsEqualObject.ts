import { Indexed } from "../types/types";

export function isEqualObject(a: Indexed, b: Indexed): boolean {
  const keysA = Object.keys(a);

  for (const key of keysA) {
    const valA = a[key] as Indexed;
    const valB = b[key] as Indexed;
    const areObjects: boolean =
      typeof valA === "object" && typeof valB === "object" && valA !== null && valB !== null;
    if ((areObjects && !isEqualObject(valA, valB)) || (!areObjects && valA !== valB)) {
      return false;
    }
  }
  return true;
}
