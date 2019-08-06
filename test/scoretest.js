import store from '../src/store.js';
import testUsers from '../test/testusers.js';
import findUser from '../src/findUser.js';

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
    store.save('users', testUsers);
    const users = store.get('users');
    const user = store.getUser(users[1].name);
    console.log(user);
    assert.deepEqual(user, testUsers[1]);
});