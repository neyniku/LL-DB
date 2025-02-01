console.log("123");

//experiment

const fetchNames = fetch("names.json")
.then(y => y.text())
.then(x => JSON.parse(x))
.then(z => {
	for (i = 0; i < z.ext_groupList[0].length; i++) {
		museMembers.push(z.ext_groupList[0][i])
	}
	for (i = 0; i < z.ext_groupList[1].length; i++) {
		aqoursMembers.push(z.ext_groupList[1][i])
	}
	for (i = 0; i < z.ext_groupList[2].length; i++) {
		nijiMembers.push(z.ext_groupList[2][i])
	}
	for (i = 0; i < z.ext_groupList[3].length; i++) {
		liellaMembers.push(z.ext_groupList[3][i])
	}
	for (i = 0; i < z.ext_groupList[4].length; i++) {
		hasuMembers.push(z.ext_groupList[4][i])
	}
	randomizeLogo()
})
/* .then(randomizeLogo()) */

function randomizeLogo() {
	var randGroup = Math.floor(Math.random()*groupList.length);
	var randMember = Math.floor(Math.random()*groupList[randGroup].length);
	document.querySelector(":root").style.setProperty("--randGirlColor_half", groupList[randGroup][randMember].color + "80");
	document.querySelector(":root").style.setProperty("--randGirlColor_75", groupList[randGroup][randMember].color + "C0");
	document.querySelector(":root").style.setProperty("--randGirlColor", groupList[randGroup][randMember].color);
	document.getElementById("mainpage_logo").style.maskImage = "url('girls/" + groupList[randGroup][randMember].pfp + "')";
}

//experiment

var MPschools = [
	"url('schools/Otonokizaka_High_School0.png')",
	"url('schools/Uranohoshi_Girls_High_School.png')",
	"url('schools/Nijigasaki_High_School.png')",
	"url('schools/Yuigaoka_HS.png')",
	"url('schools/Hasunosora_Girls_High_School.png')"
]
var nightShade = "linear-gradient(90deg, rgba(10,26,69,0.36), rgba(10,26,69,0.36)), "
const groupColor = [
	"#ff1493",
	"#00bfff",
	"#ffd700",
	"#da70d6",
	"#5EF5E4"
]
const MSgrouplogos = [
	"url('general_logos/muse.png')",
	"url('general_logos/aqours.png')",
	"url('general_logos/nijigasakiHSIC.png')",
	"url('general_logos/liella.png')",
	"url('general_logos/hasunosoraHSIC.png')"
]
const MSprojlogos = [
	"url('general_logos/SIP.png')",
	"url('general_logos/sunshine.png')",
	"url('general_logos/nijigasaki.png')",
	"url('general_logos/superstar.png')",
	"url('general_logos/linklike.png')"
]
const MSprojlogosShad = [
	"url('general_logos/SIPshad.png')",
	"url('general_logos/sunshineshad.png')",
	"url('general_logos/nijigasakishad.png')",
	"url('general_logos/superstarshad.png')",
	"url('general_logos/linklikeshad.png')"
]
const MSrow1 = [
	"url('girls/honoka.png')",
	"url('girls/chika.png')",
	"url('girls/yuu.png')",
	"url('girls/kanon.png')",
	"url('girls/kaho.png')"
]
const MSrow2 = [
	"url('girls/kotori.png'), url('girls/umi.png')",
	"url('girls/you.png'), url('girls/riko.png')",
	"url('girls/ayumu.png'), url('girls/setsuna.png')",
	"url('girls/keke.png'), url('girls/chisato.png')",
	"url('girls/sayaka.png'), url('girls/rurino.png')"
]
const MSrow3 = [
	"url('girls/maki.png'), url('girls/eli.png')",
	"url('girls/hanamaru.png'), url('girls/kanan.png')",
	"url('girls/ai.png'), url('girls/lanzhu.png')",
	"url('girls/ren.png'), url('girls/sumire.png')",
	"url('girls/hime.png'), url('girls/kozue.png')"
]
const MSrow4 = [
	"url('girls/hanayo.png'), url('girls/nozomi.png')",
	"url('girls/ruby.png'), url('girls/mari.png')",
	"url('girls/shioriko.png'), url('girls/karin.png')",
	"url('girls/kinako.png'), url('girls/mei.png')",
	"url('girls/kosuzu.png'), url('girls/megumi.png')"
]
const MSrow5 = [
	"url('girls/rin.png'), url('girls/nico.png')",
	"url('girls/yoshiko.png'), url('girls/dia.png')",
	"url('girls/shizuku.png'), url('girls/emma.png')",
	"url('girls/shiki.png'), url('girls/natsumi.png')",
	"url('girls/ginko.png'), url('girls/tsuzuri.png')"
]
const MSrow6 = [
	"none, none",
	"none, none",
	"url('girls/kasumi.png'), url('girls/kanata.png')",
	"url('girls/wien.png'), url('girls/tomari.png')",
	"none, none"
]
const MSrow7 = [
	"none, none",
	"none, none",
	"url('girls/rina.png'), url('girls/mia.png')",
	"none, none",
	"none, none"
]
const MSrows = [
 "row1",
 "row2",
 "row3",
 "row4",
 "row5",
 "row6",
 "row7"
]
let rowWidth = [
 0,0,0,0,0,0,0
]
function showDescInfo() {
	document.getElementById("descInfo").classList.remove("myHide");
	document.getElementById("extra_border").classList.remove("myHide");
	document.getElementById("back_button").classList.remove("myHide");
	document.getElementById("descInfo").classList.add("shown");
	document.getElementById("extra_border").classList.add("shown");
	document.getElementById("back_button").classList.add("shown");
	//document.getElementById("descBG").style.height = "auto";
}
var showDescInfo_timeout = setTimeout(showDescInfo, 500);
let screen = 0;
let row1 = document.getElementById("row1");
let row2 = document.getElementById("row2");
let row3 = document.getElementById("row3");
let row4 = document.getElementById("row4");
let row5 = document.getElementById("row5");
let row6 = document.getElementById("row6");
let row7 = document.getElementById("row7");
var curRows = 5;
var menuList = document.getElementById("menuList");
var flag = false;
var flag_Menu = false;
var flag_NameSwitch = true;
var loadingAnim = true;
var color1 = true;
var color2 = true;
var color3 = true;
var color4 = true;
var color5 = true;
var girlName_counter = 0;
var menuOpen = false;
let nightMode = "false";
var girlList = document.querySelectorAll('.girlName')
var museMembers = []
var aqoursMembers = []
var nijiMembers = []
var liellaMembers = []
var hasuMembers = []
var groupList = [museMembers,aqoursMembers,nijiMembers,liellaMembers,hasuMembers]

