'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    let message;
    let x;
    let y;
    let z;
    let operator;
    let equalsSign;

    if (req.query.method == 'add') {
        message = 'Sample Output: ';
        operator = '+';
        x = req.query.x;
        y = req.query.y;
        z = parseInt(x) + parseInt(y);
        equalsSign = '=';
    } else if (req.query.method == 'subtract') {
        message = 'Sample Output: ';
        operator = '-';
        x = req.query.x;
        y = req.query.y;
        z = parseInt(x) - parseInt(y);
        equalsSign = '=';
    } else if (req.query.method == 'multiply') {
        message = 'Sample Output: ';
        operator = '*';
        x = req.query.x;
        y = req.query.y;
        z = parseInt(x) * parseInt(y);
        equalsSign = '=';
    } else if (req.query.method == 'divide') {
        message = 'Sample Output: ';
        operator = '/';
        x = req.query.x;
        y = req.query.y;
        z = parseInt(x) / parseInt(y);
        equalsSign = '=';
    } else {
        message = "Must choose among add, subtract, multiply, or divide"
    }


    res.render('index', { title: 'Simple Calculator',test2: equalsSign, test: message, test3: operator, test4: x, test5: y, test6: z });
});

module.exports = router;
