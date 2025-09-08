# Display CSV file in a table using JavaScript and Papa Parse
Read and process any given local CSV file (without sending to server) and display it in an HTML table. I have used vanilla JavaScript and Papa Parse library. Papa Parse has no dependencies. No front-end framework was used in this project. I have directly manipulated DOM for deleting and inserting objects, to display variable rows and columns of the table, when a CSV is loaded.

## Demo Screenshots
![Screenshot of Sample Table](assets/images/screenshot_sample_table.png)

## Why?
Once I needed to quickly view a CSV file in my mobile phone. However, it was difficult to look through the data in a simple text editor. That's when I came with this simple solution. Use `viewcsv.html` (single combined file) to view a csv file in a tabular format. No need to have cloud storage apps, internet connection, or any other heavy mobile apps with full office suits.

## Install
Make sure following files are in the same directory:

* `index.html`
* `script.js`
* `style.css`
* `papaparse.min.js`

## Release
The release file `viewcsv.html` is a combined file which contains all above listed files in a single file.

## Usage
Open `index.html` or `viewcsv.html` is any modern browser. Click on the button "Choose File" and choose any local CSV file in your device. The CSV data will be displayed formatted in a table.

> [!IMPORTANT]
> This project expects the CSV file will have column headers.

## License
Copyright © 2025 [Farhan Ali Qureshi](https://github.com/FarhanAliQureshi). This project is [MIT](LICENSE) licensed.
