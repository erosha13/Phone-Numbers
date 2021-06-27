# Phone-Numbers

Realtime SPA on react, nodeJS, MySQL and socket.IO


____



### To start a NodeJS server on `localhost:5000` use the console command `node index`

### To start a React App on `localhost:3000` use the console command `npm run start`



## Instructions:
* MySQL must be installed on your device
* To create a MySQL database, you need to run the following commands:

      CREATE DATABASE phone_numbers ;

      use phone_numbers ;
      
      CREATE TABLE numbers (
           id INTEGER AUTO_INCREMENT PRIMARY KEY,
           number VARCHAR(20),
           code VARCHAR(10)
           );    
* To connect the database to the server, if necessary, change the values of host, user and password to yours in the next block of code (backend / index.js):
        
        const connection = mysql.createConnection({
        host: 'localhost',        
        user: 'root',
        database: 'phone_numbers',
        password: 'root'
      })

