function safeDocument(prop, fallback = {}) {
  try {
    if (typeof document !== 'undefined') {
      return document[prop];
    }
    return fallback[prop];
  } catch (err) {
    return undefined;
  }
}

module.exports = safeDocument;
