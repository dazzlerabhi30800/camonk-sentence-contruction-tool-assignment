import { create, router as jsonRouter, defaults, rewriter } from "json-server";
import type { Request, Response, NextFunction } from "express";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import path from "path";
import fs from "fs";

// Initialize JSON Server
const server = create();
const middlewares = defaults();

// Uncomment for write operations (Note: Vercel’s file system is read-only)
// const dbPath = path.join(__dirname, 'db.json');
// const data = fs.readFileSync(dbPath, 'utf-8');
// const db = JSON.parse(data);
// const router = jsonRouter(db);

// Use this for read-only operations (suitable for Vercel)
const dbPath = path.resolve(__dirname, "db.json");
if (!fs.existsSync(dbPath)) {
  console.error("db.json not found at:", dbPath);
  throw new Error("db.json is missing");
}
const router = jsonRouter(dbPath);

// Apply default middlewares (CORS, etc.)
server.use(middlewares);

// URL rewriting for /api/* and blog routes
server.use(
  rewriter({
    "/api/*": "/$1",
    "/blog/:resource/:id/show": "/:resource/:id",
  })
);

// Error handling to prevent crashes
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
