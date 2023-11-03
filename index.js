import dotenv from "dotenv";
import app from "./server.js";
import http from 'http';

const server = http.createServer(app);

const port = process.env.PORT || 6000;
app.set("port", port);

if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

function onError(error) {
    console.log(error)
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}


function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log(`server is live on ${bind}`)
}

server.listen(port);
server.on("listening", onListening);
server.on("error", onError);