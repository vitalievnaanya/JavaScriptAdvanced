function sumTable() {
    const rows = Array.from(document.querySelectorAll('tr')).slice(1, -1);
    let sum = 0

    for(let row of rows) {
        const value = Number(row.lastElementChild.textContent);
        sum += value;
    }

    return document.getElementById('sum').textContent = value;
}