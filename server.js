// Dependencies
 const express = require('express');

 // Configure & Run the http server
 const app = express();

 app.use(express.static(__dirname + '/public'));

 app.listen(5001, () => {
   console.log('HTTP server running on port 5001');
   });
