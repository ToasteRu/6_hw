let sectionArticles = document.querySelectorAll(".article")[0];
let sectionCommunication = document.querySelectorAll(".communication")[0];

console.log(sectionArticles);
console.log(sectionCommunication);

let goToArticlesBtn = document.getElementById("GoToArticles");
let goToCommunicationBtn = document.getElementById("GoToCommunication");

goToArticlesBtn.addEventListener("click", () =>{
    sectionArticles.scrollIntoView({behavior:"smooth"});
});

goToCommunicationBtn.addEventListener("click", () =>{
    sectionCommunication.scrollIntoView({behavior:"smooth"});
});

console.log(goToArticlesBtn);
console.log(goToCommunicationBtn);