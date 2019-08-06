
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
        let scores = store.get('scores');
        return scores;
    },
    getUser(users, username) {
        
    }
};
export default store;
