/**
 * Transforms a string value into one which is hyphenated.
 * Whitespace and underscores are replaced with hyphens, and uppercase letters are interpreted as boundaries for new hyphenated words.
 * @param str - A string which may contain uppercase characters
 * @returns A new string that is a hyphenated representation of the original string
 */
export default function toKebabCase(str: string): string
