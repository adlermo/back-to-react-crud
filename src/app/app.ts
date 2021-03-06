require('dotenv').config();

import Server from '../server';

const port = parseInt(process.env.PORT || '8080');

const starter = new Server()
  .start(port)
  .then((port) => console.log(`Running on port ${port}`))
  .catch((error) => {
    console.error(error);
  });

export default starter;
