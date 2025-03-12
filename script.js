// Set event listener hook as soon as barebone HTML is parsed by the browser.
// That's because this script doesn't depend on any assets (images, css, etc).
document.addEventListener("DOMContentLoaded", function () {
  const csvInput = document.querySelector("#csvinput");
  csvInput.addEventListener("change", updateCsvTable);
});

function updateCsvTable() {
  const csvInput = document.querySelector("#csvinput");
  const csvTable = document.querySelector("#csvtable");
  const selectedFiles = csvInput.files;

  if (selectedFiles.length === 0) {
    // No file selected
    console.log("No file selected");
  } else {
    // This script is expecting only one selected file by user. Do not use the attribute
    // "multiple" with the Input File.
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

  // Remove all existing rows from the table. It will also remove the header row.
  // This will also help us because we don't know how many columns the new CSV file will have.
  for (x = rows.length - 1; x >= 0; x--) {
    table.deleteRow(x);
  }

  // Remove table body and table header. We'll create everything from scratch when adding new data.
  table.tBodies[0].remove();
  table.deleteTHead();
}

function addDataToTable(data, table) {
  let headerAdded = false;
  let newBody = table.createTBody();

  for (const rowData of data) {
    if (headerAdded === false) {
      addHeaderToTable(rowData, table);
      headerAdded = true; // Add table header only once
    } else {
      let newRow = newBody.insertRow();
      for (const cellData of rowData) {
        let newCell = newRow.insertCell();
        newCell.textContent = cellData;
      }
    }
  }
}

function addHeaderToTable(headerData, table) {
  let newHeader = table.createTHead();
  let newRow = newHeader.insertRow();

  for (const columnData of headerData) {
    // insertCell() will add "td" element instead of "th" in a header row.
    // That's why I switched to creating "th" element separately and adding it to header row.
    // CSS styling won't apply correctly to "td" (instead of "th") in the header row.
    let newColumn = document.createElement("th");
    newColumn.textContent = columnData;
    newRow.appendChild(newColumn);
  }
}
