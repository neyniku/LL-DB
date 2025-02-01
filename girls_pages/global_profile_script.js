const root = document.querySelector(":root");
const rootStyles = getComputedStyle(root);

var pos1 = localStorage.getItem("pos1")
var pos2 = localStorage.getItem("pos2")

var chika = "chika.png";

let stage = 0;

var opposite = true;

var loadingStages = [
    function(){
        stage++;
        document.querySelector(":root").style.setProperty("--currentLoadingStage", stage)
    },
    function(){
        stage++;
        document.querySelector(":root").style.setProperty("--currentLoadingStage", stage)
    },
    function(){
        stage++;
        document.querySelector(":root").style.setProperty("--currentLoadingStage", stage)
    },
    function(){
        stage++;
        document.querySelector(":root").style.setProperty("--currentLoadingStage", stage)
        document.getElementById("loadingContainer").style.opacity = "0";
        setTimeout(function(){
            document.getElementById("loadingContainer").style.display = "none";
        }, 1500);
    }
]

console.log(pos1);
console.log(pos2);

const fetchContents = fetch("../names.json")
.then(y => y.text())
.then(x => JSON.parse(x))
.then(z => {

    /* document.querySelector(":root").style.setProperty("--girlColorSolid", z.ext_groupList[pos1][pos2].color); */
    document.querySelector(":root").style.setProperty("--angleGrad1", calcAngle());
    document.querySelector(":root").style.setProperty("--angleGrad2", calcAngle());
    document.title = "LL!MCDB | " + z.ext_groupList[pos1][pos2].name;

    loadColors = new Promise(function(){
        document.querySelector(":root").style.setProperty("--girlColorSolid", z.ext_groupList[pos1][pos2].color);
        document.querySelector(":root").style.setProperty("--girlColor25perc", z.ext_groupList[pos1][pos2].color + "40");
        document.querySelector(":root").style.setProperty("--girlColor50perc", z.ext_groupList[pos1][pos2].color + "80");
        document.querySelector(":root").style.setProperty("--girlColor56perc", z.ext_groupList[pos1][pos2].color + "90");

        document.getElementsByTagName("body")[0].style.backgroundColor = z.ext_groupList[pos1][pos2].color + "40";
        document.getElementById("bgpattern").style.backgroundImage = "linear-gradient(90deg, " + z.ext_groupList[pos1][pos2].color + ", " + z.ext_groupList[pos1][pos2].color + "40, " + z.ext_groupList[pos1][pos2].color + ")";
    }).then(loadingStages[stage]());

    loadImages = new Promise(function(){

    }).then(loadingStages[stage]());

    loadText = new Promise(function(){

    }).then(loadingStages[stage]());

    loadBottomMenu = new Promise(function(){

    }).then(loadingStages[stage]());

})

function calcAngle() {
    var rad = Math.atan(window.innerHeight/window.innerWidth)
    var deg = -(180 * rad) / Math.PI
    opposite = !opposite
    if (!opposite) {
        return deg + "deg"
    }
    else {
        return deg + 180 + "deg"
    }
}

function rememberPos() {
    localStorage.setItem("pos1", pos1);
    localStorage.setItem("pos2", pos2);
}