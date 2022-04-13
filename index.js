const http = require("http");
const websocketServer = require("websocket").server
const httpServer = http.createServer();
httpServer.listen(8080, () => console.log("Server is running on 8080 port"))

const wsServer = new websocketServer({
    "httpServer": httpServer
})
wsServer.on("request", request => {
    //connecting
    const connection = request.accept(null, request.origin);
})
