////////////////////////////////////////////////////////////////////////////////
//
//  Licensed to the Apache Software Foundation (ASF) under one or more
//  contributor license agreements.  See the NOTICE file distributed with
//  this work for additional information regarding copyright ownership.
//  The ASF licenses this file to You under the Apache License, Version 2.0
//  (the "License"); you may not use this file except in compliance with
//  the License.  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
////////////////////////////////////////////////////////////////////////////////

// http://restify.com/
var restify = require('restify');

// https://www.npmjs.com/package/uuid
var uuidV1 = require('uuid/v1');

// The fs module is build-in with NodeJS
var fs = require('fs');


// Define some constants
const sdkPath = "C:/local/apache-royale/sdks/apache-royale-jsonly-0.9.0-bin";
const projectRootURL = "http://localhost:8080";
const targetDirName = "static";
const compilerOutputFilename = "compilerOutput.txt";
const compilerErrorFilename = "compilerError.txt";

// Create Restify server
var server = restify.createServer();

// Enable body parser in order to be able to parse payload
server.use(restify.plugins.bodyParser());

// Define endpoint
server.post('/apache/royale/compiler/targets/html', compile);

// Serve generated static files
server.get(/\/static\/?.*/, restify.plugins.serveStatic({
    directory: __dirname
}));


/**
 * Build compiler command... mostly hardcoded for now
 * 
 * @param {String} targetFile  Full qualified target file (Main.mxml)
 * @param {String} sourcePath  Absoulte project src path
 * 
 * @returns {String}
 */
function buildCompilerCommand(sourcePath, targetFile) {

    // Concatenate compiler command
    var command = sdkPath + "/royale-asjs/js/bin/mxmlc.bat" +
                    " -source-path+=\"" + sourcePath + "\"" +
                    " -targets=JSRoyale" + 
                    " -locale=en_US" +
                    " -external-library-path+=\"" + sdkPath + "/royale-asjs/js/libs/js.swc\"" + 
                    " -allow-subclass-overrides=true" +
                    " \"" + targetFile + "\"";
    return command;
}


/**
 * Create Royale project
 * 
 * @param {String} uuid 
 * @param {String} sourceCode  Royale project source code (MXML/AS3)
 * @returns {object} 
 */
function createProject(uuid, sourceCode) {

    var projectPath = __dirname + "/" + targetDirName + "/" + uuid;
    var projectPathSrc = projectPath + "/src";
    var targetFile = projectPathSrc + "/Main.mxml";

    var targets = {projectPath: projectPath, 
                    projectPathSrc: projectPathSrc, 
                    targetFile: targetFile,
                    projectURL: projectRootURL + "/" + targetDirName + "/" + uuid + "/bin/js-debug/index.html"};

    
    if (!fs.existsSync(targetDirName)){
        fs.mkdirSync(targetDirName);
    }

    // Create unique project directory where the compiled Royale code lives
    if (!fs.existsSync(targets.projectPath)){
        fs.mkdirSync(targets.projectPath);
    }

    // Create project source directory
    if (!fs.existsSync(targets.projectPathSrc)){
        fs.mkdirSync(targets.projectPathSrc);
    }    

    // Create file 'Main.mxml' including source code from payload
    fs.appendFileSync(targets.targetFile, sourceCode);

    return targets;
}


/**
 * Compile Royale project and response with payload
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function compile(req, res, next) {
        
    // Create UUID for directory naming
    var uuid = uuidV1(); 

    // Create project dirs and target file
    var targets = createProject(uuid, req.body.source);

    // Build compiler command
    var cmd = buildCompilerCommand(targets.projectPathSrc, targets.targetFile);

    // @see: https://nodejs.org/api/child_process.html
    var exec = require('child_process').exec;

    exec(cmd, function(error, stdout, stderr) {

        // Create compiler output file
        fs.appendFileSync(targets.projectPath + "/" + compilerOutputFilename, stdout);

        // Create compiler error file
        fs.appendFileSync(targets.projectPath + "/" + compilerErrorFilename, stderr);        

        // command output is in stdout
        var obj = new Object();
        obj._id = uuid;
        obj.projectURL = targets.projectURL;
        obj.compilerOutputURL  = projectRootURL + "/" + targetDirName + "/" + uuid + "/" + compilerOutputFilename;
        obj.errorURL = projectRootURL + "/" + targetDirName + "/" + uuid + "/" + compilerErrorFilename;

        // No need to stringify the response here
        res.send(obj);
        next();
    });
}

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
