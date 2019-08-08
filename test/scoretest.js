import store from '../src/store.js';
import testUsers from '../test/testusers.js';

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
    const key = 'all-users';
    const user1 = {
        name: 'fakename',
        score: 0,
    };
    store.save(key, [user1]);

    const user = store.getUser('fakename');
    assert.deepEqual(user, user1);
    
});
test('updates userObject score', assert => {
    const key = 'all-users';
    const user1 = {
        name: 'fakename',
        score: 0,
    };
    store.save(key, [user1]);
    const score = 1;
    const expected = {
        name: 'fakename',
        score: 1
    };
    const result = store.updateScore(user1.name, score);
    assert.deepEqual(result, expected);

});

test ('updates score and saves it back to all-users array', assert => {
    const users = [{
        name: 'fakename',
        score: 0,
    },
    {
        name: 'fakename2',
        score: 0,
    }];
    store.save('all-users', users);
    const userName = 'fakename';
    const score = 3;

    const expected = [{
        name: 'fakename',
        score: 3,
    },
    {
        name: 'fakename2',
        score: 0,
    }];
    store.updateScore(userName, score);
    const result = store.getAllUsers();


    assert.deepEqual(result, expected);
});