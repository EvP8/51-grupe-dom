import { header } from './header.js';
header('scoreboard');

let score1 = 0;
let score2 = 0;
let period = 1;

function increaseScore(team, points) {
    if (team === 1) {
        score1 += points;
        document.getElementById('score1').innerText = score1;
    } else if (team === 2) {
        score2 += points;
        document.getElementById('score2').innerText = score2;
    }
}

function decreaseScore(team) {
    if (team === 1 && score1 > 0) {
        score1--;
        document.getElementById('score1').innerText = score1;
    } else if (team === 2 && score2 > 0) {
        score2--;
        document.getElementById('score2').innerText = score2;
    }
}

function nextPeriod() {
    if (period <= 4) {
        const table = document.getElementById('scoreTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const periodCell = newRow.insertCell(0);
        const score1Cell = newRow.insertCell(1);
        const score2Cell = newRow.insertCell(2);

        periodCell.innerText = period;
        score1Cell.innerText = score1;
        score2Cell.innerText = score2;

        score1 = 0;
        score2 = 0;
        document.getElementById('score1').innerText = score1;
        document.getElementById('score2').innerText = score2;

        period++;
        document.getElementById('period').innerText = period;

        if (period > 4) {
            document.getElementById('nextPeriodBtn').disabled = true;
        }
    }
}

function resetGame() {
    score1 = 0;
    score2 = 0;
    document.getElementById('score1').innerText = score1;
    document.getElementById('score2').innerText = score2;

    period = 1;
    document.getElementById('period').innerText = period;

    document.getElementById('nextPeriodBtn').disabled = false;

    const tableBody = document.getElementById('scoreTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
}

window.increaseScore = increaseScore;
window.decreaseScore = decreaseScore;
window.nextPeriod = nextPeriod;
window.resetGame = resetGame;
