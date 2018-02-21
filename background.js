/*
printAllTabsApp
----------------------------------------------------
Tab selection function array format
   1. add event tab selector
   2. add event tab deselector
   3. add event select all tabs
   4. add event deselect all tabs

Print all selected function
   1. add event on print, locate all selected tabs
   2. convert all content into one format OR limit to just viewed PDFs
   3. append PDF's ordered by selection
   4. push new file to printer

Cancel print function
   1. return previously selected tabs
*/


/* Tab selector
    1. add onClick event listener
*/

var selectedTabs = [selected];

//active needed for printing?
    chrome.browserAction.onClicked.addListener(function(tab) {
          chrome.tabs.query({currentWindow, highlighted: true}, function(tabs) {
            var selected = tabs.filter(function(tab) {
              return tab.highlighted;
            })[0];
        })
    })

    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.highlight({tab, highlighted: true}, function(tabs) {
            var selected = tabs.filter(function(tab) {
              selectedTabs.push(tab[0]);
              return tab.highlighted;
            })
        })
    })

/*
    2. save highlighted tab
*/



chrome.tabs.onHighlighted.addListener(function(tab) {

} callback)



chrome.tabs.onRemoved.addListener(function(tab), selectedTabs { //integer tabID
      var removeSelected = selectedTabs.map(function(selected) {return selected[];}).indexOf(tab);
        selectedTabs.splice(removeSelected, 1);


// remove object
apps.splice(removeIndex, 1);



      chrome.tabs.query({tab, highlighted: true}, function removeTabSelection(tabs) {
        find array object and remove from array
      })
} tabID, object remove selected number))










  chrome.browserAction.onClicked.addListener(function(tab) {  //print activetab
    var action_url = "javascript:window.print();";
    chrome.tabs.update(tab.id, {url: action_url});
  });
  .forEach(function(array object)) print, activetab
