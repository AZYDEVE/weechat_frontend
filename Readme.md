# Frontend - Client application

## To run the application, you need Node.js installed in your computer

https://nodejs.org/en/

<h1> Launch server first</h1>

In the server folder, type in terminal： <br />

<pre> npm install</pre>

To set set the port you want to run the server on:

<pre> for windows os type: set PORT=&ltport number&gt
 for Linux or mac :  PORT=&ltport number&gt </pre>

Then start the server, type:

<pre>npm run dev</pre>

<h1> Launch the frontend React Application first</h1>
In the front folder type

<pre>npm install</pre>

you need to set the port to communicate with the front end server

1.  go to front folder > package.json change the port to the port server is running on. if you server is running on 3004, type type "http://localhost:3004"

<p align="center">
  <img src="./instruction pic/change_port1.png" width="500" title="hover text">

2. go to the front folder >src>utils>websocket.js . <br/>
   change the port number to the server running port

<p align="center">
  <img src="./instruction pic/change_port2.png" width="500" title="hover text">

To set the port you want to run the react application

<pre> for windows os type: "set PORT=&ltport number&gt
 for Linux or mac :  "PORT=&ltport number&gt </pre>

Finally, to start the front end, type:

<pre>npm start</pre>

you can follow this process to launch multiple clients. But make sure they all run in seperate incognito browser windows in order to login to different users' account.
