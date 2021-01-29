import { Application } from './declarations';
import express from '@feathersjs/express';
import path from 'path';
import fs from 'fs';


const defaultPage = `
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Electro App</title>
  <meta name="description" content="Electro App.">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    .center {
      margin: auto;
      width: 50%;
      border: 3px solid green;
      padding: 10px;
      text-align: center;
    }
  </style>
</head>

<body>
  <div class="center">
    <h1>🎉</h1>
    <h2>Dev server is online!</h2>
    Please put ui's dist to app/public to see the actual ui.
  </div>
</body>

</html>
`;


export default (app: Application):void => {
  const uiDir = path.join(__dirname, '../public');
  if (fs.existsSync(uiDir)) {
    app.use('/', express.static(uiDir));
  } else {
    app.use('/', (req, res) => {
      res.send(defaultPage);
    });
  }
};
