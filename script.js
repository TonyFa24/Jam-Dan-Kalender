// Jam Digital
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);

// Kalender
function updateCalendar() {
    const calendarElement = document.getElementById('calendar');
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;  // Bulan dimulai dari 0, jadi ditambah 1
    const year = now.getFullYear();
    calendarElement.textContent = `Hari: ${day}, Bulan: ${month}, Tahun: ${year}`;
}

setInterval(updateCalendar, 1000);
