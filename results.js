import { ref, get } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

document.addEventListener('DOMContentLoaded', async () => {
    const resultsRef = ref(database, 'results/');
    const snapshot = await get(resultsRef);

    if (snapshot.exists()) {
        const results = snapshot.val();
        let content = '';
        for (const [key, value] of Object.entries(results)) {
            content += `<div><h2>${value.studentName}</h2><p>Score: ${value.score}</p></div>`;
        }
        document.getElementById('results').innerHTML = content;
    } else {
        document.getElementById('results').innerHTML = 'No results available.';
    }
});