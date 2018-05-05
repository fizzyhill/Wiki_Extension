

var query = { 'active': true, 'currentWindow': true };  
function callbacksie(tab) {
    var currenttab = tab[0];   
	var url = currenttab.url;   
	console.log('url: ' + url);   
	return url;
} 

async function doit(){
   //try{
      await chrome.tabs.query(query,tabs => callbacksie); 
      return tabs[0];
   //}
   //catch(err){
   //   console.log("oops") 
   //   return("oops")  	
   //}
}

var tabsie = doit();
console.log('url after call: ' + tabsie.url); 


// var xhr = new XMLHttpRequest();
// xhr.open("GET", "url", false);
// xhr.send();

// console.log(xhr.status);
// console.log(xhr.statusText);

