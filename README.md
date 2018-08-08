# Serverless Vandium Demo
The goal of this project is to provide a demo project that shows how to integrate [vandium 4.x](https://github.com/vandium-io/vandium-node) to [Serverless Framework](http://serverless.com/) having modern a test framework setup, in this case [Jest](https://jestjs.io/).

## Usage
For this demo I'm using node version 9.10 (haven't tried other versions yet)

PS: Be aware that to deploy that you must 1st complete the serverless setup. [Serverless quickstart guide](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)


```
git clone https://github.com/lucianopf/serverless-vandium-demo.git`
cd serverless-vandium-demo
npm i
npm test
sls deploy
```

## Contrib
Feel free to create PR's and Issues at anytime, I'll be glad to answer and merge those! :smile: