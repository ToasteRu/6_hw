let sectionArticles = document.querySelectorAll(".article")[0];
let sectionCommunication = document.querySelectorAll(".communication")[0];

let goToArticlesBtn = document.getElementById("GoToArticles");
let goToCommunicationBtn = document.getElementById("GoToCommunication");

function scrollToElem (elem){
    elem.scrollIntoView({behavior:"smooth"});
};

goToArticlesBtn.addEventListener ("click", scrollToElem (sectionArticles));
goToCommunicationBtn.addEventListener ("click", scrollToElem (sectionCommunication));

console.log(goToArticlesBtn);
console.log(goToCommunicationBtn);