import store from '../src/store.js';

const test = QUnit.test;
QUnit.module('store methods');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('save a user object to store', assert => {
    
    const key = 'FAKENAME';
    const user1 = {
        name: 'fakename',
        score: 0,
    };
    store.save(key, user1);
    const got = store.get(key);
    assert.deepEqual(got, user1);

});
test('retrieves a user object from store.', assert => {
    const key = 'current-user';
    const user1 = {
        name: 'fakename',
        score: 0,
    };
    store.save(key, user1);

    const user = store.getCurrentUser('fakename');
    assert.deepEqual(user, user1);
    
});
test('updates current-user score', assert => {
    //arrange
    const key = 'current-user';
    const user1 = {
        name: 'fakename',
        score: 0,
    };
    store.save(key, user1);
    const score = 1;
    console.log(user1);

    //act

    const result = store.updateScore(score);

    const expected = {
        name: 'fakename',
        score: 1
    };
    
    //assert
    assert.deepEqual(result, expected);

});