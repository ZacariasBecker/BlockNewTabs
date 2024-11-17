let blockNewTabs = false;

// Alternar bloqueio ao clicar no ícone
chrome.action.onClicked.addListener(() => {
    blockNewTabs = !blockNewTabs;
    chrome.action.setBadgeText({ text: blockNewTabs ? "ON" : "" });
    chrome.action.setBadgeBackgroundColor({ color: blockNewTabs ? "red" : "transparent" });
});

// Bloquear novas abas
chrome.tabs.onCreated.addListener((tab) => {
    if (blockNewTabs) {
        chrome.tabs.remove(tab.id);
    }
});
