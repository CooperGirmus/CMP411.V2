async function randomQuote() { 
    var apiString ="https://api.quotable.io";


    var newQuote = document.getElementById("quoteLength").value;
    
    apiString= apiString + "/quotes/random?" +newQuote;
    alert(apiString);

    var response = await fetch(apiString);

    document.getElementById("newQuote").innerHTML = "";

    var jsonData = await response.json();
    document.getElementById("newQuote").innerHTML = JSON.stringify(jsonData[0].content);
    document.getElementById("author").innerHTML = JSON.stringify(jsonData[0].author);
   
    

return true;
}  