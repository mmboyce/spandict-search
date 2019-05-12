function onCreated() {
    if (browser.runtime.lastError) {
      console.log(`Error: ${browser.runtime.lastError}`);
    } else {
      console.log("Item created successfully");
    }
  }

browser.contextMenus.create({
    id: "spanish-dict",
    title: "Search on SpanishDict",
    contexts: ["selection"]
}, onCreated);


/*
Search the term(s) on spanishdict
*/ 
browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab){
    const queryUrl = "https://www.spanishdict.com/translate/"+ info.selectionText;
    
    browser.tabs.create({
        url: queryUrl});
}