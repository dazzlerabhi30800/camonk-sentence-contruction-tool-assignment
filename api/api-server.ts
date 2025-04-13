import type { VercelRequest, VercelResponse } from "@vercel/node";
import path from "path";
import fs from "fs";

export default async (
  req: VercelRequest,
  res: VercelResponse
): Promise<void> => {
  try {
    // CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }

    // Mock db.json data
    const dbPath = path.resolve(__dirname, "db.json");
    if (!fs.existsSync(dbPath)) {
      res.status(500).json({ error: "db.json not found" });
      return;
    }

    const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
    if (req.url?.startsWith("/api/data")) {
      res.status(200).json(db.data || []);
    } else {
      res.status(404).json({ error: "Endpoint not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "Internal server error", details: String(error) });
  }
};
