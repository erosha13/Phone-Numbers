const server = require('http').createServer();
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

const PORT = 5000

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'phone_numbers',
    password: 'root'
})

io.on('connection', socket => {
    console.log('Connected to server')

    connection.query('select * from numbers', (err, rows) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(rows)
        socket.emit('newNumbers', {rows})
    })

    socket.on('addNumber', async ({number, code}) => {
        if (number && code) {

            await connection.query('INSERT INTO numbers (number, code) VALUES (?, ?)', [number, code], (err) => {
                if (err) {
                    console.log(err)

                }
            })

            await connection.query('select * from numbers', (err, rows) => {
                if (err) {
                    console.log(err)
                }
                console.log(rows)
                io.emit('newNumbers', {rows})

            })

        }
    })


    socket.on('deleteNumber', async (id) => {

        await connection.query('DELETE FROM numbers WHERE id = (?)', id, (err) => {
            if (err) {
                console.log(err)
            }
        })

        await connection.query('select * from numbers', (err, rows) => {
            if (err) {
                console.log(err)
            }
            console.log(rows)
            io.emit('newNumbers', {rows})

        })
    })

})


server.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
