const TestBed = require('./lib/testbed');
const capital = require('./index');

const { define, it } = new TestBed();

const emptyInputs = [
    void 0,
    ''
];

const invalidTypeInputs = [
  '😀', false, true, null, NaN, {}, [], 0, 1, Infinity, Object, String, Boolean,
  Array, Set, Map, WeakMap, () => {}, Date, BigInt,
  JSON, Promise, Symbol, Uint8Array, Object.prototype, Error, Event, class Foo {}
];

const lowercaseInputs = [
    'a',
    'ab',
    'aBc',
    'abC',
    'aBC',
    '_aBC',
    '^aBC',
    'aBC_',
    'aBC^',
    ' aB_',
    'aB_ ',
    ' 😀B',
    '😀😀'
];

const uppercaseInputs = [
    'A',
    'Ab',
    'AB',
    'aABc', // for rendering failed messages
    'ABc_',
    'ABc_😀',
    'ABc2'
];

define('Capital tests', () => {
    emptyInputs.forEach(input => {
        it('should returns false when a given string is empty', expect => {
            expect(capital(input), input).toBeFalsy();
        });
    });

    invalidTypeInputs.forEach(input => {
        it('should returns false when a given string has incorrect type', expect => {
            expect(capital(input), input).toBeFalsy();
        });
    });

    lowercaseInputs.forEach(input => {
        it('should returns false when a given string starts with an lower-case char', expect => {
            expect(capital(input), input).toBeFalsy();
        });
    });

    uppercaseInputs.forEach(input => {
        it('should returns true when a given string starts with an upper-case char', expect => {
            expect(capital(input), input).toBeTruthy();
        });
    });
})
