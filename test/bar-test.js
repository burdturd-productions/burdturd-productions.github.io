import { compareNumbers } from '../src/compare-numbers.js';

const test = QUnit.test;

test('greater than', function(assert) {
    const guess = 5;
    const correctNumber = 3;
    const expected = 1;
    const result = compareNumbers(guess, correctNumber);
    assert.equal(result, expected);
});

test('less than', function(assert) {
    const guess = 2;
    const correctNumber = 3;
    const expected = -1;
    const result = compareNumbers(guess, correctNumber);
    assert.equal(result, expected);
});

test('equals', function(assert) {
    const guess = 3;
    const correctNumber = 3;
    const expected = 0;
    const result = compareNumbers(guess, correctNumber);
    assert.equal(result, expected);
});

test('should throw on invalid input', function(assert) {
    assert.throws(
        function() {
            let badArgument = 'A';
            compareNumbers(badArgument);
        },
        function(error) {
            return error === 'Parameter is not a number';
        },
        'should match the error message'
    );
});