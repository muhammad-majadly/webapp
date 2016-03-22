

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
    if(quickActions[i].label  !==undefined){
    navSections[i].innerHTML = "<p>" + quickActions[i].label + "</p>" + navSections[i].innerHTML;
		}
    // set background for every nav-section
   // navSections[i].style.background = "black url(./img/icons/" + quickActions[i].icon + ".png)  left 50% top 70px no-repeat";
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

	    document.getElementById('choose-sites').style.display = "none";
	    document.getElementById("reports-iframe").style.visibility = "visible";

	    if(document.getElementById("tab-one").className == "tabs-li") 
	    {
	    	document.getElementById("tab-one").className += " active";
	    }
	    else
	    {
	    	document.getElementById("tab-one").className = "tabs-li";
	    }
	    
	    

}

function quickReport()
{
 	
 	//document.getElementById('quick-reports').innerHTML='<h2>HelloWorld</h2>';

	    document.getElementById('choose-sites').style.display = "block";
	    document.getElementById("reports-iframe").style.visibility = "hidden"; 

	    if(document.getElementById("tab-one").className == "tabs-li") 
	    {
	    	document.getElementById("tab-one").className += " active";
	    }
	    else
	    {
	    	document.getElementById("tab-one").className = "tabs-li";
	    }
	    

}

function loadPageData(response){
	updateNotification(response.notification);
		
}
function loadQuickActions(data){
	updateActions(data.quickActions);
		
}
function tempLoadDataFromJson(data){
	updateNotification(data.notification);
	updateActions(data.quickActions);
		
}
function init()
{
	document.getElementById("reports-iframe").style.visibility = "hidden";
	UTILS.ajax("data/config.json",{done:loadPageData});
	UTILS.ajax("data/config.json",{done:loadQuickActions});


}





window.onLoad = init();
	  









