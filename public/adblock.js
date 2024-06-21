                  function runScriptInIframe() {
            const iframe = document.getElementById('uv-frame');
            const iframeWindow = iframe.contentWindow;
            const iframeDocument = iframe.contentDocument || iframeWindow.document;
            
            const script = `
                (function() {
//広告枠へのタグ追加を監視
document.querySelector("div.video-ads").addEventListener('DOMNodeInserted', function(event) {
        //バナー広告の閉じるボタン取得
        let element = document.querySelector("div.ytp-ad-overlay-close-container > button");
        if(element){
                //閉じるボタンが取得できたのでクリック
                element.click();
                console.log('ad closed');
                return;
        }
        //動画広告のスキップボタン取得
        element = document.querySelector(".ytp-ad-skip-button");
        if(element){
                //スキップボタンが取得できたのでクリック
                element.click();
                console.log('ad skiped');
                return;
        }
        //動画広告のスキップボタン取得
        element = document.querySelector(".ytp-ad-skip-button-modern");
        if(element){
                //スキップボタンが取得できたのでクリック
                element.click();
                console.log('ad skiped');
                return;
        }

        element = document.querySelector("span.ytp-ad-preview-container");
        if(element){
                console.log('動画はまもなく再生されます',element);
                const videoElement= document.querySelector("video.video-stream");
                if(videoElement) {
                    console.log('videoElement.playbackRate',videoElement.playbackRate )
videoElement.playbackRate=16
console.log('videoElement.playbackRate',videoElement.playbackRate )
                }
                return;
        }
        

}, false);

//今⁠な⁠ら⁠、YouTube Premium⁠ ⁠が 3⁠ ⁠ヶ⁠月⁠無⁠料のダイアログ非表示
document.querySelector("ytd-app").addEventListener('DOMNodeInserted', function(event) {

//        console.log('ytd-app DOMNodeInserted');
       let element = document.querySelector(".ytd-popup-container:not([hidden])")
       if(element){
        //スキップボタンが取得できたのでクリック
        element.hidden=true
        console.log('promo hidden');
       }
}, false);

console.log('installed youtube ad blocker');
                
                })();
            `;
            
            iframeWindow.eval(script);
        }

        document.getElementById('uv-frame').onload = runScriptInIframe;
