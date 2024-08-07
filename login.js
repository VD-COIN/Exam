import { ref, get } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const userRef = ref(database, 'users/' + username);
    const snapshot = await get(userRef);

    if (snapshot.exists() && snapshot.val().password === password) {
        window.location.href = 'exam.html';
    } else {
        alert('Invalid login credentials');
    }
});