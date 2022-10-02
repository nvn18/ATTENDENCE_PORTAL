

var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["FULL NAME"] = document.getElementById("FULL NAME").value;
    formData["ADMISSION NO"] = document.getElementById("ADMISSION NO").value;
    formData["EMAIL-ID"] = document.getElementById("EMAIL-ID").value;
    formData["MOBILE NO"] = document.getElementById("MOBILE NO").value;
    formData["ATTENDENCE"] = document.getElementById("ATTENDENCE").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("student").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("FULL NAME").value = "";
    document.getElementById("ADMISSION NO").value = "";
    document.getElementById("EMAIL-ID").value = "";
    document.getElementById("MOBILE NO").value = "";
    document.getElementById("ATTENDENCE").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("FULL NAME").value = selectedRow.cells[0].innerHTML;
    document.getElementById("ADMISSION NO").value = selectedRow.cells[1].innerHTML;
    document.getElementById("EMAIL-ID").value = selectedRow.cells[2].innerHTML;
    document.getElementById("MOBILE NO").value = selectedRow.cells[3].innerHTML;
    document.getElementById("ATTENDENCE").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.FULLNAME;
    selectedRow.cells[1].innerHTML = formData.ADMISSIONNO;
    selectedRow.cells[2].innerHTML = formData.EMAIL-ID;
    selectedRow.cells[3].innerHTML = formData.MOBILENO;
    selectedRow.cells[4].innerHTML = formData.ATTENDENCE;

}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("student").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("FULL NAME").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}