// BURGER MENU
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
	menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// KALENDARZ
const calendarGrid = document.getElementById('calendarGrid');
const monthYearLabel = document.getElementById('monthYear');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

let currentDate = new Date();
const today = new Date();

let selectedDate = '';
let selectedHour = '';
let peopleCount = 1;

const dayNames = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd'];

function renderCalendar() {
	calendarGrid.innerHTML = '';

	const year = currentDate.getFullYear();
	const month = currentDate.getMonth();

	monthYearLabel.textContent = currentDate.toLocaleString('pl-PL', {
		month: 'long',
		year: 'numeric',
	});

	prevMonthBtn.disabled = month === today.getMonth() && year === today.getFullYear();

	dayNames.forEach(day => {
		const dayElem = document.createElement('div');
		dayElem.textContent = day;
		dayElem.classList.add('day-name');
		calendarGrid.appendChild(dayElem);
	});

	const firstDay = new Date(year, month, 1);
	const startDay = (firstDay.getDay() + 6) % 7;
	const daysInMonth = new Date(year, month + 1, 0).getDate();

	for (let i = 0; i < startDay; i++) {
		const emptyCell = document.createElement('div');
		emptyCell.classList.add('inactive');
		calendarGrid.appendChild(emptyCell);
	}

	for (let day = 1; day <= daysInMonth; day++) {
		const cellDate = new Date(year, month, day);
		const cell = document.createElement('div');
		cell.textContent = day;

		if (cellDate < today.setHours(0, 0, 0, 0)) {
			cell.classList.add('inactive');
		} else {
			cell.addEventListener('click', () => selectDate(cellDate, cell));
		}
		calendarGrid.appendChild(cell);
	}
}

function selectDate(date, cell) {
	selectedDate = date.toISOString().split('T')[0];
	document.querySelectorAll('#calendarGrid div').forEach(el => el.classList.remove('selected'));
	cell.classList.add('selected');
	showHours();
}

prevMonthBtn.addEventListener('click', () => {
	currentDate.setMonth(currentDate.getMonth() - 1);
	renderCalendar();
});
nextMonthBtn.addEventListener('click', () => {
	currentDate.setMonth(currentDate.getMonth() + 1);
	renderCalendar();
});

renderCalendar();

// GODZINY
function showHours() {
	const hoursDiv = document.getElementById('hours');
	hoursDiv.innerHTML = '';
	selectedHour = '';
	document.getElementById('confirm').classList.add('hidden');
	document.getElementById('people-selector').classList.remove('hidden');

	for (let h = 12; h <= 20; h++) {
		let hour = `${h}:00`;
		let btn = document.createElement('button');
		btn.textContent = hour;
		btn.dataset.hour = hour;
		btn.addEventListener('click', () => selectHour(btn));
		hoursDiv.appendChild(btn);
	}
}

function selectHour(btn) {
	selectedHour = btn.dataset.hour;
	document.querySelectorAll('#hours button').forEach(b => b.classList.remove('selected'));
	btn.classList.add('selected');
	document.getElementById('confirm').classList.remove('hidden');
	document.getElementById('confirm').disabled = false;
}

// LICZNIK OSÓB
document.getElementById('plus').addEventListener('click', () => {
	if (peopleCount < 8) {
		peopleCount++;
		document.getElementById('count').textContent = peopleCount;
	}
});
document.getElementById('minus').addEventListener('click', () => {
	if (peopleCount > 1) {
		peopleCount--;
		document.getElementById('count').textContent = peopleCount;
	}
});

// POTWIERDZENIE
document.getElementById('confirm').addEventListener('click', () => {
	const summary = document.getElementById('summary');
	summary.innerHTML = `
		<h3>Podsumowanie rezerwacji:</h3>
		<p><strong>Data:</strong> ${selectedDate}</p>
		<p><strong>Godzina:</strong> ${selectedHour}</p>
		<p><strong>Ilość osób:</strong> ${peopleCount}</p>
	`;
	summary.classList.remove('hidden');
});
