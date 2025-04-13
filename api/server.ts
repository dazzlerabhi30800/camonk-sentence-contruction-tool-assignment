import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async (
  req: VercelRequest,
  res: VercelResponse
): Promise<void> => {
  console.log(req);
  res.status(200).json({ message: "Hello from ESM serverless function" });
};
