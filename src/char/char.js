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
    const currentUser = formData.get('input-name');
    allUsers.push(newUser);
    
    store.save('all-users', allUsers);
    store.save('current-user', currentUser);
    window.location = 'clues.html';
});