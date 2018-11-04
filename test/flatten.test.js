import tape from 'tape'
import flatten from '../src/flatten'
import { solarSystem } from './__mocks__'

tape('"flatten" creates one array out of all the values in a given array, be they arrays themselves or not', t => {
  const arr = Object.values(solarSystem).map(p => p.moons).filter(Boolean)
  const expected = ['Titan', 'Enceladus', 'Mimas', 'Europa', 'Ganymede', 'Lo', 'Triton', 'Phobos', 'Deimos']
  t.deepEqual(
    flatten(arr),
    expected
  )
  t.deepEqual(
    flatten([new Int8Array([318, 719, 120, 921]), new Int8Array([18, 19, 20, 21])]),
    [62, -49, 120, -103, 18, 19, 20, 21],
    'flatten over the contents of nested Int8Arrays'
  )
  t.deepEqual(
    flatten([new Int16Array([1830, 1906, 2700, 2110]), new Int16Array([1800, 1900, 2000, 2100])]),
    [1830, 1906, 2700, 2110, 1800, 1900, 2000, 2100],
    'flatten over the contents of nested Int16Arrays'
  )
  t.deepEqual(
    flatten([new Int32Array([17384, 11389, 14381, 12385]), new Int32Array([13384, 13389, 13381, 13385])]),
    [17384, 11389, 14381, 12385, 13384, 13389, 13381, 13385],
    'flatten over the contents of nested Int32Arrays'
  )
  t.deepEqual(
    flatten([new Float32Array([972.11, 84.1, 22.5, 743.7]), new Float32Array([902.1, 89.1, 22.5, 743.7])]),
    [972.1099853515625, 84.0999984741211, 22.5, 743.7000122070312, 902.0999755859375, 89.0999984741211, 22.5, 743.7000122070312],
    'flatten over the contents of a Float32Array'
  )
  t.deepEqual(
    flatten([new Float64Array([7733.11038, 8493.19292929]), new Float64Array([7333.12038, 8993.19292929])]),
    [7733.11038, 8493.19292929, 7333.12038, 8993.19292929],
    'flatten over the contents of nested Float64Arrays'
  )
  t.deepEqual(
    flatten([new Uint8Array([77, 21, 149, 14]), new Uint8Array([7, 21, 49, 17])]),
    [77, 21, 149, 14, 7, 21, 49, 17],
    'flatten over the contents of nested Uint8Arrays'
  )
  t.deepEqual(
    flatten([new Uint16Array([770, 2100, 4400]), new Uint16Array([700, 2100, 4900])]),
    [770, 2100, 4400, 700, 2100, 4900],
    'flatten over the contents of nested Uint16Arrays'
  )
  t.end()
})
