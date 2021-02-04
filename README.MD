# Ellie

> Webapp as a Desktop-app.

## Plot

This is not a native way to develop an electron app.

The plot is to run a webapp inside a electron shell, so that most existing web application's code and architecture can be reused.

Since this is actually an experience of developing a web application, you'll have to develop the frontend and backend separately and synchronously.

One of the good things is you can debug your webpage inside your favorite browser.

### App

The app itself is actually a [FeathersJS](https://feathersjs.com/) project which is for building real-time applications and REST APIs. It comes along with transport, database and security solutions.

And FeathersJS is based on [ExpressJS](https://expressjs.com/).

You should feel free to use their ecosystem.

### UI

Inside ui directory is an [Umijs](https://umijs.org/) project based on [React](https://reactjs.org/).

You can switch it to any other web framework.

### Backend Frontend Interaction

Socket-io is configured by default in FeathersJS app, by using @feathersjs/client in the frontend, the frontend and backend can be connected bidirectionally.

REST APIs are exposed by default, if you don't want them to be called by other applications, please turn to FeatherJS's security section for authentication solution.

### Assemble

Frontend and backend project will be compiled and assembled into a single electron project in building stage, building the electron project will produce app package for your current platform.

Run `build.sh` to build the electron app.

## Getting Started

### Start The UI Dev Server

```bash
cd ui
npm install
npm start
```

An Umijs dev server will start to listen `http://localhost:8000`, it will do hot-reload once codes are changed.

### Start The Electron App In Dev mode

```bash
cd app
npm install
npm run electron:dev
```

The npm script `electron:dev` will start a Feathers app listening to port 3030, and open up an electron window to load the ui dev server's url which is `http://localhost:8000` by default.