let listPosDiff = groupList[screen].length - document.getElementsByClassName("girlName").length

window.addEventListener("resize", function(event) {
	document.getElementById("descBG").classList.add("noTransition");
	document.getElementById("groupBG").classList.add("noTransition");
	document.getElementById("extra_border").classList.add("noTransition");
	document.getElementById("back_button").classList.add("noTransition");
	document.getElementById("groupSelection_wrapper").classList.add("noTransition");
	if (!document.getElementsByClassName('girlName')[0].classList.contains("noTransition")){
		for (i = 0; i < document.getElementsByClassName('girlName').length; i++) {
			document.getElementsByClassName('girlName')[i].classList.add("noTransition");
		}
	}
	clearTimeout(returnTransition);
	var returnTransition = setTimeout(function() {
		document.getElementById("descBG").classList.remove("noTransition");
		document.getElementById("groupBG").classList.remove("noTransition");
		document.getElementById("extra_border").classList.remove("noTransition");
		document.getElementById("back_button").classList.remove("noTransition");
		document.getElementById("groupSelection_wrapper").classList.remove("noTransition");
		for (i = 0; i < document.getElementsByClassName('girlName').length; i++) {
			document.getElementsByClassName('girlName')[i].classList.remove("noTransition");
		}
	}, 500)
})

