function initializeMatrices() {
    const rowCount = parseInt(document.getElementById('rows').value);
    const colCount = parseInt(document.getElementById('cols').value);
  
    createMatrix('matrixA', rowCount, colCount);
    createMatrix('matrixB', rowCount, colCount);
  }
  
  function createMatrix(matrixId, rows, cols) {
    const matrix = document.getElementById(matrixId);
    matrix.innerHTML = ''; 
  
    for (let i = 0; i < rows; i++) {
        const newRow = matrix.insertRow();
        for (let j = 0; j < cols; j++) {
            const newCell = newRow.insertCell(j);
            newCell.innerHTML = `<input type="number">`;
        }
    }
  }
  
  function performOperations() {
    const matrixA = getMatrixValues('matrixA');
    const matrixB = getMatrixValues('matrixB');
  
  
    if (matrixA.length === 0 || matrixB.length === 0 || matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        document.getElementById('resultsContainer').innerText = "Matrices must be of the same dimensions!";
        return;
    }
  
    const additionChecked = document.getElementById('addCheckbox').checked;
    const subtractionChecked = document.getElementById('subtractCheckbox').checked;
  
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ""; 
  
    if (additionChecked) {
        const additionResult = matrixA.map((row, i) => row.map((value, j) => value + matrixB[i][j]));
        resultsContainer.innerHTML += `<h3>Addition Result:</h3>${formatMatrix(additionResult)}`;
    }
  
    if (subtractionChecked) {
        const subtractionResult = matrixA.map((row, i) => row.map((value, j) => value - matrixB[i][j]));
        resultsContainer.innerHTML += `<h3>Subtraction Result:</h3>${formatMatrix(subtractionResult)}`;
    }
  
    if (!additionChecked && !subtractionChecked) {
        resultsContainer.innerHTML = "<div>No operation selected!</div>";
    }
  }
  
  function getMatrixValues(matrixId) {
    const matrix = document.getElementById(matrixId);
    const values = [];
    
    for (let i = 0; i < matrix.rows.length; i++) {
        const row = [];
        for (let j = 0; j < matrix.rows[i].cells.length; j++) {
            const input = matrix.rows[i].cells[j].firstChild;
            row.push(parseFloat(input.value) || 0);
        }
        values.push(row);
    }
  
    return values;
  }
  
  function formatMatrix(matrix) {
    return matrix.map(row => {
        return row.map(value => `<input type="text" class="result-input" value="${value}" readonly>`).join('');
    }).join('<br>');
  }
  
  initializeMatrices();