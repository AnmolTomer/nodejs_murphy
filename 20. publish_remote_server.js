/*
Here we will publish our app to VPS Virtual Private Server. We will be using Digital Ocean.
Inside myFirstNodeApp directory we set up our server to listen on localhost 127.0.0.1 but localhost is just a server on our local computer
but we do not want to serve pages from our local server but we want to serve from VPS. server.listen(8080, '127.0.0.1') will be changed.

We want to change the code so that the server is listening, hence URL of our VPS.

Digital Ocean doesn't provides free account for trial as well, too bad, will add instructions to do the same using heroku soon.

1. Get the server, install node and npm on your server. After that you'll have the IP and replace this in place of your 127.0.0.1 i.e. localhost
address.

2. Get the files which you were initially hosting locally i.e. myFirstNodeApp directory's contents and then upload to VPS.
This can be done by using WinSCP, this is a Secure FTP client i.e. SFTP, enter IP of VPS server under hostname and port number as 22 or
some other port which is not taken and upload files from source to destination (VPS), say you upload public and server to root folder of VPS

3. After the files are on VPS, we need to run server.js for the file which is on VPS, but we can't run from cmd on your local system to
access VPS so what we do is connect to our VPS in a similar way we did in WinSCP and client we use for connecting with our VPS is PuTTY,
PuTTY gives us command prompt or terminal where we can write commands to our VPS Enter IP in host name along with port 22 preferred,
set connection type as SSH and proceed to connecting to VPS by pressing open

4. Check for node and npm being installed on VPS by running the command node -v and npm -v if all goes well you are good to go.

5. Next we move on to running our server and type in node server.js or whatever your sever file name is and make sure you are in same directory
on VPS.

6. Go to hostname:8080 to see your server respond to client using VPS. Server responds with HTML,CSS,JS and works perfectly.
*/