var morgan = require('morgan');
var express = require('express');
var body_parser = require('body-parser');
var passport = require('./controllers/passport');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var util = require('./Utilities/utilities');
var app = express();


/////////////////// Serving Assets | Configuring MiddleWare //////////////////

app.use(morgan('dev'));
app.use(cookieParser());
app.use(body_parser.urlencoded({extended : true}));
app.use(body_parser.json());
app.use(expressSession({ secret: 'ABS', cookie: {}}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));

//////////////////////// API Endpoints ////////////////////////////

app.post('/api/signin', function(req, res, next) {
  util.authenticateUser(req, res, next, passport);
  //should check and see if user even exit
  //should return private profile on successful login
});

//TODO : add more to route, only checking to see if user is authenticated
app.get('/api/browse', util.isAuthorized, function(req, res) {
  util.getAllProfiles()
      .then(function(users){
        res.status(200).send(users);
      })
      .catch(function(err){
        console.log('Error in api/browse', err);
        res.sendStatus(404);
      });
});

app.post('/api/signout', util.signUserOut);

app.post('/api/profile/', util.checkUsername, util.createUser);
app.put('/api/profile/', util.isAuthorized, util.updateUser);
app.delete('/api/profile/', util.isAuthorized, util.deleteUser);

//TODO : add more to route, only checking to see if user is authenticated
// app.post('/api/vote', util.isAuthorized, function (req, res) {
//   util.createOrUpdateVote(req.body.treats, req.session.passport.user, req.body.votee)
//   .then(function () {
//     res.sendStatus(201);
//     return;
//   }).catch(function (err) {
//     res.sendStatus(400);
//     console.error('Error in /api/vote: ', err);
//     return;
//   });
// });

app.post('/api/profile/:id', util.isAuthorized, util.isVoted, util.createOrUpdateVote);

app.get('/api/profile/:id', util.isAuthorized, function (req, res) {
  var profileID = req.params.id;
  var profileData = {vote: {}};
  util.getProfile(null, profileID)
      .then(function(user){
        profileData.lastName = user.dataValues.lastName;
        profileData.firstName = user.dataValues.firstName;
        return util.getVoteData(profileID);
      })
      .then(function (voteData) {
        profileData.vote.extroversion = voteData.extroversion;
        profileData.vote.introversion = voteData.introversion;
        profileData.vote.thinking = voteData.thinking;
        profileData.vote.feeling = voteData.feeling;
        profileData.vote.planning = voteData.planning;
        profileData.vote.spontaneous = voteData.spontaneous;
        profileData.vote.leader = voteData.leader;
        profileData.vote.doEr = voteData.doEr;
        profileData.vote.approachability = voteData.approachability;
        profileData.vote.loneWolf = voteData.loneWolf;
        profileData.vote.verbalCommunicator = voteData.verbalCommunicator;
        profileData.vote.actionCommunicator = voteData.actionCommunicator;
        return res.status(200).send(profileData);
      })
      .catch(function(err){
        return res.sendStatus(404);
      });
  // Just return the user object associated with id
  // This should send public profile
});

app.use('/', function( req, res ){
  console.log('at root');
  res.sendStatus(200);
});

//Server SetUp
app.listen(3333);
module.exports = app;
