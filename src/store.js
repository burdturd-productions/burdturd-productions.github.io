
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
        if(!scores){
            store.save(scores, allUsers);
        }
        return allUsers;
    },
    
};
export default store;
// let findUser = {
//     for(let i = 0; i < allUsers.length; i++) {
//         const foundUser = allUsers[i];
//         if(foundUser.code === code) {
//             return foundUser;
//         }
//         return null;
//     }
// };