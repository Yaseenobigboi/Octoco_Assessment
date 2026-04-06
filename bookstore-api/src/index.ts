// this must start the server on a port and log that its running

import app from './app';

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
