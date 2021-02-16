/**
 * Recursively shims an Object.
 * Every time the getter is invoked (which happens whenever prop paths are referenced in the consuming code), the path is shimmed with another Proxy.
 * It is not a polyfill but rather a way to keep deep prop paths that may not exist on the source object from throwing an error.
 * @param obj - An object that will be the Proxy's source
 * @returns An Object that will return props on the source Object if they exist but safely handle missing prop paths without throwing errors.
 */
export default function shim(obj: object): typeof Proxy
