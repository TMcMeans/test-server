process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const app = require('../app.js');

chai.use(chaiHttp);

describe('/test', () => {
  //happy path tests that this route returns a modified string as a response to POST request
  it('POST should send a return_string value', done => {
    chai
      .request(app)
      .post('/test')
      .send({ string_to_cut: '123456789' })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.a.property('return_string');
        res.body.return_string.should.equal('369');
        done();
      });
  });

  //sad path tests that a 400 error and message is sent as a response if request is missing data or not a string
  it('POST should return a 400 error if request data is incomplete', done => {
    chai
      .request(app)
      .post('/test')
      .send({
        string_to_cut: ''
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.error.should.be.a('string');
        res.body.error.should.equal(
          'You are missing data! Expected request body format: {string_to_cut: <string> }'
        );
        done();
      });
  });
  it('POST should return a 400 error if string_to_cut is not a string', done => {
    chai
      .request(app)
      .post('/test')
      .send({
        string_to_cut: 123456789
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.error.should.be.a('string');
        res.body.error.should.equal(
          'You are missing data! Expected request body format: {string_to_cut: <string> }'
        );
        done();
      });
  });
});
