const escapeChars = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  /* eslint-disable-next-line quotes */
  '"': "&quot;",
  "'": "&#39;"
}

/**
 * Converts ampersands, angle brackets, apostrophes and blockquotes to their HTML encoded equivalents
 *
 * @function
 * @name escapeHtml
 * @param {string} val A string values to escape
 * @returns {string} The original value (converted to string) and with any of the unallowed characters properly escaped (null/undefined values are converted to '')
 */
function escapeHtml(val) {
  return /[&<>"']/.test(`${val}`)
    ? `${val}`.replace(/[&<>"']/g, key => escapeChars[key])
    : `${val == null ? "" : val}`
}

export default escapeHtml