window.addEventListener("keydown", function (event) {
	switch (event.key) {
		case "ArrowLeft":{
			if(menuOpen){
				back_Menu()
			}
			else{
				back()
			}
		}
		break;
		case "ArrowRight":{
			if(menuOpen){
				forward_Menu()
			}
			else{
				forward()
			}
		}
		break;
		case "ArrowUp":{
			event.preventDefault();
			if(flag_Menu && flag_NameSwitch){
				flag_NameSwitch = false;
				var prevName = Array.from(document.getElementsByClassName("girlName")).indexOf(document.getElementsByClassName("curSelected")[0]) - 1
				if (prevName < 0) {
					var prevName = document.getElementsByClassName("girlName").length - 1;
				}
				document.getElementById("girlPFP").className = "start";
				setTimeout(function(){
					document.getElementById("girlPFP").className = "end";
					flag_NameSwitch = true;
				}, 50);
				document.getElementById("girlPFP").style.backgroundImage = nightShade + "url('girls_pfp/" + groupList[screen][prevName].pfp + "')";
				document.getElementById("girlPFP").style.maskImage = "url('girls_pfp/" + groupList[screen][prevName].pfp + "')";
				removeDesc();
				document.getElementById("descInfo").textContent = groupList[screen][prevName].desc;
				var descHeight = document.getElementById("descWrapper").clientHeight
				document.getElementById("descBG").style.height = 0;
				document.getElementById("descBG").style.height = 100 * descHeight / window.innerWidth + "vw";
				try {document.getElementsByClassName("curSelected")[0].style.backgroundImage = ""}
				catch {}
				document.getElementsByClassName("girlName")[prevName].classList.add("curSelected");
				document.getElementsByClassName("girlName")[prevName].children[0].classList.add("invi");
				if (prevName != document.getElementsByClassName("girlName").length - 1) {
					document.getElementsByClassName("curSelected")[1].children[0].classList.remove("invi");
					document.getElementsByClassName("curSelected")[1].classList.remove("curSelected");
				}
				else {
					document.getElementsByClassName("curSelected")[0].children[0].classList.remove("invi");
					document.getElementsByClassName("curSelected")[0].classList.remove("curSelected");
				}
				document.getElementsByClassName("curSelected")[0].style.backgroundImage = "linear-gradient(90deg, transparent, " + groupColor[screen] + "40 , transparent)";
				clearTimeout(showDescInfo_timeout);
				document.getElementById("descInfo").classList.remove("shown");
				document.getElementById("extra_border").classList.remove("shown");
				document.getElementById("descInfo").classList.add("myHide");
				document.getElementById("extra_border").classList.add("myHide");
				showDescInfo_timeout = setTimeout(showDescInfo, 500);
			}
		}
		break;
		case "ArrowDown":{
			event.preventDefault();
			if(flag_Menu && flag_NameSwitch){
				flag_NameSwitch = false;
				var nextName = Array.from(document.getElementsByClassName("girlName")).indexOf(document.getElementsByClassName("curSelected")[0]) + 1
				if (nextName >= document.getElementsByClassName("girlName").length) {
					var nextName = 0;
				}
				document.getElementById("girlPFP").className = "start";
				setTimeout(function(){
					document.getElementById("girlPFP").className = "end";
					flag_NameSwitch = true;
				}, 50);
				document.getElementById("girlPFP").style.backgroundImage = nightShade + "url('girls_pfp/" + groupList[screen][nextName].pfp + "')";
				document.getElementById("girlPFP").style.maskImage = "url('girls_pfp/" + groupList[screen][nextName].pfp + "')";
				removeDesc();
				document.getElementById("descInfo").textContent = groupList[screen][nextName].desc;
				var descHeight = document.getElementById("descWrapper").clientHeight
				document.getElementById("descBG").style.height = 0;
				document.getElementById("descBG").style.height = 100 * descHeight / window.innerWidth + "vw";
				try {document.getElementsByClassName("curSelected")[0].style.backgroundImage = ""}
				catch {}
				document.getElementsByClassName("girlName")[nextName].classList.add("curSelected");
				document.getElementsByClassName("girlName")[nextName].children[0].classList.add("invi");
				try {document.getElementsByClassName("curSelected")[0].style.backgroundImage = ""}
				catch {}
				if (nextName != 0) {
					document.getElementsByClassName("curSelected")[0].children[0].classList.remove("invi");
					document.getElementsByClassName("curSelected")[0].classList.remove("curSelected");
				}
				else {
					document.getElementsByClassName("curSelected")[1].children[0].classList.remove("invi");
					document.getElementsByClassName("curSelected")[1].classList.remove("curSelected");
				}
				document.getElementsByClassName("curSelected")[0].style.backgroundImage = "linear-gradient(90deg, transparent, " + groupColor[screen] + "40 , transparent)";
				clearTimeout(showDescInfo_timeout);
				document.getElementById("descInfo").classList.remove("shown");
				document.getElementById("extra_border").classList.remove("shown");
				document.getElementById("descInfo").classList.add("myHide");
				document.getElementById("extra_border").classList.add("myHide");
				showDescInfo_timeout = setTimeout(showDescInfo, 500);
			}
		}
		break;
	}
	/* event.preventDefault(); */
}, true);
nextInterval = setInterval(forward, 8000);
document.getElementById("background-school").onmouseenter = function(){clearInterval(nextInterval)};
document.getElementById("background-school").onmouseleave = function(){nextInterval = setInterval(forward, 8000)};
document.getElementById("extra_border").addEventListener("click", function() {
	localStorage.setItem("pos1", screen);
	localStorage.setItem("pos2", Array.from(document.getElementsByClassName("girlName")).indexOf(document.getElementsByClassName("curSelected")[0]));
})
document.getElementById("extra_border").addEventListener("mousedown", function(event) {
	if (event.button == 1) {
		localStorage.setItem("pos1", screen);
		localStorage.setItem("pos2", Array.from(document.getElementsByClassName("girlName")).indexOf(document.getElementsByClassName("curSelected")[0]));
		console.log(localStorage.getItem("pos2"))
	}
})
document.addEventListener("visibilitychange", function () {
	if (document.hidden == true) {
		clearInterval(nextInterval)
	};
	if (document.hidden == false) {
		nextInterval = setInterval(forward, 8000)
	};
});
document.getElementById("groupBG").onmouseenter = function(){
	if (flag) {
		document.getElementById("groupBG").style.height = "25%";
	};
};
document.getElementById("groupBG").onmouseleave = function(){
	if (flag) {
		document.getElementById("groupBG").style.height = "23%";
	};
};

document.getElementById("lS-1-line").style.background = "linear-gradient(to right, " + getRandomGC()
+ " 50%, " + getRandomGC() + " 50%)";
document.getElementById("lS-2-line").style.background = "linear-gradient(to right, " + getRandomGC()
+ " 33%, " + getRandomGC() + " 33%)";
document.getElementById("lS-3-line").style.background = getRandomGC();
document.getElementById("lS-1-line").style.WebkitBackgroundClip = "text";
document.getElementById("lS-1-line").style.WebkitTextFillColor = "transparent";
document.getElementById("lS-2-line").style.WebkitBackgroundClip = "text";
document.getElementById("lS-2-line").style.WebkitTextFillColor = "transparent";
document.getElementById("lS-3-line").style.WebkitBackgroundClip = "text";
document.getElementById("lS-3-line").style.WebkitTextFillColor = "transparent";

