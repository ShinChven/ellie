# Ellie

> Webapp as a Desktop-app.

## Plot

This is not a native way to develop an electron app.

The plot is to run a webapp inside a electron shell, so that most existing web application's code and architecture can be reused.

Since this is actually an experience of developing a web application, you'll have to develop the frontend and backend separately and synchronously.

One of the good things is you can debug your webpage inside your favorite browser.

## App

The app itself is actually a FeathersJS project which is for building real-time applications and REST APIs. It comes along with transport, database and security solutions.

And FeathersJS is based on ExpressJS.

## UI

Inside ui directory is a ReactJS based Umijs project.

You can switch it to any other web framework.

## Backend Frontend Interaction

Socket-io is configured by default in FeathersJS app, by using @feathersjs/client in the frontend, the frontend and backend can be connected bidirectionally.

REST APIs are exposed by default, if you don't want them to be called by other applications, please turn to FeatherJS's security section for authentication solution.

## Assemble

Frontend and backend project will be compiled and assembled into a single electron project in building stage, building the electron project will produce app package for your current platform.

Run `build.sh` to build the electron app.

