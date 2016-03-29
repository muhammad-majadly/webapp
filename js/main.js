

function $ (selector) {
	return document.querySelector(selector);
}


function all(selector){
	return document.querySelectorAll(selector);
}

function updateNotification (notification) {
	if(notification !==undefined){
		$(".notifications").innerHTML = notification;
	}
}

function updateActions (data) {
	if(data !==undefined){
		
	

  // get the quick action data from json file
  var quickActions=data.quickActions;
  // select all navs sections
  var navSections = all(".nav-section");
  for (var i = 0; i < navSections.length; i++) {
    // set header for every nav-section
    navSections[i].innerHTML = "<p>" + quickActions[i].label + "</p>" + navSections[i].innerHTML;
    // set background for every nav-section
    navSections[i].style.background = "black url(./img/icons/" + quickActions[i].icon + ".png)  left 50% top 70px no-repeat";
  }

  var menuCaptions = all(".menu-caption");
  for (var i = 0; i < menuCaptions.length; i++) {
    // menu header
    menuCaptions[i].innerHTML = "<p>" + quickActions[i].actionsLabel + "</p>";
  }

  var actionLists = all(".action-list");
  for (var i = 0; i < actionLists.length; i++) {
    actions = quickActions[i].actions;
    for (var j = 0; j < actions.length; j++) {
      // set links
      actionLists[i].innerHTML += "<li><a href=\"" + actions[j].url + "\">" + actions[j].label + "</a></li>"
    }
  }

}
}





function hideElem1()
{
 	
 	//document.getElementById('quick-reports').innerHTML='<h2>HelloWorld</h2>';


	if(document.getElementById("choose-sites").style.visibility == "hidden")
	{
	    document.getElementById("choose-sites").style.visibility = "visible"; 
	}
	else
	{
	    document.getElementById("choose-sites").style.visibility = "hidden"; 
	}

	
}


function myFolder()
{
 	
 	//document.getElementById('quick-reports').innerHTML='<h2>HelloWorld</h2>';
 		document.getElementById("my-folders").style.display = "block";
	    document.getElementById('quick-reports').style.display = "none";
	    document.getElementById("public-folders").style.display = "none";
	    document.getElementById("my-team-folders").style.display = "none";

	   if(document.getElementById("tab-2").className == "tabs-li") 
	    {
	    	document.getElementById("tab-2").className += " active";
	    	document.getElementById("tab-1").className = "tabs-li";
	    	document.getElementById("tab-4").className = "tabs-li";
	    	document.getElementById("tab-3").className = "tabs-li";
	    }

	    
}

 function publicFolders()
 {
 		document.getElementById("public-folders").style.display = "block";
 		document.getElementById('quick-reports').style.display = "none";
	    document.getElementById("my-folders").style.display = "none";
	    document.getElementById("my-team-folders").style.display = "none";

	   if(document.getElementById("tab-4").className == "tabs-li") 
	    {
	    	document.getElementById("tab-4").className += " active";
	    	document.getElementById("tab-1").className = "tabs-li";
	    	document.getElementById("tab-2").className = "tabs-li";
	    	document.getElementById("tab-3").className = "tabs-li";
	    }

		
 }

function quickReport()
{
 	
 	//document.getElementById('quick-reports').innerHTML='<h2>HelloWorld</h2>';
 	document.getElementById("reports-iframe").style.visibility = "hidden";
	    document.getElementById('quick-reports').style.display = "block";
	    document.getElementById("my-folders").style.display = "none";
	    document.getElementById("public-folders").style.display = "none";
	    document.getElementById("my-team-folders").style.display = "none";


	    if(document.getElementById("tab-1").className == "tabs-li") 
	    {
	    	document.getElementById("tab-1").className += " active";
	    	document.getElementById("tab-4").className = "tabs-li";
	    	document.getElementById("tab-2").className = "tabs-li";
	    	document.getElementById("tab-3").className = "tabs-li";
	    }

}

function myTeamFolders()
{

		document.getElementById("my-team-folders").style.display = "block";
		document.getElementById("reports-iframe2").style.visibility = "hidden";
		document.getElementById('quick-reports').style.display = "none";
	    document.getElementById("my-folders").style.display = "none";
	    document.getElementById("public-folders").style.display = "none";
	    


	    if(document.getElementById("tab-3").className == "tabs-li") 
	    {
	    	document.getElementById("tab-3").className += " active";
	    	document.getElementById("tab-1").className = "tabs-li";
	    	document.getElementById("tab-2").className = "tabs-li";
	    	document.getElementById("tab-4").className = "tabs-li";
	    }
}



function loadPageData(response){
	updateNotification(response.notification);
		
}
function loadQuickActions(data){
	updateActions(data);
		
}
/*function tempLoadDataFromJson(data){
	updateNotification(data.notification);
	updateActions(data.quickActions);
		
}*/
function init()
{
	quickReport();

	UTILS.ajax("data/config.json",{done:loadPageData});
	UTILS.ajax("data/config.json",{done:loadQuickActions});


}

// var ref=this.hash || window.location.hash;




window.onLoad = init();
	  









