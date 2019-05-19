/*
In last video we server a simple index.html file to the client from node server, now we have to adjust the code, because at the moment
regardless of the request URL that comes in from the client we are running exactly the same code and we are running index.html.

Server should be able to serve other files as well because if we see index.html inside the directory myFirstNodeApp then we can see that client
will receive that 19. index.html file, but while receiving the code when server gets to the line  <link rel="stylesheet" href="css/main.css">
then server tries to make a second request to main.css and server should be able to handle that. On going further ahead we find the line
<script src = "/public/main.js"></script> which tries to bring in js file from the mentioned directory.
*/

// Now we move to 19. server.js inside the myFirstNodeApp directory for next steps.
