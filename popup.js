
document.addEventListener('DOMContentLoaded',  function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
       
        var url = new URL(activeTab.url);
        var params = url.searchParams;
        if (url.hostname === 'www.youtube.com' &&params.has('v') ) {
      
          console.log('This is youtube');
        } else {
         
          console.log('This is not youtube');
        }
      });

});
  