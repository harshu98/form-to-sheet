var myTab = document.querySelector('#myTable');
console.log(myTab.innerHTML);

function createTable(res) {
    var myTab = document.querySelector('#myTable');
    console.log(myTab);
    var tableBody = document.createElement('tbody');
    for (var i = 0; i < res.length; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 4; j++) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode(res[i][j]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
        // myTab.appendChild(tableBody);
    }
    console.log(tableBody);
    // window.open('../table/table.html');
}