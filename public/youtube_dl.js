const express = require('express');
const cors = require('cors');
const ytdl = require("ytdl-core");
const app = express();
app.use(cors());
app.listen(3000, () => {
    console.log('Server Works !!! At port 3000');
});

app.get("/download", (req, res) => {
    let URL = req.query.url;
    console.log("Original URL:", URL);

    const urlObj = new URL(URL);
    const videoId = urlObj.searchParams.get('v');
    const cleanURL = `https://www.youtube.com/watch?v=${videoId}`;
    
    console.log("Clean URL:", cleanURL);

    var stream = ytdl(cleanURL);
    stream.on('info', (info) => {
        console.log(info.title);
        console.log(info.video_id);
        res.header('Content-Disposition', 'attachment; filename="video.mp4"');
        ytdl(cleanURL, {
            format: 'mp4'
        }).pipe(res);
    });
});
