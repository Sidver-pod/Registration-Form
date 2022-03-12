# Registration-Form
- The project is split between Frontend and Backend.
- Backend (localhost) is used to create, read and delete from the SQL database (MySQL).
- Frontend is where the user registers their Name and Email. The very first thing the page does is that it sends a GET request to the Backend so as to show all the previously registered data in the form of a list.
- **Axios** is used on the Frontend. So all requests made are only from the Frontend!
- To allow Cross-Origin Resource Sharing CORS is installed in the server (localhost).

## Install the following

- **Nodemon** `npm install --save-dev nodemon`

- **Express** `npm install express --save`

- **Body-Parser** `npm install body-parser --save`

- **MySQL2** `npm install --save mysql2`

- **Sequelize** `npm install --save sequelize`

- **CORS** `npm install cors` 
