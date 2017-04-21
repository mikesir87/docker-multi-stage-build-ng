# Docker Multi-Stage Build for SPA (Angular)

This project started as a clone of https://github.com/DanWahlin/Angular-HelloWorld, but I've added a few things... a "todo-list" component, a Docker development environment, and a multi-stage build.


## Build

This project has a multi-stage build. More information can be found here (link coming soon).

```
docker build -t my-angular-app .
```

## Running the Application

Once you have your Docker image created, you can simply run

```
docker run -d -p 80:80 my-angular-app
```

And open your browser to http://localhost/


## Development

There are a few different ways to run the app for development.

### Running the Application Using Docker

1. Install [Docker](https://docker.com)
2. Run `docker-compose up`
3. Open your browser to http://localhost:4200/


### Running the Application Using Node

1. Install [Node.js](http://nodejs.org)
2. Run `npm install` to install app dependencies (you may see some warnings due to @ngtools/webpack and webpack...ignore them)
3. Run `npm start` to start the server.
4. Open your brower to http://localhost:4200/

### Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm run serve`.

## Further help

To get more help on the Angular CLI check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
