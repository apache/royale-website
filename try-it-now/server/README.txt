# Apache-Royale-Try-it-now app

# 1. Installation of NodeJS and required modules

Install [NodeJS](https://nodejs.org/en/)  
Install [Restify](http://restify.com/)

    npm install restify
    
Instal [uuid](https://www.npmjs.com/package/uuid)

    npm install uuid

# 2. Clone server/server.js from this repo to your local machine
Search for

    const sdkPath
in server.js and point it to your local "Royale jsonly SDK"

# 3. Start server

    node server.js

# 4. How to use

Send a POST request with your Royale source code as payload:

    POST http://localhost:8080/apache/royale/compiler/targets/html
    
Payload (Make sure to escape the source code):

    {
        "source": "..." 
    }
    
Response:

    {
        "_id": "216108f0-e36c-11e7-805a-3dbc2fba1d86",
        "projectURL": "http://localhost:8080/static/216108f0-e36c-11e7-805a-3dbc2fba1d86/bin/js-debug/index.html",
        "compilerOutputURL": "http://localhost:8080/static/216108f0-e36c-11e7-805a-3dbc2fba1d86/compilerOutput.txt",
        "errorURL": "http://localhost:8080/static/216108f0-e36c-11e7-805a-3dbc2fba1d86/compilerError.txt"
    }
    
# 5. How it works

The POST request initiates the creation of a unique Royale project directory at server side including a Main.mxml file that contains the passed Royale source code.  
The project is compiled at server side and finally the service response with some particular URLs.
For now, each request creates a new unique project direcory at server side.
So we have implement some logic that takes care of removing all these directories.

A more matured version should place users in the position to create, edit and share Royale code/projects.
We also want to send the compiler log in real time back to the client by e.g. using sockets.

