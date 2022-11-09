let imgSrc = "assets/img/man.gif";
let queData = {
    men:[
        {letter: "A", img: imgSrc},
        {letter: "B", img: imgSrc},
        {letter: "C", img: imgSrc},
        {letter: "D", img: imgSrc},
        {letter: "E", img: imgSrc},
        {letter: "F", img: imgSrc}
    ],
    nextMan:function (){
        let lastMan= this.men.pop();
        this.men.unshift(lastMan);
    }
}

renderQue();

function renderQue() {
    $("main> section:first-child").empty();
    for (let i = 0; i < queData.men.length; i++) {
        $("main> section:first-child").append(`<div><img src="${queData.men[i].img}" alt="man"><h4>${queData.men[i].letter}</h4></div>`);
    }
    queData.nextMan();
}

setInterval(renderQue, 3000);
