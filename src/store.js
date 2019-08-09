//import findUser from './findUser.js';

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
    getCurrentUser() {
        let currentUser = store.get('current-user');
        return currentUser;
    },

    // getUser(username) {
    //     const users = store.getCurrentUser();
    //     const user = findUser(users, username);
    //     return user;
    // },
    //write scores to store.

    updateScore(score) {
        const currentUser = store.getCurrentUser();
        currentUser.score = score;
        
        // console.log(currentUser);
        
        // store.save('current-user', currentUser);
        store.save('current-user', currentUser);
        
        //currentUser.score += score;
        //store.save('all-users', currentUser);
    
        return currentUser;
    },
};
export default store;