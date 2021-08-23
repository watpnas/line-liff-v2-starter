const express = require('express');
const axios = require('axios')
const app = express();
const app2 = express();
const port = process.env.PORT || 5000;
const myLiffId = process.env.MY_LIFF_ID;
const lineKey = process.env.LINE_KEY;
const telegramTK = process.env.TELEGRAM_TK;
const telegramChatId = process.env.TELEGRAM_CHAT_ID;
//axios.defaults.baseURL = "https://api.telegram.org"
var telegramEndpoint = "https://api.telegram.org/"+ telegramTK +"/sendMessage?chat_id=" + telegramChatId;
app.use(express.static('public'));

app.get('/send-id', function(req, res) {
    res.json({id: myLiffId});
});
app.post('/echo', function(req, res) {
    res.json({line: lineKey||"999",telegram:telegramTK,body:req.body});
});
app.get('/tele', function(req, res) {
    if(req.query.text){
        axios.get(telegramEndpoint+"&text="+req.query.text)
            .then(r=>{res.send({d:r.data})})
            .catch(r=>{res.send({isError:true,msg:r})})
        

//             .then(res.json({text:req.body}))
    }else{
        res.json({isError:true,msg:'text is empty'});
    }
    
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
//app2.listen(443, () => console.log(`app listening on port ${port}!`));
