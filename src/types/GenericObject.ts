export type GenericObject<T> = {
  [K in keyof T]: T[K]
}
