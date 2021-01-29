import { app, BrowserWindow } from 'electron';

import logger from './logger';
import feathersApp from './app';

feathersApp.set('electronApp', app);


function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(`http://${host}:${port}`);
}

export const openWindow = ():Promise<void> => {
  return new Promise((resolve) => {

    app.whenReady().then(createWindow);

    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
        resolve();
      }
    });
  });
};


const port = feathersApp.get('port');
const host = feathersApp.get('host');
const server = feathersApp.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () => {
  logger.info('Feathers application started on http://%s:%d', host, port);
  openWindow().then(() => logger.info('electron is ready'));
}
);


