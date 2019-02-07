import { database } from './firebase';

// Read data
export const doRead = path => database.ref(path).once('value');

// Write data
export const doWrite = (path, data) => database.ref(path).set(data);

// Push data
export const doPush = (path, data) => database.ref(path).push(data);

// Listen on
export const doListen = (path, event, cb) => database.ref(path).on(event, cb);