function rowAdjustment() {
	if (screen == 3) {
		initHeight = 72.5;
		currentRow = 5;
		heightAdj()
		initWidth = 32.5;
		widthMult = 12.5;
		widthAdj()
		marginAdj()
	}
	else if (screen == 2) {
		initHeight = 71.5;
		currentRow = 6;
		heightAdj()
		initWidth = 31;
		widthMult = 13;
		widthAdj()
		marginAdj()
	}
	else if (screen <= 1) {
		initHeight = 75;
		currentRow = 4;
		heightAdj()
		initWidth = 31;
		widthMult = 15;
		widthAdj()
		marginAdj()
	}
	else if (screen == 4) {
		initHeight = 75;
		currentRow = 4;
		heightAdj()
		initWidth = 35;
		widthMult = 15;
		widthAdj()
		marginAdj()
	}
}
function heightAdj() {
	if (currentRow >= 0) {
		document.getElementById(MSrows[currentRow]).style.height = initHeight - 2 * currentRow + "%";
		currentRow--;
		return heightAdj()
	}
	else if (currentRow < 0) {
		initRowNum()
	}
}
function widthAdj() {
	if (currentRow >= 0) {
		document.getElementById(MSrows[currentRow]).style.width = initWidth + widthMult * currentRow + "%";
		rowWidth[currentRow] = initWidth + widthMult * currentRow;
		currentRow--;
		return widthAdj()
	}
	else if (currentRow < 0) {
		initRowNum()
	}
}
function marginAdj() {
	if (currentRow >= 0) {
		document.getElementById(MSrows[currentRow]).style.marginLeft = 50 - rowWidth[currentRow] * 0.5 + "%";
		currentRow--;
		return marginAdj()
	}
	else if (currentRow < 0) {
		initRowNum()
	}
}
function initRowNum() {
	if (screen == 3) {
		currentRow = 5
	}
	if (screen == 2) {
		currentRow = 6
	}
	if (screen <= 1 || screen == 4) {
		currentRow = 4
	}
}

