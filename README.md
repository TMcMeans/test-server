# Test Server

Test server is a basic app that makes accepts POST requests to the route "/test" which accepts one argument “string_to_cut” and returns a JSON object with the key “return_string” and a string containing every third letter from the original string.

## ⚙️ Initial Setup

OS X & Linux:

After cloning this repo type the following commands into your terminal to install dependencies and start your local server:

```
npm install
npm start
```

To view tests, quit your server (cmd + c) and type the following commands into your terminal:

```
npm test
```

## Features

The server accepts POST requests to the route "/test" which accepts one argument “string_to_cut” and returns a JSON object with the key “return_string” and a string containing every third letter from the original string. For example, if you POST {"string_to_cut": "iamyourlyftdriver"}, it will return {"return_string": "muydv"}.

## Future Iterations

This app was created as a mini-project to demonstrate my ability to write well-crafted, well-tested, readable, maintainable code on a small scale.

## 🏗 Tech Stack List

- Node.js
- Express
- Mocha
- Chai
- Chai HTTP
- Travis CI
- Heroku (deployment)

## 📥 How To Contribute

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/thingamajig`)
3. Commit your changes (`git commit -m 'Added a cool doodad!'`)
4. Push to the branch (`git push origin feature/thingamajig`)
5. Create a new Pull Request

## 🚀 Core Contributors

**Tanjie McMeans**

- [Github](https://github.com/TMcMeans/)
