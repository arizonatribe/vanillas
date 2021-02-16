/**
 * Looks for a specified key on an Object you provide.
 * The is performed safely and will not throw an error if something on the prop path chain you specify doesn't exist.
 * Will always return `undefined` if a prop path cannot be resolved (rather than throwing).
 * @param prop - A top-level key OR a deeply nested prop path (which may be represented as an array or as a single dot-delimited string)
 * @param obj - An object which may contain a specified prop
 * @returns The value associated with the nested prop path OR undefined if it does not exist
 */
export default function propAt(prop: string | string[], obj: any): any | undefined
