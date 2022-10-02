var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(param){
    return serverURL+"?"+"text="+param
}

function errorHandler(error){
    alert("something went wrong! Try again after sometime")
}

function clickEventHandler(){
    var inputText = txtInput.value;//taking input for processing

    fetch(getTranslationURL(inputText))
    .then(Response => Response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click",  clickEventHandler)