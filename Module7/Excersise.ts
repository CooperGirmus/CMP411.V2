function validatANDadd(): boolean{
    
    var theNewWord= (document.forms["myform"]["newWord"] as HTMLInputElement).value;
    var theNewNumber :Number= (document.forms["myform"]["newNumber"] as HTMLInputElement).value;
    if (theNewWord == "" ) {
        alert("Pleas enter a valid word or a valid number.");
        return false;
    }

    else if (theNewNumber !=1 && theNewNumber !=2) {
        alert("Pleas enter a 1 or 2 for the list,");
        (document.forms["myform"]["newNumber"]as HTMLInputElement).value = "";
        return false;
    }

    else {

        if (theNewNumber==1){
            var tableRef = document.getElementById("myList1");
            (tableRef!.insertRow(tableRef!.rows.length)).innerHTML = theNewWord;
        }
        else{
            var tableRef = document.getElementById("myList2");
            (tableRef!.insertRow(tableRef!.rows.length)).innerHTML = theNewWord;
        }

        document.forms["myform"]["newWord"].value="";
        document.forms["myform"]["newNumber"].value="";
        return true;
    }
}

function clearList1(): void{
    
    var tableRef = document.getElementById("myList1");
    tableRef!.innerHTML = "";

}

function clearList2(): void{
    
    var tableRef  = document.getElementById("myList2");
    tableRef!.innerHTML = "";

}