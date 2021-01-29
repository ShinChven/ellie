import type {Application} from "@feathersjs/feathers";
import feathers from "@feathersjs/feathers";
import socketIO from '@feathersjs/socketio-client'
import io from 'socket.io-client';
import auth from '@feathersjs/authentication-client'

export const devNSP = 'http://localhost:3030';

export const authStorageKey = 'authorization';

let socket = io();
if (window.location.hostname === 'localhost') {
  socket = io(devNSP);
}

const client: Application & { io?: SocketIOClient.Socket } = feathers();
client
  .configure(
    socketIO(socket, {
      timeout: 60000,
    }),
  )
  .configure(
    auth({
      storageKey: authStorageKey,
      storage: window.localStorage,
    }),
  );
export default client;

export const serverUrl = (filePath: string): string | undefined => {
  if (filePath.indexOf('http') !== 0) {
    if (window.location.hostname === 'localhost' && parseInt(window.location.port, 10) >= 8000) {
      return `${devNSP}${filePath}`;
    }
  }
  return filePath;
};