function back() {
	if (flag) {
		document.getElementById("groupBG").style.height = "0";
		document.getElementById("groupBG").style.boxShadow = "0 0.8vw inset transparent";
		document.getElementById("MSgrouplogo").style.opacity = "0";
		document.getElementById("background-school").style.opacity = "0";
		document.getElementById("MSprojlogo").style.opacity = "0";
		document.getElementById("MSprojlogo").style.marginLeft = "60%";
		setTimeout(function(){
			document.getElementById("MSprojlogo").style.marginLeft = "20%"
		}, 500);
		document.getElementById("MSprojlogo").style.backgroundImage = MSprojlogos[screen];
		/* document.querySelector(":root").style.setProperty("--FirstLastRow", "0"); */
		document.querySelector(":root").style.setProperty("--PosNegOne", "1");
		for(var i = 0; i < curRows; i++) {
			document.getElementsByClassName("MScharacters")[i].classList.add("myHidden");
		}
		setTimeout(function(){
			screen--;
			if (screen < 0) {
				screen = 4;
			}
			curRows = Math.round(groupList[screen].length / 2);
			document.querySelector(":root").style.setProperty("--curRows", curRows);

			document.getElementById("background-school").style.backgroundImage = MPschools[screen];
			document.getElementById("background-school").style.opacity = "1";
			setTimeout(function(){
				flag = true;
			}, 800);
			setTimeout(function(){
				document.getElementById("MSgrouplogo").style.opacity = "1";
				document.getElementById("MSprojlogo").style.opacity = "1";
				document.getElementById("MSprojlogo").style.backgroundImage = MSprojlogosShad[screen];
			}, 400);
			setTimeout(function(){
				document.getElementById("groupBG").style.boxShadow = "0 0.8vw inset " + groupColor[screen];
				document.getElementById("MSprojlogo").style.marginLeft = "40%";
			}, 200);
			document.getElementById("groupBG").style.height = "24%";
			document.getElementById("MSgrouplogo").style.backgroundImage = MSgrouplogos[screen];
			document.getElementById("MSprojlogo").style.backgroundImage = MSprojlogos[screen];
			changeImagesInRows();
			rowAdjustment();
			/* document.querySelector(":root").style.setProperty("--FirstLastRow", curRows-1); */
			document.querySelector(":root").style.setProperty("--PosNegOne", "-1");
			for(var i = 0; i < curRows; i++) {
				document.getElementsByClassName("MScharacters")[i].classList.remove("myHidden");
			}
		}, 800);
		flag = false;
	}
}
function forward() {
	if (flag) {
		document.getElementById("groupBG").style.height = "0";
		document.getElementById("groupBG").style.boxShadow = "0 0.8vw inset transparent";
		document.getElementById("MSgrouplogo").style.opacity = "0";
		document.getElementById("background-school").style.opacity = "0";
		document.getElementById("MSprojlogo").style.opacity = "0";
		document.getElementById("MSprojlogo").style.marginLeft = "20%";
		setTimeout(function(){
			document.getElementById("MSprojlogo").style.marginLeft = "60%"
		}, 500);
		document.getElementById("MSprojlogo").style.backgroundImage = MSprojlogos[screen];
		/* document.querySelector(":root").style.setProperty("--FirstLastRow", "0"); */
		document.querySelector(":root").style.setProperty("--PosNegOne", "1");
		for(var i = 0; i < curRows; i++) {
			document.getElementsByClassName("MScharacters")[i].classList.add("myHidden");
		}
		setTimeout(function(){
			screen++;
			if (screen > 4) {
			screen = 0;
			}
			curRows = Math.round(groupList[screen].length / 2);
			document.querySelector(":root").style.setProperty("--curRows", curRows);

			document.getElementById("background-school").style.backgroundImage = MPschools[screen];
			document.getElementById("background-school").style.opacity = "1";
			setTimeout(function(){
				flag = true;
			}, 800);
			setTimeout(function(){
				document.getElementById("MSgrouplogo").style.opacity = "1";
				document.getElementById("MSprojlogo").style.opacity = "1";
				document.getElementById("MSprojlogo").style.backgroundImage = MSprojlogosShad[screen];
			}, 400);
			setTimeout(function(){
				document.getElementById("groupBG").style.boxShadow = "0 0.8vw inset " + groupColor[screen];
				document.getElementById("MSprojlogo").style.marginLeft = "40%";
			}, 200);
			document.getElementById("groupBG").style.height = "24%";
			document.getElementById("MSgrouplogo").style.backgroundImage = MSgrouplogos[screen];
			document.getElementById("MSprojlogo").style.backgroundImage = MSprojlogos[screen];
			changeImagesInRows();
			rowAdjustment();
			/* document.querySelector(":root").style.setProperty("--FirstLastRow", curRows); */
			document.querySelector(":root").style.setProperty("--PosNegOne", "-1");
			for(var i = 0; i < curRows; i++) {
				document.getElementsByClassName("MScharacters")[i].classList.remove("myHidden");
			}
		}, 800);
		flag = false;
	}
}
function changeImagesInRows() {
	row1.style.backgroundImage = nightShade + MSrow1[screen];
	row1.style.maskImage = MSrow1[screen];
	row2.style.backgroundImage = nightShade + MSrow2[screen];
	row2.style.maskImage = MSrow2[screen];
	row3.style.backgroundImage = nightShade + MSrow3[screen];
	row3.style.maskImage = MSrow3[screen];
	row4.style.backgroundImage = nightShade + MSrow4[screen];
	row4.style.maskImage = MSrow4[screen];
	row5.style.backgroundImage = nightShade + MSrow5[screen];
	row5.style.maskImage = MSrow5[screen];
	row6.style.backgroundImage = nightShade + MSrow6[screen];
	row6.style.maskImage = MSrow6[screen];
	row7.style.backgroundImage = nightShade + MSrow7[screen];
	row7.style.maskImage = MSrow7[screen];
}
function animLoaded() {
	document.getElementById("nightModeIcon").style.backgroundImage = "linear-gradient(90deg, var(--themeColor5), var(--themeColor5))";
	document.getElementById("testbox1").classList.add("Anim_slide1");
	
	if (localStorage.getItem("nightmode") != null){
		nightMode = localStorage.getItem("nightmode");
	}
	else {
		localStorage.setItem("nightmode", nightMode);
	}
	changeTheme();
	changeImagesInRows();
	
	document.getElementById("piska1").style.width = "0.8vw";
	setTimeout(function(){document.getElementById("piska1").style.width = "0px"}, 750);
	setTimeout(function(){
		document.getElementById("testbox1").remove();
		/* document.getElementById("testbox1").style.display = "none"; */
		document.getElementById("testbox2").classList.add("Anim_slide2");
		document.getElementById("piska2").style.width = "0.8vw";
		setTimeout(function(){document.getElementById("piska2").style.width = "0px"}, 750);
		setTimeout(function(){
			document.getElementById("testbox2").remove();
			/* document.getElementById("testbox2").style.display = "none"; */
			document.getElementById("testbox3").classList.add("Anim_slide3");
			document.getElementById("piska3").style.width = "0.8vw";
			setTimeout(function(){document.getElementById("piska3").style.width = "0px"}, 750);
			setTimeout(function(){document.getElementById("testbox3").remove();}, 1000);
			/* setTimeout(function(){document.getElementById("testbox3").style.display = "none";}, 1000); */
		}, 1000);
	}, 1000);
	
	setTimeout(function() {
		window.scrollTo(0, 0);
		document.getElementById("loadingScreen").style.opacity = "0";
		setTimeout(function() {
			document.getElementById("loadingScreen").remove();
			flag = true;
			loadingAnim = false;
		}, 1000);
	}, 3000);
}
function getRandomGC() {
	switch (Math.floor(Math.random()*5)) {
		case 0:
			if (color1 == true) {
				color1 = false;
				return "deeppink";
			} else {return getRandomGC()};
		case 1:
			if (color2 == true) {
				color2 = false;
				return "deepskyblue";
			} else {return getRandomGC()};
		case 2:
			if (color3 == true) {
				color3 = false;
				return "gold";
			} else {return getRandomGC()};
		case 3:
			if (color4 == true) {
				color4 = false;
				return "orchid"
			} else {return getRandomGC()};
		case 4:
			if (color5 == true) {
				color5 = false;
				return "#5EF5E4";
			} else {return getRandomGC()};
	}
}
function enterSchoolMenu() {
	if (flag) {
		flag = false;
		menuOpen = true;
		document.getElementById("groupBG").style.height = "0";
		document.querySelector(":root").style.setProperty("--PosNegOne", "1");
		for(var i = 0; i < curRows; i++) {
			document.getElementsByClassName("MScharacters")[i].classList.add("myHidden");
		}
		document.getElementById("MSprojlogo").style.opacity = "0";
		document.getElementById("MSprojlogo").style.top = "0%";
		document.getElementById("MSprojlogo").style.backgroundImage = MSprojlogos[screen];
		document.getElementById("MSgradient_gBG").style.height = "0";
		document.getElementById("MPnavigLeft").style.left = "-4%";
		document.getElementById("MPnavigRight").style.right = "-4%";
		setTimeout(function(){
			document.getElementById("menuBox").style.marginLeft = "75%";
			document.getElementById("menuBox-outerGrad").style.width = "25%";
			document.getElementById("background-school").style.left = "-12.5%";
		}, 220);
		fillGirlsList();
	}
}
function exitSchoolMenu() {
	if (flag_Menu) {
		flag_Menu = false;
		menuOpen = false;
		//code for removing menu parts
		animationMenuUnloaded()
		document.getElementById("girlPFP").className = "hide";
		//code for removing menu parts

	}
}

