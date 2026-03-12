chrome.action.onClicked.addListener((tab) => {
  if (tab.url && (tab.url.startsWith("http://") || tab.url.startsWith("https://"))) {
    const archiveUrl = "https://archive.ph/" + tab.url;
    chrome.tabs.update(tab.id, { url: archiveUrl });
  }
});
