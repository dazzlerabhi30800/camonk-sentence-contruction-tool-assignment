import jsonServer from "json-server";
import { ServerResponse, IncomingMessage } from "http";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  server.emit("request", req, res);
}
