import { series } from "./data.js";
const seriesTable = document.getElementById("series");
const averageSeasons = document.getElementById("average-seasons");
function generarTabla(series) {
    seriesTable.innerHTML = '';
    series.forEach(serie => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        seriesTable.appendChild(row);
    });
}
function promedio(series) {
    const totalSe = series.reduce((sum, serie) => sum + serie.seasons, 0);
    const average = totalSe / series.length;
    averageSeasons.innerText = 'Average Seasons: ' + average.toFixed(2);
}
document.addEventListener("DOMContentLoaded", () => {
    generarTabla(series);
    promedio(series);
});
