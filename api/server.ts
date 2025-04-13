import type { VercelRequest, VercelResponse } from "@vercel/node";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  // const headers: Record<string, string> = {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  //   'Access-Control-Allow-Headers': 'Content-Type',
  // };

  try {
    if (req.method === "OPTIONS") {
      res.status(200).setHeader("Access-Control-Allow-Origin", "*").end();
      return;
    }

    const dbPath = path.resolve(__dirname, "./db.json");
    if (!fs.existsSync(dbPath)) {
      res.status(500).json({ error: "db.json not found" });
      return;
    }

    const dbContent = fs.readFileSync(dbPath, "utf-8");
    try {
      const parsed = JSON.parse(dbContent);
      if (req.url?.includes("/api/data")) {
        res.status(200).json(parsed.data || []);
      } else {
        res.status(404).json({ error: "Endpoint not found" });
      }
    } catch (parseError: unknown) {
      res.status(500).json({ error: "Invalid db.json format" });
      return;
    }
  } catch (error: unknown) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "Internal server error", details: String(error) });
  }
}
