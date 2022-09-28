# nodejs-browser-keyboard-to-udp
Send browser keypresses to NodeJS backend, that sends messages to udp

## Usage
1. In terminal 1, run 
```
npm run dev
```
1. In terminal 2, run 
```
python udp_subscriber.py
```



## Setup
```
npm init -y
npm install express
npm i --save-dev nodemon
npm run dev
```

## Tech Stack
* NodeJS
* Express
* UDP

## Notes
* Browser > Network > Check "Disable cache"
* If showing cannot get info, run npm dev again
* in postInfo, remember to add (e) in postInfo

## Source
* [Passing Data from Frontend to Backend](https://www.youtube.com/watch?v=5TxF9PQaq4U)
* [NodeJS UDP send](https://www.geeksforgeeks.org/node-js-socket-send-method/)