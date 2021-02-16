/**
 * Looks for a specified key on an Object you provide and checks to see if its corresponding value equals the value you specifiy.
 * @param prop - A key to search for on the Object
 * @param val - A value that the extracted prop will be compared against
 * @param obj - An object which may contain a specified prop
 * @returns Whether or not the requested prop equals the specified value
 */
export default function propEquals(prop: string, val: ((...params: any[]) => any) | string, obj: object): boolean
