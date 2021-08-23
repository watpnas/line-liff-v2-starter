const express = require('express');
const app = express();
const app2 = express();
const port = process.env.PORT || 5000;
const myLiffId = process.env.MY_LIFF_ID;

app.use(express.static('public'));

app.get('/send-id', function(req, res) {
    res.json({id: myLiffId});
});
app.post('/echo', function(req, res) {
    res.json({req: req, key: process.env.Key});
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
//app2.listen(443, () => console.log(`app listening on port ${port}!`));
