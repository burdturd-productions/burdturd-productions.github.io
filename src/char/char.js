import store from '../store.js';

const nameForm = document.getElementById('name');
nameForm.addEventListener('submit', ()=>{
    event.preventDefault();
    
    const formData = new FormData(nameForm);
    const currentUser = {
        name: formData.get('input-name'),
        score: 0,
    };

    store.getCurrentUser();
    store.save('current-user', currentUser);
    window.location = 'clues.html';
});