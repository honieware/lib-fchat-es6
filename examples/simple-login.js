require("dotenv").config();

import Fchat from 'lib-fchat/lib/Fchat';
import config from './config';

var credentials = {
  account: process.env.ACCOUNT,
  password: process.env.PASSWORD
}

var fchat = new Fchat(config, credentials);
fchat.connect(process.env.CHARACTER);

fchat.onOpen(ticket => {
  console.log(`Websocket connection opened. Identifying with ticket: ${ticket}`);
});

fchat.on("IDN", () => {
  console.log(`Identification as ${fchat.user.character} Successful!`);
});

fchat.on("CON", ({ count }) => {
  console.log(`${count} characters currently in chat.`);
});