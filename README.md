# Auth-react-redux
React app with redux - (Authentication Flow demo)

# Authentication
Authentication is an indispensable part of an application. It's a process of determining if someone or something, in fact, is who or what it is declared to be. 

From a client perspective, authenticating a user may require sending the request or redirecting to an authentication server.
 If the credentials match, the process is completed and authorization access is granted to the client. 

# Overview of React app
We will be creating a very simple React app using redux and react-router. It will have login (public), dashboard and contact page. Dashboard and contact page are only accessible to authenticated users.
For testing purpose, you will use Node express server which will authenticate the user credentials (hard-coded) and return a valid token. 

# User credentials for testing purpose
username: 'test' \
password: 'react'