function fillGirlsList() {
	removeNames();
	changeListPos();
	for (i = 0; i < groupList[screen].length; i++) {
		document.getElementsByClassName("girlName")[i].insertAdjacentHTML("afterbegin", groupList[screen][i].name);
	}
	
	var selectFirstName_timeout = 800 + 50 * document.getElementsByClassName("girlName").length;
	applyGCtoMenu();
	var girlList = document.querySelectorAll('.girlName')
	adjustFontSize();
	setTimeout(animationMenuLoaded, 350);
	setTimeout(function(){
		girlList.forEach(function(check){
			check.addEventListener('click', NameSelect);
		});
		Array.from(document.getElementsByClassName("groupSelection_groupButtons")).forEach(function(button){
			button.addEventListener('click', GroupSelect);
		});
		flag_Menu = true;
		document.getElementsByClassName("girlName")[0].click();
		document.getElementById("extra_border").classList.remove("myHidden");
		document.getElementById("back_button").classList.remove("myHidden");
		document.getElementById("groupSelection_wrapper").classList.remove("myHide");
		document.getElementById("extra_border").classList.add("shown");
		document.getElementById("back_button").classList.add("shown");
		document.getElementById("descBG").classList.remove("descBG_unloaded");
		document.getElementById("descBG").classList.add("descBG_loaded");
		setTimeout(function() {
			document.getElementById("descInfo").classList.remove("myHidden");
			document.getElementById("descInfo").classList.add("shown");
		}, 1600);
	}, selectFirstName_timeout)
}

function removeRetrieveMenuElements() {
	flag_Menu = false;
	animationMenuUnloaded();
	document.getElementById("girlPFP").className = "hide";
	document.getElementById("descBG").classList.remove("descBG_loaded");
	document.getElementById("descBG").classList.add("descBG_unloaded");
	document.getElementById("descInfo").classList.remove("shown");
	document.getElementById("extra_border").classList.remove("shown");
	document.getElementById("back_button").classList.remove("shown");
	document.getElementById("descInfo").classList.add("myHidden");
	document.getElementById("extra_border").classList.add("myHidden");
	document.getElementById("back_button").classList.add("myHidden");
	document.getElementById("groupSelection_wrapper").classList.add("myHide");
	for(var i = 0; i < document.getElementsByClassName("girlName").length; i++){
		document.getElementsByClassName("girlName")[i].classList.remove("curSelected");
		document.getElementsByClassName("girlName")[i].children[0].classList.remove("invi");
	}
	setTimeout(function(){
		document.getElementById("girlPFP").remove();
		document.getElementById("background-school").style.backgroundImage = MPschools[screen];
		document.getElementById("background-school").style.opacity = "100%";
		setTimeout(function(){
			fillGirlsList();
		}, 400)
	}, 800)
	document.getElementById("background-school").style.opacity = "0";
}

function forward_Menu() {
	if(flag_Menu){
		removeRetrieveMenuElements();
		screen++;
		if (screen > groupList.length - 1) {
			screen = 0;
		}
	}
}

function back_Menu() {
	if(flag_Menu){
		removeRetrieveMenuElements();
		screen--;
		if (screen < 0) {
			screen = groupList.length - 1;
		}
	}
}

function NameSelect(event) {
	if (flag_Menu) {
		var girlList = document.querySelectorAll('.girlName')
		var listPos = Array.from(girlList).indexOf(event.target)
		if (event.target != document.getElementsByClassName("curSelected")[0]) {
			document.getElementById("girlPFP").className = "start";
			setTimeout(function(){
				document.getElementById("girlPFP").className = "end";
			}, 0);
			document.getElementById("girlPFP").style.backgroundImage = nightShade + "url('girls_pfp/" + groupList[screen][listPos].pfp + "')";
			document.getElementById("girlPFP").style.maskImage = "url('girls_pfp/" + groupList[screen][listPos].pfp + "')";
			clearTimeout(showDescInfo_timeout);
			document.getElementById("descInfo").classList.remove("shown");
			document.getElementById("extra_border").classList.remove("shown");
			document.getElementById("descInfo").classList.add("myHide");
			document.getElementById("extra_border").classList.add("myHide");
			removeDesc();
			document.getElementById("descInfo").textContent = groupList[screen][listPos].desc;
			/* localStorage.setItem("pos1", screen);
			localStorage.setItem("pos2", listPos); */

			let descHeight = document.getElementById("descWrapper").clientHeight
			document.getElementById("descBG").style.height = 0;
			document.getElementById("descBG").style.height = 100 * descHeight / window.innerWidth + "vw"

			showDescInfo_timeout = setTimeout(showDescInfo, 500);
		}
		try {document.getElementsByClassName("curSelected")[0].style.backgroundImage = ""}
		catch {}
		for(var i = 0; i < girlList.length; i++){
			girlList[i].classList.remove("curSelected");
			girlList[i].children[0].classList.remove("invi");
		}
		document.getElementsByClassName("girlName")[listPos].classList.add("curSelected");
		document.getElementsByClassName("girlName")[listPos].children[0].classList.add("invi");
		document.getElementsByClassName("curSelected")[0].style.backgroundImage = "linear-gradient(90deg, transparent, " + groupColor[screen] + "40 , transparent)";
	}
}
Array.from(document.getElementsByClassName("groupSelection_groupButtons")).forEach(function(button){
	button.addEventListener('mouseenter', highlightButton);
});
function highlightButton(event) {
	var selectorPos = Array.from(document.getElementsByClassName("groupSelection_groupButtons")).indexOf(event.target);
	document.querySelector(":root").style.setProperty("--selectedGroup", groupColor[selectorPos]);
}

