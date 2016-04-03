

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
		
	

  var quickActions=data.quickActions;
  var nav = all(".nav-section");
  for (var i = 0; i < nav.length; i++) {
    nav[i].innerHTML = "<p>" + quickActions[i].label + "</p>" + nav[i].innerHTML;
    nav[i].style.background = "black url(./img/icons/" + quickActions[i].icon + ".png)  left 50% top 70px no-repeat";
  }

  var menu = all(".menu-caption");
  for (var i = 0; i < menu.length; i++) {
    menu[i].innerHTML = "<p>" + quickActions[i].actionsLabel + "</p>";
  }

  var actionLists = all(".action-list");
  for (var i = 0; i < actionLists.length; i++) {
    actions = quickActions[i].actions;
    for (var j = 0; j < actions.length; j++) {
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

	if(document.getElementById("choose-sites").style.display == "none")
	{
	    document.getElementById("choose-sites").style.display = "block"; 
	}

	
}

function hideElem2()
{
 	
 	//document.getElementById('quick-reports').innerHTML='<h2>HelloWorld</h2>';


	if(document.getElementById("choose-sites2").style.visibility == "hidden")
	{
	    document.getElementById("choose-sites2").style.visibility = "visible"; 
	}
	else
	{
	    document.getElementById("choose-sites2").style.visibility = "hidden"; 
	}

	if(document.getElementById("choose-sites2").style.display == "none")
	{
	    document.getElementById("choose-sites2").style.display = "block"; 
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

	   window.location.href = "#my-folders";

	    
}

 function publicFolders()
 {
 
 		document.getElementById("public-folders").style.display = "block";
 		document.getElementById("quick-reports").style.display = "none";
	    document.getElementById("my-folders").style.display = "none";
	    document.getElementById("my-team-folders").style.display = "none";

	   if(document.getElementById("tab-4").className == "tabs-li") 
	    {
	    	document.getElementById("tab-4").className += " active";
	    	document.getElementById("tab-1").className = "tabs-li";
	    	document.getElementById("tab-2").className = "tabs-li";
	    	document.getElementById("tab-3").className = "tabs-li";
	    }

	    window.location.href = "#public-folders";
		
 }

function quickReport()
{
 	
 	//document.getElementById('quick-reports').innerHTML='<h2>HelloWorld</h2>';
 	document.getElementById("reports-iframe").style.visibility = "hidden";
	    document.getElementById('quick-reports').style.display = "block";
	    document.getElementById("my-folders").style.display = "none";
	    document.getElementById("public-folders").style.display = "none";
	    document.getElementById("my-team-folders").style.display = "none";


	    document.getElementById("choose-sites").style.visibility = "hidden"; 


	    if(document.getElementById("tab-1").className == "tabs-li") 
	    {
	    	document.getElementById("tab-1").className += " active";
	    	document.getElementById("tab-4").className = "tabs-li";
	    	document.getElementById("tab-2").className = "tabs-li";
	    	document.getElementById("tab-3").className = "tabs-li";
	    }

	    window.location.href = "#quick-reports";

}

function myTeamFolders()
{
	
		document.getElementById("my-team-folders").style.display = "block";
		document.getElementById("reports-iframe2").style.visibility = "hidden";
		document.getElementById('quick-reports').style.display = "none";
	    document.getElementById("my-folders").style.display = "none";
	    document.getElementById("public-folders").style.display = "none";

	    document.getElementById("choose-sites2").style.visibility = "hidden"; 


	    if(document.getElementById("tab-3").className == "tabs-li") 
	    {
	    	document.getElementById("tab-3").className += " active";
	    	document.getElementById("tab-1").className = "tabs-li";
	    	document.getElementById("tab-2").className = "tabs-li";
	    	document.getElementById("tab-4").className = "tabs-li";
	    }

	    window.location.href = "#my-team-folders";
}

function saveUrl() {
	// body...
	
	var url=document.getElementById('url1').value;
	var name=document.getElementById('name1').value;

	document.getElementById('reports-iframe').src=url;
	document.getElementById('href').href=url;
	document.getElementById('n1').innerHTML=name;

	document.getElementById("reports-iframe").style.visibility = "visible";
	document.getElementById("choose-sites").style.display = "none";
}




function loadPageData(response){
	updateNotification(response.notification);
		
}
function loadQuickActions(data){
	updateActions(data);
		
}





function init()
{
	var flag=0;
	var ref=this.hash || window.location.hash;
	if (ref=="#my-team-folders") {
		myTeamFolders();
		flag=1;
	}
	if (ref=="#quick-reports") {
		quickReport();
		flag=1;
	}

	if (ref=="#my-folders") {
		myFolder();
		flag=1;
	}

	if (ref=="#public-folders") {
		publicFolders();
		flag=1;
	}
	
	if (flag==0) 
	{
		quickReport();
	}
	

	UTILS.ajax("data/config.json",{done:loadPageData});
	UTILS.ajax("data/config.json",{done:loadQuickActions});



}


document.addEventListener('keyup' , function(e){
	var flag=0;
	var ref=this.hash || window.location.hash;
    switch (e.keyCode) {
        case 37:{
	if (ref=="#quick-reports") {
		flag=1;
	}

	if (ref=="#my-folders") {
		quickReport();
		flag=1;
	}	  				

	if (ref=="#my-team-folders") {

		myFolder();
		flag=1;
	}

	if (ref=="#public-folders") {
		myTeamFolders();
		flag=1;
	}

	if (flag==0) 
	{
		
	}
            break;
        }
        case 39:{
	 			

	if (ref=="#quick-reports") {
		myFolder();
		flag=1;
	}

	if (ref=="#my-folders") {
		myTeamFolders();
		flag=1;
	}	  				

	if (ref=="#my-team-folders") {
		publicFolders();
		flag=1;
	}

	if (ref=="#public-folders") {

		flag=1;
	}

	if (flag==0) 
	{
		myFolder();
	}
            break;
        }
    }
});




/*

function savelinksReports () {
    var names=[];
    var url=[];
    var array=[];
    names = all(".reportname");
    url = all(".reporturl");

    
    for (var i=0;i<3;i++)
    {
        
        var rn = names[i].children[1].value;
        var ru = url[i].children[1].value;
       // if(rn!=""&&ru!=""){   
            array.push({
                    "name":rn,
                    "url":ru
            });
        //}
        
    }
    var linkarray = JSON.parse(localStorage.getItem("linkarray"));
    if(linkarray==null){
        linkarray=[];
        for (i=0;i<3;i++)
        {
        linkarray.push({
                "name":"",
                "url":""

        });
        }
    }
    $("#quick-reports-adress").innerHTML="";
     for (i=0;i<3;i++)
    {
        linkarray[i].name=array[i].name;
        linkarray[i].url=array[i].url;
        if(array[i].name!="" && array[i].url!="" ){
            $("#quick-reports-adress").innerHTML+="<option value='"+linkarray[i].url+"'>"+linkarray[i].name+"</option>";
        }
    }
    localStorage.setItem("linkarray" , JSON.stringify(linkarray));
    setReportAdress();
    //var link = JSON.parse(localStorage.getItem("linkarray"));
        //updatelinksReports();

}*/








window.onLoad = init();
	  









