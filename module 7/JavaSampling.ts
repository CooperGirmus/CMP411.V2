export {};

async function getBacon() {
  var apiString = "https://baconipsum.com/api/";

  var newPara = (document.getElementById("newParagraphs") as HTMLInputElement).value;
  apiString = apiString + "?type=meat-and-filler&paras=" + newPara;
  alert(apiString);

  var response = await fetch(apiString);

  document.getElementById("myRawData")!.innerHTML = "";
  document.getElementById("myFormatedData")!.innerHTML = "";

  var jsonData = await response.json();

  document.getElementById("myRawData")!.innerHTML = JSON.stringify(jsonData);

  for (var para in jsonData) {
    document.getElementById("myFormatedData")!.innerHTML += "<p>" + jsonData[para] + "</p>";
  }

  return true;
}
