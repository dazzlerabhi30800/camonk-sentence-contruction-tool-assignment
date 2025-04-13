import { create, router as jsonRouter, defaults } from "json-server";
import type { Request, Response, NextFunction } from "express";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import path from "path";
import fs from "fs";

// Initialize JSON Server
const server = create();
const middlewares = defaults();

// Resolve db.json path
const dbPath = path.resolve(__dirname, "db.json");

// Check if db.json exists
if (!fs.existsSync(dbPath)) {
  console.error("db.json not found at:", dbPath);
  throw new Error("db.json is missing");
}

// Initialize JSON Server router
const router = jsonRouter(dbPath);

// Apply middlewares
server.use(middlewares);

// Rewrite /api/* to /* for JSON Server
server.use((req: Request, _res: Response, next: NextFunction) => {
  if (req.path.startsWith("/api")) {
    req.url = req.url.replace(/^\/api/, "") || "/";
  }
  next();
});

// Error handling middleware
server.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal server error" });
});

// Apply JSON Server router
server.use(router);

// Vercel serverless function handler
export default async (
  req: VercelRequest,
  res: VercelResponse
): Promise<void> => {
  try {
    await new Promise<void>((resolve, reject) => {
      server(req as any, res as any, (err: any) => {
        if (err) reject(err);
        else resolve();
      });
    });
  } catch (error) {
    console.error("Handler error:", error);
    res.status(500).json({ error: "Serverless function failed" });
  }
};
