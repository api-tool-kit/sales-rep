/*****************************************
 * sales-rep service for BigCo, Inc.
 * 2019-01 mamund
 *****************************************/
 
var express = require('express');
var app = express();
var salesrep = require('./salesrep');
var port = process.env.PORT || 8383;
 
app.use('/salesrep',salesrep);
app.listen(port, () => console.log(`salesrep svc listening on port ${port}!`));
