/**
 * Transforms a string value into one which is hyphenated.
 * Hyphens and underscores are removed and interpred as the boundaries for new words.
 * The first letter of each new word - not preceded by whitespace - is capitalized.
 * @param str - A string which may contain underscores and hyphens and/or may be title-cased.
 * @returns A new string that is without hyphens and underscores and the first letter of every new word boundary is capitalized, unless preceded by whitespace
 */
export default function toCamelCase(str: string): string
