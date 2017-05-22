var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log(req.query);
    res.json({dep:"diint"});
});

app.listen(3001, function () {
    console.log('Приклад застосунку, який прослуховує 3000-ий порт!');
});