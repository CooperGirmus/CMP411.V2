async function getBacon(){

    var apiString ="https://baconipsum.com/api/";
   
    var newPara = document.getElementById("newParas").value;
    var meatOrFiller= document.getElementById("meatOrFiller").value;
   
    apiString = apiString + "?type=" + meatOrFiller + "&paras=" + newPara;

    alert(apiString);
   
    var response = await fetch(apiString);
   
    document.getElementById("myRawData").innerHTML = "";
    document.getElementById("myFormatedData").innerHTML = "";
   
    var jsonData = await response.json();
   
    document.getElementById("myRawData").innerHTML = JSON.stringify(jsonData);
   
    for(var para in jsonData) {
       document.getElementById("myFormatedData").innerHTML += "<p>" + jsonData[para] + "</p>";
      }

    var encryptedDataMethod1 = caesarCipherEncrypt(document.getElementById("myFormatedData").innerHTML,3); 
    var encryptedDataMethod2 = caesarCipherEncrypt(document.getElementById("myFormatedData").innerHTML,5);

    var selectedMethod = document.getElementById("what_method").value;
    var encryptedData;

    if (selectedMethod == "method 1") {
      encryptedData = encryptedDataMethod1;
    } 
    else if (selectedMethod == "method 2") {
      encryptedData = encryptedDataMethod2;
    }
    document.getElementById("caesarCipherEncrypt").innerHTML = "";
    document.getElementById("caesarCipherEncrypt").innerText += encryptedData;
    
   }

  
function caesarCipherEncrypt(text, shift){
  var result = '';

  for (var i=0; i< text.length; i++){
    var char = text.charCodeAt(i);

    if ( char>=65 && char <=90){
      result += String.fromCharCode((char - 65 + shift) % 26 + 65); //checking for uppercase words 
    }
    else if ( char >= 97 && char <= 122) {
      result += String.fromCharCode((char - 97 + shift) % 26 + 97); //checking for lower case words
    }
    else {
    result += text[i]; 
    }
  }

  return result;
}
  


   

   