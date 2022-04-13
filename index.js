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
    connection.on("open", () => console.log("opened"))
    connection.on("close", () => console.log("closed"))
    connection.on("message", message => {

    })
})



function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}
// then to call it, plus stitch in '4' in the third group
const guid = () => (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();