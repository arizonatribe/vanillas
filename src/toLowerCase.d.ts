/**
 * Simple wrapper around String.prototype.toLowerCase() that is provided for consistency with the non-native string case methods (`toKebabCase()`, `toCamelCase()`, etc)
 * @param str - A string which may contain uppercase characters
 * @returns A new string that is an lowercase representation of the original string
 */
export default function toLowerCase(str: string): string
