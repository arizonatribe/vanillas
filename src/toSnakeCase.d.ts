/**
 * Transforms a string value into one which is separated by underscores.
 * Whitespace and hyphens are replaced with underscores, and uppercase letters are interpreted as boundaries for new underscore-separated words.
 * @param str - A string which may contain uppercase characters or hyphens
 * @returns A new string that is an lowercase representation of the original string
 */
export default function toSnakeCase(str: string): string
