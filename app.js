const bodyParser = require('body-parser');
const express = require('express');

//Initialize express server
const app = express();

//Set server PORT and title
app.set('port', process.env.PORT || 3000);
app.locals.title = 'Test Server';

//Use bodyParser middleware to parse incoming requests to application/json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//A method for returning a obj with a filtered string- with every 3rd char from the argument string included
const cutThisString = str => {
  let filteredStr = '';
  const chars = str.split('');
  for (let i = 2; i < chars.length; i += 3) {
    filteredStr += chars[i];
  }

  return { return_string: filteredStr };
};

//POST handler accepts a string as the request body, calls the cutThisString method upon successful acceptance and sends a filtered string as a response
app.post('/test', (req, res) => {
  const { string_to_cut } = req.body;

  if (string_to_cut && typeof string_to_cut === 'string') {
    res.json(cutThisString(string_to_cut));
  } else {
    //Send a 400 status error message if string_to_cut is missing or incomplete
    res.status(400).send({
      error:
        'You are missing data! Expected request body format: {string_to_cut: <string> }'
    });
  }
  res.end();
});

//Listen on PORT 3000
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on port ${app.get('port')}`);
});
