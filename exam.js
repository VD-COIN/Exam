import { ref, get, set } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

document.addEventListener('DOMContentLoaded', async () => {
    const examRef = ref(database, 'exams/');
    const snapshot = await get(examRef);

    if (snapshot.exists()) {
        const exams = snapshot.val();
        let content = '';
        for (const [key, value] of Object.entries(exams)) {
            content += `<div><h2>${value.title}</h2><p>${value.description}</p></div>`;
        }
        document.getElementById('examContent').innerHTML = content;
    } else {
        document.getElementById('examContent').innerHTML = 'No exams available.';
    }
});

function submitExam() {
    // Logic to handle exam submission
}