chrome.contextMenus.create({
  id: "SenseCurrent",
  title: "SenseCurrent",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "SenseCurrent") {
    const now = new Date();
    const time = now.getTime();
    const date = now.toLocaleDateString();
    const selectedText = time + info.selectionText + date ;
    x = []
        for (const char in selectedText){
            x.push(char.charCodeAt());   
         }
    const sum = (arr) =>{
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += (arr[i]*arr[i]);
        }
        return (total * (arr.length * arr.length));
    };
    const result = sum(x);
    chrome.tabs.create({ url: `https://${result}.com` });
  }
});
