# royale-11ty

Built with the [Eleventy](https://11ty.dev/) static site generator.

## Prerequisites

Install [Node.js](https://nodejs.org/), if you don't have it already.

Then, use **npm** (which is included with Node.js) to install dependencies.

```sh
npm ci
```

## Run Local Server

For development, run the following command to start a local server.

```sh
npm start
```

Then, open a browser with the following URL: _http://localhost:8080_

Changes to files will be detected automatically, and your browser will refresh too.

## Build Locally

The build the website locally, run this command.

```sh
npm run build
```

Build output will be in __site_ directory.

> Generally, building the website shouldn't be necessary because the CI server builds and deploys automatically.

## Deployment

Deployment happens automatically. Commit changes to the master branch, and the site will be built and deployed by the CI server.