function GroupSelect(event) {
	if (flag_Menu) {
		var selectorPos = Array.from(document.getElementsByClassName("groupSelection_groupButtons")).indexOf(event.target);
		if (screen !== selectorPos) {
			removeRetrieveMenuElements();
			screen = selectorPos;
		}
		for (var i = 0; i < groupList.length; i++) {
			document.getElementsByClassName("groupSelection_groupButtons")[i].classList.remove("selected");
		}
		document.getElementsByClassName("groupSelection_groupButtons")[selectorPos].classList.add("selected");
	}
}

function animationMenuUnloaded() {
	girlName_counter = document.getElementsByClassName("girlName").length - 1;
	loop_animationMenuUnloaded();
	
	document.getElementsByClassName("curSelected")[0].style.backgroundImage = "";
	
	/* document.getElementById("girlPFP").className = "hide";
	setTimeout(function(){
		document.getElementById("girlPFP").remove();
	}, 800) */
}

function loop_animationMenuUnloaded() {
	if (girlName_counter >= 0) {
		setTimeout(function() {
			document.getElementsByClassName("girlName")[girlName_counter].classList.remove("girlName_loaded");
			girlName_counter--;
			return loop_animationMenuUnloaded()
		}, 50);
	}
}

function animationMenuLoaded() {
	/* for (i = 0; i < document.getElementsByClassName("girlName").length; i++) {
		document.getElementsByClassName("girlName")[i].classList.add("girlName_loaded");
	} */
	girlName_counter = 0;
	loop_animationMenuLoaded();
	div = document.createElement('div');
	div.id = "girlPFP";
	document.getElementById("background-school").appendChild(div);
}

function loop_animationMenuLoaded() {
	if (girlName_counter < document.getElementsByClassName("girlName").length) {
		setTimeout(function() {
			document.getElementsByClassName("girlName")[girlName_counter].classList.add("girlName_loaded");
			girlName_counter++;
			return loop_animationMenuLoaded()
		}, 50);
	}
}

function adjustFontSize() {
	if (screen == 2) {
		for (i = 0; i < document.getElementsByClassName("girlName").length; i++) {
			document.getElementsByClassName("girlName")[i].classList.add("girlName_smolFont");
		}
	}
	else {
		for (i = 0; i < document.getElementsByClassName("girlName").length; i++) {
			document.getElementsByClassName("girlName")[i].classList.remove("girlName_smolFont");
		}
	}
}

function changeListPos() {
	if (groupList[screen].length - document.getElementsByClassName("girlName").length > 0) {
		for (i = 0; i < groupList[screen].length - document.getElementsByClassName("girlName").length; i++) {
			div = document.createElement('div');
			div.classList.add("girlName");
			document.getElementById("menuList").appendChild(div);
			div0 = document.createElement('div');
			div0.classList.add("gN_grad");
			document.getElementsByClassName("girlName")[document.getElementsByClassName("girlName").length-1].appendChild(div0);
			i--;
		}
	}
	else if (groupList[screen].length - document.getElementsByClassName("girlName").length < 0) {
		for (i = 0; i < Math.abs(groupList[screen].length - document.getElementsByClassName("girlName").length); i++) {
			document.getElementsByClassName("girlName")[0].remove();
			i--;
		}
	}
}

function removeNames() {
	for (i = 0; i < document.getElementsByClassName("girlName").length; i++) {
		nodes = document.getElementsByClassName("girlName")[i].childNodes;
		for(n = 0; n < nodes.length; n++) {
			node = nodes[n];
			if(node.nodeType == Node.TEXT_NODE) {
				node.parentNode.removeChild(node);
			}
		}
	}
}

function removeDesc() {
	nodes = document.getElementById("descInfo").childNodes;
	for(n = 0; n < nodes.length; n++) {
		node = nodes[n];
		if(node.nodeType == Node.TEXT_NODE) {
			node.parentNode.removeChild(node);
		}
	}
}

