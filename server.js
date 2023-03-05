// Dependencies
 const express = require('express');

 // Configure & Run the http server
 const app = express();

 app.use(express.static(__dirname ));

 app.listen(5001, () => {
   console.log('HTTP server running on port 7000');
   });
