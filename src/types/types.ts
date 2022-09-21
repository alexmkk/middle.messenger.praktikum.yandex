export type RecordString = Record<string, string>;

export interface Indexed<T = unknown> {
  [key: string]: T;
}
