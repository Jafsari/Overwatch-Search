// we will use supertest to test HTTP requests/responses
const request = require('supertest');
// we also need our app for the correct routes!
const app = require('../app');
// make sure we use chai
var expect = require("chai").expect;
// make sure we are using our models
var mongoose = require("mongoose");
mongoose.Promise = Promise;
var db = require('../models/');


var token;

var auth = {};

function loginUser(auth) {
    return function(done) {
        request(app)
            .post('/api/auth/login')
            .send({
                username: 'test',
                password: 'secret'
            })
            .expect(200)
            .end(onResponse);

        function onResponse(err, res) {
            auth.token = res.body.token;
            return done();
        }
    };
}

beforeEach(function(done){
    db.User.create({username:'test', password:'secret'}).then(function(user) {
        auth.current_user = user
        done();
    });
});

beforeEach(loginUser(auth));

afterEach(function(done){
    db.User.remove({}).then(function() {
      done();
    });
});

describe('POST api/auth/login', function() {
    it('responds with JSON when created', function(done) {
        request(app)
            .post('/api/auth/signup')
            .send({username: 'tester', password:'test'})
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});

describe('GET /users', function() {
  it('responds with JSON', function(done) {
      request(app)
          .get('/api/users')
          .set('Authorization', 'bearer: ' + auth.token)
          .expect(200, done);
  });
});

describe('GET /users/:id', function() {
  it('responds with JSON', function(done) {
      request(app)
          .get(`/api/users/${auth.current_user.id}`)
          .set('Authorization', 'bearer: ' + auth.token)
          .expect(200, done);
  });
});

describe('PATCH /users/:id', function() {
  it('responds with JSON', function(done) {
      request(app)
          .patch(`/api/users/${auth.current_user.id}`)
          .send({
              username:'bob'
          })
          .set('Authorization', 'bearer: ' + auth.token)
          .expect(200, done);
  });
});

describe('DELETE /users/:id', function() {
  it('responds with JSON', function(done) {
      request(app)
          .delete(`/api/users/${auth.current_user.id}`)
          .set('Authorization', 'bearer: ' + auth.token)
          .expect(200, done);
  });
});


const info = {
  platform: 'pc' ,
  region: 'us' ,
  tag: 'Calvin-1337'
}
describe('search using Overwatch API', function() {
  it('responds with information about battle.net', function(done) {
      request(app)
          .post(`/api/users/search`)
          .set('Authorization', 'bearer: ' + auth.token)
          .send(info,done())
          .expect(200, done);        
  });
});



