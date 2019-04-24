process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const app = require('../app.js');

chai.use(chaiHttp);

describe('/test', () => {
  //happy path
  it('POST should return a return_string', done => {
    chai
      .request(app)
      .post('/test')
      .send({ string_to_cut: 'happybirthdaymom' })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.a.property('return_string');
        res.body.return_string.should.equal('pbtao');
        done();
      });
  });

  //sad path
  // it('', done => {});
  // it('', done => {});
});
