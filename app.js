const express = require("express");
const app = express();
global.process = require('process');
const port = 3501;

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

global.request = require('request');

global.func = function(func){return require("./functions/"+func).default;}

global.access = true;

app.post("/get_lead_id", jsonParser, function(request, response){
  
  let lead_id = request.body['data'].FIELDS.ID;
  
  console.log(request);
  func('get_lead')(lead_id);
  
});


app.listen(port);




