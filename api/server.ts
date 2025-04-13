import { create, router as jsonRouter, defaults } from "json-server";
import type { Request, Response, NextFunction } from "express";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const server = create();
const router = jsonRouter("db.json");
const middlewares = defaults();

server.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  next();
});

// Apply JSON Server middlewares
server.use(middlewares);

// Optional: Ensure GET requests work smoothly (Vercel is read-only for writes)
server.use((req: Request, _res: Response, next: NextFunction) => {
  if (req.method === "GET") {
    req.method = "GET"; // Redundant but ensures clarity
  }
  next();
});

// Rewrite /api/* to /* for JSON Server routing
server.use((req: Request, _res: Response, next: NextFunction) => {
  if (req.path.startsWith("/api")) {
    req.url = req.url.replace(/^\/api/, "");
  }
  next();
});

// Apply JSON Server router
server.use(router);

// Vercel serverless function handler
export default (req: VercelRequest, res: VercelResponse) => {
  // Ensure the request is handled by the JSON Server
  server(req as any, res as any);
};
