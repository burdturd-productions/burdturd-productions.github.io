import findUser from '../src/findUser.js';
import testUsers from '../test/testusers.js';

const test = QUnit.test;
QUnit.module('find user');

test('find user grabs a single user by name form user array', assert => {
    const name = 'John';
    const expected = {
        name: 'John',
        score: 0
    };
    const result = findUser(testUsers, name);
    assert.deepEqual(result, expected);
});