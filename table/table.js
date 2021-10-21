window.onload = function() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzlfb5tM622oJLck3bxF5pCRAubOQvBXJgyZEu2leUupxzzb3WTluVClxMIeyeVqnNIoA/exec'
    fetch(scriptURL, {
            method: 'GET',
        }).then(response => response.json())
        .then(result => {
            console.log(result);
            createTable(result);
        })
        .catch(error => console.log(error))
}

function createTable(sheetData) {
    var myTab = document.querySelector('#myTable');
    var tablebody = document.createElement('tbody');

    for (var i = 0; i < sheetData.length; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < 4; j++) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode(sheetData[i][j]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tablebody.appendChild(row);
    }
    myTab.appendChild(tablebody);
    document.getElementById("loader").style.display = "none";
}