import http from "http";
import routes from "./routes.js";

const server = http.createServer((req, res) => {
  routes(res, req);
});

server.listen(3000);
