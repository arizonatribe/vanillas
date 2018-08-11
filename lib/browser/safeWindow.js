function safeWindow(prop, fallback = {}) {
  try {
    if (typeof window !== 'undefined') {
      return window[prop];
    }
    return fallback[prop];
  } catch (err) {
    return undefined;
  }
}

module.exports = safeWindow;
