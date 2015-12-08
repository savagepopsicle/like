//Controllers
describe('Services', function() {

  describe('Authentication', function(){
    beforeEach(module('like'));
    beforeEach(module('like.service'));
    beforeEach(module('$injector'));


    var authService;
    var $http;
    var $httpBackend
    var authSend;

    // beforeEach(inject(function(_authService_) {
    //   console.log(authService);
    // }));

    // beforeEach(function($injector) {
    //   authService = $injector('authService');
    //   $http = $injector.get($http);
    //   $httpBackend = $injector($httpBackend);
    //   authSend = sinon.spy(authService, "login"); //authService.login()
    // });

    // it('should send', function() {
    //   authSend();
    //   expect(authSend.callcount()).to.equal(1);
    // });

  // it ('should love testing, aggresively!', function(){
  //   expect('love').to.equal('love');
  // });

  it('should load angular', function() {
    expect(angular).to.exist;
  })
    // it('should receive a 200 status code on success', function() {
    //   //test what was sent through sinon spy thing
    //   var username = 'John';
    //   var password = 'this';
    //   var userObj = {
    //     username: username,
    //     password: password
    //   }
    //   $httpBackend.expectPOST('localhost:3000/api/login', {username: 'John', password: 'this'})
    //   .respond(200, {});

    //   authSend(userObj);
    //   $httpBackend.flush();

    //   $httpBackend.verifyNoOutstandingExpectation();
    //   $httpBackend.verifyNoOutstandingRequest();

    // });

    // it('should receive a 747 status code on failure', function() {
    //   username = 'John';
    //   password = 'wrong';

    //   $httpBackend.expectPOST('localhost:3000/api/login', {username: 'John', password: 'wrong'})
    //   .respond(747, {});

    //   authSend();
    //   $httpBackend.flush();

    //   $httpBackend.verifyNoOutstandingExpectation();
    //   $httpBackend.verifyNoOutstandingRequest();

    // });
    });
});