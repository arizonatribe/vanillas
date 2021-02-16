/**
 * Simple wrapper around String.prototype.toUpperCase() that is provided for consistency with the non-native string case methods (`toKebabCase()`, `toCamelCase()`, etc)
 * @param str - A string which may contain lowercase characters
 * @returns A new string that is an uppercase representation of the original string
 */
export default function toUpperCase(str: string): string
