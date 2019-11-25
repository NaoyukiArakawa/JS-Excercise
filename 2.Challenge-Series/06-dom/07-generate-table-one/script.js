/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// your code here

// Find an element with id='target'
let table = document.querySelector("#target");

function createTable() {
  var i = 0,
    rowEl = null,
    tableEl = document.createElement("table");

  for (i = 1; i <= 10; i++) {
    rowEl = tableEl.insertRow(); // DOM method for creating table rows
    let newCell = rowEl.insertCell(); // adding cells but a content of cell is undefined
    let newText = document.createTextNode("Hello " + i); //defining a content of cell
    newCell.appendChild(newText); //to insert content into a cell, use appendChild

    //rowEl.insertCell().textContent = "table cell " + i + "-1";
    //rowEl.insertCell().textContent = "table cell " + i + "-2";
  }
  table.appendChild(tableEl);
}

createTable();
