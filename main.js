async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener datos:", error);
        return null;
    }
}

document.getElementById('fetchBtn').addEventListener('click', async () => {
    const url = 'https://jsonplaceholder.typicode.com/users'; 
    const alumnos = await fetchData(url);
    if (alumnos && Array.isArray(alumnos)) {
        const tableContainer = document.getElementById('tableContainer');
        let tableHtml = '<table style="width:100%;border-collapse:collapse;background:#fff;"><thead><tr><th style="border:1px solid #ccc;padding:8px;">Nombre</th><th style="border:1px solid #ccc;padding:8px;">Email</th></tr></thead><tbody>';
        alumnos.forEach(alumno => {
            tableHtml += `<tr><td style=\"border:1px solid #ccc;padding:8px;\">${alumno.name}</td><td style=\"border:1px solid #ccc;padding:8px;\">${alumno.email}</td></tr>`;
        });
        tableHtml += '</tbody></table>';
        tableContainer.innerHTML = tableHtml;
    }
});
