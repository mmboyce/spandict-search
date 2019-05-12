function onCreated() {
    if (browser.runtime.lastError) {
      console.log(`Error: ${browser.runtime.lastError}`);
    } else {
      console.log("Item created successfully");
    }
  }

browser.contextMenus.create({
    id: "translate",
    title: "Translation",
    contexts: ["selection"]
}, onCreated);

browser.contextMenus.create({
    id: "conjugate",
    title: "Conjugation",
    contexts: ["selection"]
}, onCreated);

browser.contextMenus.create({
    id: "examples",
    title: "Examples",
    contexts: ["selection"]
}, onCreated);

browser.contextMenus.create({
  id: "phrases",
  title: "Phrases",
  contexts: ["selection"]
}, onCreated);

/*
Search the term(s) on spanishdict
*/ 
browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab){
    const baseUrl = "https://www.spanishdict.com/"
    const selectionText = info.selectionText;

    const translateUrl = baseUrl + "translate/" + selectionText;
    const conjugateUrl = baseUrl + "conjugate/" + selectionText;
    const examplesUrl = baseUrl + "examples/" + selectionText;
    const phrasesUrl = baseUrl + "phrases/" + selectionText;

    switch(info.menuItemId){
      case "translate":
        browser.tabs.create({
          url: translateUrl});
        break;
      case "conjugate":
        browser.tabs.create({
          url: conjugateUrl});
        break;
      case "examples":
          browser.tabs.create({
            url: examplesUrl});
          break;
      case "phrases":
          browser.tabs.create({
            url: phrasesUrl});
          break;
    }
}