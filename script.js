const csvInput = document.querySelector("#csvinput");
csvInput.addEventListener("change", updateCsvTable);

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
      },
    });
  }
}
