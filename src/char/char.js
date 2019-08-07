import store from '../store.js';


const nameForm = document.getElementById('name');
nameForm.addEventListener('submit', ()=>{
    event.preventDefault();
    const formData = new FormData(nameForm);
    const newUser = {
        name: formData.get('input-name'),
        score: 0,
    };
    const allUsers = store.getAllUsers();
    allUsers.push(newUser);
    
    store.save('current-user', newUser);
    store.save('all-users', allUsers);
    window.location = 'clues.html';
});