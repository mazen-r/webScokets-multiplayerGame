const http = require("http");
const app = require("express")();
app.get("/", (req, res)=> res.sendFile(__dirname + "/index.html"))
app.listen(8081, ()=>console.log("listening on port 8081"))
const websocketServer = require("websocket").server
const httpServer = http.createServer();
httpServer.listen(8080, () => console.log("Server is running on 8080 port"))

const clients = {};

const wsServer = new websocketServer({
    "httpServer": httpServer
})
wsServer.on("request", request => {
    //connecting
    const connection = request.accept(null, request.origin);
    connection.on("open", () => console.log("opened"))
    connection.on("close", () => console.log("closed"))
    connection.on("message", message => {
        const result = JSON.parse(message.utf8Data)
        console.log(result)
    })
    // crating new clientID
    const clientId = guid();
    clients[clientId] = {
        "connection": connection
    }

    const payLoad = {
        "method": "connect",
        "clientId": clientId 
    }
    //sending back client connection
    connection.send(JSON.stringify(payLoad)) //Converting payLoad to string for JSON

})



function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}
// then to call it, plus stitch in '4' in the third group
const guid = () => (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();