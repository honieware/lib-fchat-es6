require("dotenv").config();

import ApiManager from 'lib-fchat/lib/ApiManager';
import config from './config';

var credentials = {
  account: process.env.ACCOUNT,
  password: process.env.PASSWORD
}

var apiManager = new ApiManager(config.api, credentials);
apiManager.getTicket().then(res => console.log(res));