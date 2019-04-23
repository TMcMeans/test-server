// It only needs to accept a POST request to the route “/test” which accepts one argument “string_to_cut” returns a JSON object with the key “return_string” and a string containing every third letter from the original string. E.g. if you POST {"string_to_cut": "iamyourlyftdriver"}, it will return: {"return_string": "muydv"}.] To see expected behavior you can test against a current working example with the command: curl -X POST https://lyft-interview-test.herokuapp.com/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'

const bodyParser = require('body-parser');
const express = require('express');
//Initialize express server
const app = express();

//Set server PORT and title
app.set('port', process.env.PORT || 3000);
app.locals.title = 'Test Server';

//Use bodyParser middleware to parse incoming requests to application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//A method for returning a new string with every 3rd char from the argument string included
const cutThisString = str => {
  let cutString = '';
  let chars = str.split('');
  for (let i = 0; i < chars.length; i++) {
    if (i % 3 === 0) {
      cutString += chars[i];
    }
  }

  return { return_string: cutString };
};

//POST handler accepts a string as the request body, calls the cutThisString method upon successful acceptance and sends a modified string as a response
app.post('/test', (req, res) => {
  const { string_to_cut } = req.body;
  if (string_to_cut) {
    //Send modified string back as a response
    res.json(cutThisString(string_to_cut));
  } else {
    res.status(400).send({
      error: 'You are missing data! Expected format: {string_to_cut: <string> }'
    });
  }
  res.end();
});

//Listen on PORT 3000
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on port ${app.get('port')}`);
});
