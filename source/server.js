/**
 * @file server.js
 * @description Starts the Express server on the specified port.
 */

import app from "./app.js";

const PORT = 3300;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
