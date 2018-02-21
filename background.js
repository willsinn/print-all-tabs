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







var selectedTabs = [];


chrome.tabs.onHighlighted.addListener(function(selectedTab, highlightInfo) {
    var selectedTab = 0;
    for (var i=0; i < selectedTabs.length; i++) {
      if (selectedTabs[i] === selectedTab)
          break;

        } else {

          selectedTab[highlightInfo.selectedTabs].highlight.push(highlightInfo);
        }
        return selectedTab;
}

/*
    2. save highlighted tab

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

chrome.browserAction.onClicked.addListener(function(tab) { //highlight
chrome.tabs.query({selectedTab, highlighted: true}, function(tabs) {
})}





chrome.tabs.onRemoved.addListener(function(tab), selectedTabs { //integer tabID
      var removeSelected = selectedTabs.map(function(selected) {return selected[];}).indexOf(tab);
        selectedTabs.splice(removeSelected, 1);


// remove object
apps.splice(removeIndex, 1);



      chrome.tabs.query({tab, highlighted: true}, function removeTabSelection(tabs) {
        find array object and remove from array
      })
} tabID, object remove selected number))





chrome.commands.onCommand.addListener(function (command) {
    var tabCount = {
      all: 0,
      selected: 0
    };

    var countAll = function(tabs) {
      tabCount.all = tabs.length;
    }

    var countHighlighted = function(tabs) {
      tabCount.highlighted = tabs.length;


    tabCount.highlighted.forEach(function(tabs, tabCount[selected]) {
        var action_url = "javascript:window.print();";      }
    )

})




  chrome.browserAction.onClicked.addListener(function(tab) {  //print activetab, active needed for printing?
    selectedTab[] = !selectedTab

    chrome.tabs.update(tab.id, {url: action_url});
  });



  // every open tab has an id, all of them are either highlighted or not highlighted


  var openTabs = selectedTabs[0];
  var selectedTabs = "";



    var createNewTab = chrome.tabs.onCreated.addListener(function(Tab) {

    })
