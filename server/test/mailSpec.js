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

describe('POST api/mail', function() {
    it('responds with a 200', function(done) {
        request(app)
            .post('/api/mail')
            //user,pass,text,
            .send({username: 'tester', password:'test'})
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});
