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

var selectedTabs = {tab:}

  chrome.browserAction.onClick.addListener(function(tab) {
          chrome.tabs.query({currentWindow, highlighted: true}, function(tabs) {
            var selected = tabs.filter(function(tab) {
              return tab.highlighted;
            })[0];
        })
    })












  chrome.tabs.onHighlighted.addListener(function(tab) {

  } callback) //if else statement using highlighted boolean to determine if adding or removing tab

  .hasListener(function(tab))

  .forEach(function())   //iterates over array, use to print selected tabs
