

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
function tempLoadDataFromJson(data){
	updateNotification(data.notification);
	updateNavsections(data.quickActions);
		
}
function init()
{
	document.getElementById("reports-iframe").style.visibility = "hidden";
	UTILS.ajax("data/config.json",{done:loadPageData});

}

window.onLoad = init();
	  









