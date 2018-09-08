const tape = require('tape');
const shim = require('../lib/shim');
const isPrimitive = require('../lib/isPrimitive');

tape('"shim" proxies objects several layers deep', t => {
  const shimdow = shim({location: { pathname: 'wrong one' }});
  t.equal(shimdow.location.pathname, 'wrong one');
  t.doesNotThrow(() => shimdow.location.origin);
  t.end();
});
