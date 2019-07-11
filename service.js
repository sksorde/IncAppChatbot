// service.js
var AssistantV1 = require('ibm-watson/assistant/v1');

var assistant = new AssistantV1({
  version: '2019-02-28',
  iam_apikey: 'cv6kb9sGrT2c7qYhAU9UXOfTh9doOI4QAkWdjoNKx9Sn',
  url: 'https://gateway-lon.watsonplatform.net/assistant/api'
});

var service = {};

service.getMessage = function(body, context){
  console.log("SKS Service: " + body.input);
  var payload = {
    workspace_id: process.env.WORKSPACE_ID || 'a923f280-0da2-4db6-9da1-467a1bb3af46',
    input: {
      text: body.input
    },
    context: context
  };
  return new Promise((resolve, reject) =>
    assistant.message(payload, function(err, data) {
      if (err) {
        reject(err);
      } else {
        console.log(JSON.stringify(data, null, 2), '\n--------');
        return res.json(updateMessage(payload, data));
        resolve(data);
      }
    })
  );
};


/**
 * Updates the response text using the intent confidence
 * @param  {Object} input The request to the Assistant service
 * @param  {Object} response The response from the Assistant service
 * @return {Object}          The response with the updated message
 */
function updateMessage(input, response) {
  var responseText = null;
  if (!response.output) {
    response.output = {};
  } else {
    return response;
  }
  if (response.intents && response.intents[0]) {
    var intent = response.intents[0];
    // Depending on the confidence of the response the app can return different messages.
    // The confidence will vary depending on how well the system is trained. The service will always try to assign
    // a class/intent to the input. If the confidence is low, then it suggests the service is unsure of the
    // user's intent . In these cases it is usually best to return a disambiguation message
    // ('I did not understand your intent, please rephrase your question', etc..)
    if (intent.confidence >= 0.75) {
      responseText = 'I understood your intent was ' + intent.intent;
    } else if (intent.confidence >= 0.5) {
      responseText = 'I think your intent was ' + intent.intent;
    } else {
      responseText = 'I did not understand your intent';
    }
  }
  response.output.text = responseText;
  return response;
}

module.exports = service;
