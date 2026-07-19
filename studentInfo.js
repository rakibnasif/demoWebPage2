function addrow() {
    const nameValue = document.getElementById('studentName').value;
    const rollValue = document.getElementById('studentRoll').value;
    const banglaValue = document.getElementById('banglaMarks').value;
    const englishValue = document.getElementById('englishMarks').value;

    if (nameValue === "" || rollValue === "" || banglaValue === "" || englishValue === "") {
        alert('Please fill all the fields');
        return false;
    }
    const noData = document.getElementById("noData");
    if (noData) {
        noData.remove();
    }
const tableBody = document.getElementById('tableBody');
const totalMarks = Number(banglaValue) + Number(englishValue);
const slNo = tableBody.rows.length + 1;

const newRow = tableBody.insertRow(-1)
const cell1 = newRow.insertCell(0)
const cell2 = newRow.insertCell(1)
const cell3 = newRow.insertCell(2)
const cell4 = newRow.insertCell(3)
const cell5 = newRow.insertCell(4)
const cell6 = newRow.insertCell(5)

cell1.textContent = slNo;
cell2.textContent = nameValue;
cell3.textContent = rollValue;
cell4.textContent = banglaValue;
cell5.textContent = englishValue;
cell6.textContent = totalMarks;

document.getElementById('studentName').value = '';
document.getElementById('studentRoll').value = '';
document.getElementById('banglaMarks').value = '';
document.getElementById('englishMarks').value = '';

return false ;
}


