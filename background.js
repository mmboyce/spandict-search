function onCreated() {
    if (browser.runtime.lastError) {
      console.log(`Error: ${browser.runtime.lastError}`);
    } else {
      console.log("Item created successfully");
    }
  }

browser.contextMenus.create({
    id: "translate",
    title: "SpanishDict Translation",
    contexts: ["selection"]
}, onCreated);

browser.contextMenus.create({
    id: "conjugate",
    title: "SpanishDict Conjugation",
    contexts: ["selection"]
}, onCreated);

/*
Search the term(s) on spanishdict
*/ 
browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab){
    const selectionText = info.selectionText;

    const translateUrl = "https://www.spanishdict.com/translate/"+ selectionText;
    const conjugateUrl = "https://www.spanishdict.com/conjugate/"+ selectionText;

    switch(info.menuItemId){
      case "translate":
        browser.tabs.create({
          url: translateUrl});
        break;
      case "conjugate":
        browser.tabs.create({
          url: conjugateUrl});
        break;
    }
}