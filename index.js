const server = require("./server.js");

server.listen((port = process.env.PORT || 5000), () => {
  console.log(`\n Listening on port ${port}!\n`);
});
