/* ------------------- SUPER SIMPLE PRINT HIGHLIGHTED TABS ------------------------ */

chrome.commands.onCommand.addListener(function(command) {

      if (command !== 'print-all-tabs')
          return;

      chrome.tabs.query({highlighted:true, currentWindow:true}, function(tabs) {
          var tabsToPrint = tabs.map(function(tab) { return tab.id; });

          if (tabsToPrint.length == 0)
              return;

      chrome.printerProvider.onPrintRequested.addListener()


      
          chrome.windows.create(function(newWindow) {
              chrome.tabs.query({windowId:newWindow.id}, function(newTabs) {
                  chrome.tabs.move(tabsToMove, {windowId:newWindow.id,index:-1}, function(movedTabs) {
                      chrome.tabs.remove(newTabs[0].id);
                  });
              });
          });
      });
  });
})
var tabsToPrint = []




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

onClick
  var selectedTab = 0;

chrome.tabs.highlight(function(tabs, highlightInfo) {
  chrome.tabs.query({tab, highlighted: true})
  }
)

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
