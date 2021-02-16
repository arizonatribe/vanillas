/**
 * Looks for a specified key on an Object you provide and checks to see if its corresponding value is of the type you specifiy.
 * @param type - A JavaScript type constructor function (ie `Boolean`, `RegExp`, `Date`, `Array`, `Object`, `Number`, `String`, etc) OR a string represention of the type (ie, "boolean", "regexp", "date", "array", "object", "number", "string", etc)
 * @param prop - A key to search for on the Object
 * @param obj - An object which may contain a specified prop
 * @returns Whether or not the requested prop is of the type specified
 */
export default function propIs(type: ((...params: any[]) => any) | string, prop: string, obj: object): boolean
