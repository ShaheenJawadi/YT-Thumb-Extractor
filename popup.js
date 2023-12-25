

var resolution='mqdefault' , vId   ;
document.addEventListener('DOMContentLoaded',  function () {

    document.getElementById('selectRes').addEventListener('change', function() {
        resolution=this.value;   
    });


    
    document.getElementById('downloadImage').addEventListener('click', function () {
        
        var imageUrl = generateLink(vId , resolution);

        console.log(vId)
    
        chrome.downloads.download({
          url: imageUrl,
          filename: vId+'_'+resolution+'.jpg',
          saveAs: true
        }, function () {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
          } else {
            console.log('Image downloaded');
          }
        });
    });
   

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
       
        var url = new URL(activeTab.url);
        var params = url.searchParams;
        if (url.hostname === 'www.youtube.com' &&params.has('v') ) {
      
            vId=params.get('v')
            document.getElementById("ThumbId").src=generateLink(vId);

              document.getElementById("box").classList.add("found");
          
        } else {
         
          console.log('This is not youtube');
        }
    });

    function generateLink(vId , res='mqdefault')
    {
        return 'https://i.ytimg.com/vi/'+vId+'/'+res+'.jpg';

    }  


});
  