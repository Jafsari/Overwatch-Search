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


describe('POST api/auth/login', function() {
    it('responds with JSON when created', function(done) {
        request(app)
            .post('/api/auth/signup')
            .send({username: 'tester', password:'test'})
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});

describe('POST api/auth/signup', function() {
    it('responds with JSON when created', function(done) {
        request(app)
            .post('/api/auth/signup')
            .send({username: 'testeeeeeeeee', password:'test'})
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});


