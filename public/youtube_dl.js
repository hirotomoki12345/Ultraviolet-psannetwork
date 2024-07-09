        function youtube_dl() {
            const url = document.getElementById('inputText').value;
            if (url) {
                window.location.href = `/download?url=${encodeURIComponent(url)}`;
            } else {
                alert('URLを入力してください。');
            }
        }
