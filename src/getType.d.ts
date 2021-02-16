/**
 * Gets the type for any value. If available will inspect the constructor name, otherwise will use the typeof
 * @param val - A value of any kind
 * @returns The stringified representation of the value's type
 */
export default function getType(val: any): string
