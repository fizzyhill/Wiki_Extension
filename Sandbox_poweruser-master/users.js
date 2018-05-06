// Defining global var
var tab_url; 

// Getting currentTab
function getCurrentTab(callback){
    tab_url;
    chrome.tabs.query({active:true, currentWindow:true},function(tab){
        tab_url = tab[0].url
        get_page(tab_url)
        callback(tab[0].url);
    });
};

// Chained function because chrome.tabs.query is asynchronous
function displayTab(tab){
  console.log(tab_url)
  return tab
}

// Chained function too
// Actual code nested
function get_page(url) {

  // Retrieving url
  url_tab = url.split("/wiki/")[1]

  // Creating list of all user names + edits + size of edits
  var all_user_names = []
  var number_edits = []
  var size_edits = []
  var table_here = document.getElementById("myTable");
  table_here.createTHead()


  // XHTML REQUEST
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {

    // Retrieving all usernames
    table = this.responseXML.getElementsByClassName("top-editors-table")[0]
    for (i=0, table.getElementsByClassName("sort-entry--username"); i< 20; i++){
        all_user_names.push(table.getElementsByClassName("sort-entry--username")[i].getAttribute("data-value"))
    }
    for (i=0, table.getElementsByClassName("sort-entry--edits"); i<20; i++){
      number_edits.push(table.getElementsByClassName("sort-entry--edits")[i].getAttribute("data-value"))
    }
    for (i=0, table.getElementsByClassName("sort-entry--added-bytes"); i<20; i++){
      size_edits.push(table.getElementsByClassName("sort-entry--added-bytes")[i].getAttribute("data-value"))
    }
    // Replacing them in HTML document

    for (i=0, all_user_names; i < all_user_names.length; i++){
      document.getElementsByClassName("link-user")[i].innerHTML = all_user_names[i]
      document.getElementsByClassName('link-user')[i].href = "https://en.wikipedia.org/wiki/User:" + all_user_names[i];
      document.getElementsByClassName("cell-2")[i].innerHTML = number_edits[i]
      document.getElementsByClassName("cell-3")[i].innerHTML = size_edits[i]
    

    // Scraping userboxes
    var all_userboxes = []
    var ubx = new XMLHttpRequest()
    ubx.onload = function() {
      ubx_table = this.responseXML.getElementsByClassName("userboxes")[0]
      if (typeof ubx_table !== "undefined") {
          all_userboxes.push(ubx_table);
      }
    } 
    

    ubx.open("GET", "https://en.wikipedia.org/wiki/User:" + all_user_names[i]);
    ubx.responseType = "document";
    ubx.send()

    }


    // Reading HTML attributes of page retrieved
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

  xhr.open("GET", "https://xtools.wmflabs.org/articleinfo/en.wikipedia.org/"+url_tab);
  xhr.responseType = "document";
  xhr.send();

  // Reading HTML attributes of page retrieved
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

  // Request for getting page creation and number of edits

  var getJSON = function(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'json';
      xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
          callback(null, xhr.response);
        } else {
          callback(status, xhr.response);
        }
      };
      xhr.send();
  };

  getJSON('https://xtools.wmflabs.org/api/page/articleinfo/en.wikipedia.org/'+url_tab,
  function(err, data) {
    if (err !== null) {
      console.log(err);
    } else {
      console.log(data);
        document.getElementById("h5-span-created").innerHTML = data.created_at
        document.getElementById("h5-span-author").innerHTML = data.author     
        document.getElementById('h5-span-author').href = "https://en.wikipedia.org/wiki/User:" + data.author; 
        document.getElementById("h5-span-contributions").innerHTML = data.revisions
        document.getElementById("h5-span-contributors").innerHTML = data.editors   

    }
  });

}

// Calling main function - asynchronous won't be problematic
getCurrentTab(displayTab)


