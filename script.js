const csvInput = document.querySelector("#csvinput");
csvInput.addEventListener("change", updateCsvTable);
const csvTable = document.querySelector("#csvtable");

function updateCsvTable() {
  const selectedFiles = csvInput.files;
  if (selectedFiles.length === 0) {
    // No file selected
    console.log("No file selected");
  } else {
    const currentFile = selectedFiles[0];
    console.log(`File selected: ${currentFile.name}`);
    Papa.parse(currentFile, {
      skipEmptyLines: true,
      complete: function (results) {
        console.log(results);
        clearTable(csvTable);
        addDataToTable(results.data, csvTable);
      },
    });
  }
}

function clearTable(table) {
  const rows = table.rows;
  for (x = rows.length - 1; x >= 0; x--) {
    table.deleteRow(x);
  }
  table.tBodies[0].remove();
  table.deleteTHead();
}

function addDataToTable(data, table) {
  // Add CSV rows and cells to Table rows and cells
  let headerAdded = false;
  const newBody = table.createTBody();
  for (const row of data) {
    if (headerAdded === false) {
      addHeaderToTable(row, table);
      headerAdded = true;
    } else {
      let newRow = newBody.insertRow();
      for (const cell of row) {
        let newCell = newRow.insertCell();
        newCell.innerText = cell;
      }
    }
  }
}

function addHeaderToTable(headerRow, table) {
  let newHeader = table.createTHead();
  let newRow = newHeader.insertRow();
  for (const column of headerRow) {
    let newColumn = document.createElement("th");
    newColumn.innerText = column;
    newRow.appendChild(newColumn);
  }
}