function applyGCtoMenu() {
	for (let i = 0; i < document.getElementsByClassName("girlName").length; i++) {
		/* old */
		/* document.getElementsByClassName("girlName")[i].style.color = groupColor[screen]; */
		/* document.getElementsByClassName("girlName")[i].style.textShadow = "0.04em 0.04em 0.09em " + groupColor[screen]; */
		
		document.getElementsByClassName("girlName")[i].style.textShadow = "0.05em 0.05em 0.1em " + groupColor[screen] + ", -0.05em 0.05em 0.1em " + 
		groupColor[screen] + ", 0.05em -0.05em 0.1em " + groupColor[screen] + ", -0.05em -0.05em 0.1em " + groupColor[screen] + ", 0em 0em 0.5em " + 
		groupColor[screen];
		
		document.getElementsByClassName("gN_grad")[i].style.backgroundImage = "url(arrow_right_Swhite.png), url(arrow_left_Swhite.png), linear-gradient(90deg, " + groupColor[screen] + ", " + groupColor[screen] + ")";
		
		document.querySelector(":root").style.setProperty("--curGroupColor", groupColor[screen])
	}
}



function changeTheme() {
	nightMode = localStorage.getItem("nightmode");
	if (!loadingAnim && nightMode == "false") {
		localStorage.setItem("nightmode", "true");
	} else if (!loadingAnim && nightMode == "true") {
		localStorage.setItem("nightmode", "false");
	}
	nightMode = localStorage.getItem("nightmode")
	if (nightMode == "false") {
		document.getElementById("MSgradient").style.backgroundImage = "linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0.7), transparent, transparent, transparent, transparent, transparent)";
		groupColor[4] = "#39F2DB";
		nightShade = "";
		try {document.getElementById("girlPFP").style.backgroundImage = "url('girls_pfp/" +  groupList[screen][Array.from(document.getElementsByClassName("girlName")).indexOf(document.querySelector('.curSelected'))].pfp + "')";}
		catch {}
		row2.style.backgroundPositionX = "left, right";
		row3.style.backgroundPositionX = "left, right";
		row4.style.backgroundPositionX = "left, right";
		row5.style.backgroundPositionX = "left, right";
		row6.style.backgroundPositionX = "left, right";
		row7.style.backgroundPositionX = "left, right";
		changeImagesInRows();
		MPschools = [
			"url('schools/Otonokizaka_High_School0.png')",
			"url('schools/Uranohoshi_Girls_High_School.png')",
			"url('schools/Nijigasaki_High_School.png')",
			"url('schools/Yuigaoka_HS.png')",
			"url('schools/Hasunosora_Girls_High_School.png')"
		]
		document.getElementById("background-school").style.backgroundImage = MPschools[screen];
		applyGCtoMenu();
		document.querySelector(":root").style.setProperty("--themeColorAbsolute", "white")
		document.querySelector(":root").style.setProperty("--themeColor1", "white")
		document.querySelector(":root").style.setProperty("--themeColor2", "#d365b4")
		document.querySelector(":root").style.setProperty("--themeColor3", "#FFA6E6")
		document.querySelector(":root").style.setProperty("--themeColor4", "white")
		document.querySelector(":root").style.setProperty("--themeColor5", "#fcd8fc")
		document.querySelector(":root").style.setProperty("--themeColor6", "whitesmoke")
		document.querySelector(":root").style.setProperty("--themeColorSpecial", "var(--curGroupColor)")
		document.querySelector(":root").style.setProperty("--themeColorSpecial0", "lightgray")
	} else if (nightMode == "true") {
		document.getElementById("MSgradient").style.backgroundImage = "linear-gradient(to top, rgb(32, 33, 36) 3%, rgba(32, 33, 36, 0.7) 25%, transparent 50%)";
		groupColor[4] = "#5EF5E4";
		nightShade = "linear-gradient(90deg, rgba(10,26,69,0.36), rgba(10,26,69,0.36)), ";
		try {document.getElementById("girlPFP").style.backgroundImage = nightShade + "url('girls_pfp/" + groupList[screen][Array.from(document.getElementsByClassName("girlName")).indexOf(document.querySelector('.curSelected'))].pfp + "')";}
		catch {}
		row2.style.backgroundPositionX = "center, left, right";
		row3.style.backgroundPositionX = "center, left, right";
		row4.style.backgroundPositionX = "center, left, right";
		row5.style.backgroundPositionX = "center, left, right";
		row6.style.backgroundPositionX = "center, left, right";
		row7.style.backgroundPositionX = "center, left, right";
		changeImagesInRows();
		MPschools = [
			"url('schools/Otonokizaka_High_School0_night.png')",
			"url('schools/Uranohoshi_Girls_High_School_night.png')",
			"url('schools/Nijigasaki_High_School_night.png')",
			"url('schools/Yuigaoka_HS_night.png')",
			"url('schools/Hasunosora_Girls_High_School_night.png')"
		]
		document.getElementById("background-school").style.backgroundImage = MPschools[screen];
		applyGCtoMenu();
		document.querySelector(":root").style.setProperty("--themeColorAbsolute", "black")
		document.querySelector(":root").style.setProperty("--themeColor1", "#4C5055")
		document.querySelector(":root").style.setProperty("--themeColor2", "black")
		document.querySelector(":root").style.setProperty("--themeColor3", "#171717")
		document.querySelector(":root").style.setProperty("--themeColor4", "#202124")
		document.querySelector(":root").style.setProperty("--themeColor5", "#4c5055")
		document.querySelector(":root").style.setProperty("--themeColor6", "transparent")
		document.querySelector(":root").style.setProperty("--themeColorSpecial", "white")
		document.querySelector(":root").style.setProperty("--themeColorSpecial0", "var(--curGroupColor)")
	};
}