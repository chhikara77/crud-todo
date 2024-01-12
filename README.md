# crud-todo
a todo app with crud operation and firebase email link authentication and postgre hosted on neon.tech
# installation
1. download the repo
2. go to client folder run npm i and npm start
3. go to parent then run npm i and npm start
4. browser should open if not then goto localhost:3000
5. enter email then a link will be sent to the email
6. open the email now you have access to the to do app
7. we can also check the api by using postman
8. but we have to open the link from the email and paste the url in body section of user/verify 
9. and for crud operation we have to send the access token in the header
# Api endpoint
1. localhost:4000/user/login
2. localhost:4000/user/verify
3. localhost:4000/todo/get-all
4. localhost:4000/todo/create
5. localhost:4000/todo/update/:id
6. localhost:4000/todo/delete/:id


