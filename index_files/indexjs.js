function onclickToday() {
	if (document.getElementById("content").getAttribute("class")=="cm fontsizeSmall")
		document.getElementById("content").setAttribute("class","cm fontsizeSmall displayNone");
	else document.getElementById("content").setAttribute("class","cm fontsizeSmall");
};

function onclickAbout()
{
	alert("JuTemp 2022Sept7th Modified.");
}

