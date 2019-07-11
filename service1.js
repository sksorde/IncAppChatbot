// service.js
/*const watson = require('watson-developer-cloud');


const assistant = new watson.AssistantV1({
  username: process.env.WATSON_USERNAME,
  password: process.env.WATSON_PASSWORD,
  url:      process.env.WATSON_URL,
  version:  process.env.WATSON_VERSION
});

exports.getMessage = body =>
  new Promise((resolve, reject) => {
    assistant.message(
      {
        workspace_id: process.env.WATSON_WORKSPACE_ID,
        input: { text: body.input }
      },
      function(err, response) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(response);
        }
      }
    );
  });
  */

/*  
//hF27S4aPZWDQrxDc_eY5nf1VzfgLwFHiXwazvbGmLaYx

const AssistantV1 = require('ibm-watson/assistant/v1');

const assistant = new AssistantV1({
  version: '2019-02-28',
  iam_apikey: 'hF27S4aPZWDQrxDc_eY5nf1VzfgLwFHiXwazvbGmLaYx',
  url: 'https://gateway-wdc.watsonplatform.net/assistant/api',
  disable_ssl_verification: true,
});

service.message({
  workspace_id: '{workspace_id}',
  input: {'text': 'Hello'}
  })
  .then(res => {
    console.log(JSON.stringify(res, null, 2));
  })
  .catch(err => {
    console.log(err)
  });
  
 service.listWorkspaces()
  .then(res => {
    console.log(JSON.stringify(res, null, 2));
  })
  .catch(err => {
    console.log(err)
  });


assistant.method(params,
  function (err, response) {
    // The error will be the first argument of the callback
    if (err.code == 404) {

      // Handle Not Found (404) error
    } else if (err.code == 413) {

      // Handle Request Too Large (413) error
    } else {
      console.log('Unexpected error: ', err.code);
      console.log('error:', err);
    }
  });
  
assistant.methodName({
  parameters,
  headers: {
    'Custom-Header': '{header_value}'
  }
},
  function (err, response) {
    if (err) {
      console.log('error:', err);
    } else {
      console.log(response);
    }
  }
);

*/

const  = require('ibm-watson/assistant/v1');

const assistant = new AssistantV1({
  version: '{version}',
  username: '{username}',
  password: '{password}',
  url: '{url}'
});


