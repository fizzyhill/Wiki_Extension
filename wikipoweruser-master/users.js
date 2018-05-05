// Defining global var
var tab_url; 

// 
function getCurrentTab(callback){
    tab_url;
    chrome.tabs.query({active:true, currentWindow:true},function(tab){
        tab_url = tab[0].url
        get_page(tab_url)
        callback(tab[0].url);
    });
};

function displayTab(tab){
  console.log(tab_url)
  return tab
}

function get_page(url) {

  url_tab = url.split("/wiki/")[1]
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://xtools.wmflabs.org/articleinfo/en.wikipedia.org/" + url_tab, false);
  xhr.setRequestHeader('Content-Type', 'text/xml');
  xhr.send();

  var created = document.getElementById('created');
  console.log(created)
  created.innerHTML = url_tab;

  var xhr = new XMLHttpRequest(); //get list of top editors
  xhr.onload = function() {
  table = this.responseXML.getElementsByClassName("top-editors-table")[0]
  var usernames = new Array()
  for (i=0, this.responseXML.getElementsByClassName("top-editors-table")[0].getElementsByClassName("sort-entry--username"); i< 20; i++){
      var username = this.responseXML.getElementsByClassName("top-editors-table")[0].getElementsByClassName("sort-entry--username")[i].getAttribute("data-value");
      usernames[i] = username
  }
      console.log(usernames)
  }
  xhr.open("GET", "https://xtools.wmflabs.org/articleinfo/en.wikipedia.org/" + url_tab);
  xhr.responseType = "document";
  xhr.send();

  function HTMLinXHR() {
    if (!window.XMLHttpRequest)
      return false;
    var req = new window.XMLHttpRequest();
    req.open('GET', window.location.href, false);
    try {
      req.responseType = 'document';
    } catch(e) {
      return true;
    }
    return false;
  }

}

getCurrentTab(displayTab)
