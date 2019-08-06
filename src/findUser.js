export default function findUser(users, username) {
    for(let i = 0; i < users.length; i++) {
        let currentUser = users[i];
        if(currentUser.name === username) {
            return currentUser;
        }
    }
    return null;
}