function insert_Row() {
    // Get a reference to the table element by its id
    const table = document.getElementById('sampleTable');

    // Create a new row and two cells
    const newRow = table.insertRow(0); // Insert at the top of the table
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set the text content of the cells
    cell1.textContent = 'New Cell1';
    cell2.textContent = 'New Cell2';
}
