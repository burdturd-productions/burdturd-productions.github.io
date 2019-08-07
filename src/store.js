import findUser from './findUser.js';

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;    
    },
    getAllUsers() {
        let users = store.get('all-users');
        if(!users) {
            users = [];
        }
        return users;
    },
    getUser(username) {
        const users = store.getAllUsers();
        const user = findUser(users, username);
        return user;
    },
    //write scores to store.
    updateScore(username, score) {
        const user = store.getUser(username);
        user.score += score;
        return user;
    },
    getCurrentUser() {
        let currentUser = store.get('current-user');
        return currentUser;
    },
};
export default store;

