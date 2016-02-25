Welcome to Persona! You can find information related to the development of Like and everything else.

## Week Schedule

- Week 1 v0.1 (MVP)

- Week 2 v0.2

- Week 3 v0.3

## Sprint Schedule

This project is based on two-day sprints. Every week consists of three sprints.

Day 1:
- 10:10 Stand up 1: recap the plan for last stand up
- 13:40/14:40 stand up 2 (quick): voice up about challenges and concerns 
- 18:50 Stand up 3: plan for next day

Day 2: 
- 10:10 Stand up 1: recap the plan for last stand up
- 13:40/14:40 Stand up 2 (quick): voice up about challenges and concerns
- 16:00 Pre-merge peer review
- 18:50 Stand up 3: plan for next sprint

Group code review (by feature) and spiking will be scheduled as needed.

## Documentation
  
- Frontend | [JSDocs](http://usejsdoc.org/)
- Backend  | [RDoc](http://rdoc.sourceforge.net/)
- Database | [dbdsgnr](http://dbdsgnr.appspot.com/)

## Git Workflow

Should pass all test and rebase from `savagepopsicle/like/master` before merge.

![Git-workflow](https://cldup.com/qQvpX4x3hP.png)

## Tech Stack

- Server: Node.js, Express, Passport, Sequelize
- Database: PostgreSQL
- Frontend: AngularJS
- Deployment: AWS
- Testing:
    - Backend: Rspec
    - Frontend: Mocha, Chai, and Karma
    - Service: Travis 
- Task runner: Grunt

## Architecture

### MVP

#### MVP Architecture

![MVP architecture](https://cldup.com/7usay0HPOL.png)

#### MVP Database Schema

![MVP database schema](https://cldup.com/1GzOPc7fEE.png "MVP database schem")

#### MVP UX Flow Chart

![MVP UX Flow Chart](https://cldup.com/fFCB0098W7.png "MVP UX Flow Chart")

#### MVP router

##### User view

- /
- /signin
- /signout
- /register
- /dashboard
- /id/:id

##### API

* POST /api/signin
* POST /api/signout
* GET /api/profile/
* POST /api/profile/
* PUT /api/profile/
* DELETE /api/profile/
* GET /api/profile/:id
* GET /api/users/
* POST /api/vote

## Team

- All features are created in fullstack manner (backend to frontend).
- Scrum Master: Aaron
- Product Owner: Yifeng
