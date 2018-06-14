var expect = require('chai').expect;
var app = require('../app');
var request = require('supertest');


const userCredentials = {
    email: 'testing', 
    password: 'tester'
  }

  var authenticatedUser = request.agent(app);

  before(function(done){
    authenticatedUser
      .post('/api/auth/login')
      .send(userCredentials)
      .end(function(err, response){
        expect(response.statusCode).to.equal(200);
        done();
      });
      describe('GET /api/users', function(done){
        //addresses 1st bullet point: if the user is logged in we should get a 200 status code
          it('should return a 200 response if the user is logged in', function(done){
            authenticatedUser.get('/api/users')
            .expect(200, done);
          });
    
          it('should return a 302 response and redirect to /login', function(done){
            request(app).get('/api/users')
            .expect(404, done);
          });
  });