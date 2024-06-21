                  function runScriptInIframe() {
            const iframe = document.getElementById('uv-frame');
            const iframeWindow = iframe.contentWindow;
            const iframeDocument = iframe.contentDocument || iframeWindow.document;
            
            // 任意のJavaScriptコードをiframe内で実行
            const script = `
                (function() {
                    // ここに実行したいJavaScriptコードを記述
                    var newDiv = document.createElement('div');
                    newDiv.innerHTML = 'This is a new div created inside the iframe';
                    newDiv.style.color = 'red';
                    document.body.appendChild(newDiv);
                })();
            `;
            
            // iframe内でコードを実行
            iframeWindow.eval(script);
        }

        // iframeが読み込まれた後にrunScriptInIframeを実行
        document.getElementById('uv-frame').onload = runScriptInIframe;
