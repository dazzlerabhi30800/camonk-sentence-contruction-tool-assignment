import type { VercelRequest, VercelResponse } from "@vercel/node";
import fs from "fs";
import path from "path";

// Simple handler to test ESM and db.json
export default async (
  req: VercelRequest,
  res: VercelResponse
): Promise<void> => {
  try {
    const dbPath = path.resolve(__dirname, "db.json");
    if (!fs.existsSync(dbPath)) {
      throw new Error("db.json not found");
    }
    const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

    // Simulate /api/data endpoint
    if (req.url?.startsWith("/api/data")) {
      res.status(200).json(db.data || []);
    } else {
      res.status(404).json({ error: "Endpoint not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Serverless function failed" });
  }
};
