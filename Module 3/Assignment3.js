function approveWord(){
    
    var theNewWord= document.forms["myList"]["newWord"].value;
    var theNewNumber= document.forms["myList"]["newNumber"].value;
    
    if (theNewWord == "" ) {
        alert("Pleas enter a valid word or a valid number.");
        return false;
    }

    else if ((theNewNumber !=1)&& (theNewNumber !=2)) {
        alert("Pleas enter a 1 or 2 for the method,");
        document.forms["myform"]["newNumber"].value = "";
        return false;
    }
    else {

        if (theNewNumber==1){
            var tableRef = document.getElementById("mymethod1");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord;
        }
        else{
            var tableRef = document.getElementById("mymethod2");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord + " " + method2(theNewWord);
        }

        document.forms["myform"]["newWord"].value="";
        document.forms["myform"]["newNumber"].value="";
        return true;
    }
}
// Me and Grosbins method 
function method1(){
    var theNewWord = document.forms["myList"]["newWord"].value;
    

    // Step 1: Read the length of the input word
    // Step 2: Find the length of the string
    var strLength = theNewWord.length;

    // Step 3: Calculate the midpoint of the string length
    var midpoint = Math.floor(strLength / 2);

    // Step 4: Split the string into two halves
    var firstHalf = theNewWord.slice(0, midpoint);
    var secondHalf = theNewWord.slice(midpoint);

    // Step 5: Reverse each half
    var reversedFirstHalf = firstHalf.split('').reverse().join('');
    var reversedSecondHalf = secondHalf.split('').reverse().join('');

    // Step 6: Concatenate the reversed halves
    var reversedWord = reversedSecondHalf + reversedFirstHalf;

    // Step 7: Compare the new variable with the old one
    if (reversedWord === theNewWord) {
        alert("The word is a palindrome after reversing.");
    } else {
        alert("The word is not a palindrome after reversing.");
    }
}

function method2(){
    // step 1-word as a string 
    var word = document.forms["myList"]["newWord"].value;
    var length = word.length;

    // step 2-indicet
    var i =0;
    var j= length -1;
    
    // step 3 travers word 
    while (i<j){
        // step 4 make sure i and j are not equal
        if(word[i] !== word[j]){
            alert("Not a palindrome");
            return false;
        }
        // move twards eachother 
        i ++;
        j --;   
        
        
    } 
    alert("The word is a palindrom after walking i and j towards eachother");
    return true;
}


function clearMethod1(){
    
    var tableRef = document.getElementById("mymethod1");
    tableRef.innerHTML = "";

}

function clearMethod2() {
    
    var tableRef  = document.getElementById("mymethod2");
    tableRef.innerHTML = "";

}