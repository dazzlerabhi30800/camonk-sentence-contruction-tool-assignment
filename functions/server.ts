import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
const {
  create,
  router: jsonRouter,
  defaults,
  rewriter,
} = require("json-server");
const path = require("path");
const fs = require("fs");

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  try {
    console.log(context);
    // CORS headers
    const headers: Record<string, string> = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Handle OPTIONS preflight
    if (event.httpMethod === "OPTIONS") {
      return {
        statusCode: 200,
        headers,
        body: "",
      };
    }

    // Resolve db.json
    const dbPath: string = path.resolve(__dirname, "db.json");
    if (!fs.existsSync(dbPath)) {
      console.error("db.json not found at:", dbPath);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "db.json not found" }),
      };
    }

    // Validate db.json
    let dbContent: string;
    try {
      dbContent = fs.readFileSync(dbPath, "utf-8");
      JSON.parse(dbContent);
    } catch (parseError: unknown) {
      console.error("Invalid db.json:", parseError);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Invalid db.json format" }),
      };
    }

    // Initialize json-server
    const server = create();
    const router = jsonRouter(dbPath);
    const middlewares = defaults({
      static: false,
      bodyParser: true,
      noCors: false,
    });

    server.use(middlewares);
    server.use(
      rewriter({
        "/api/*": "/$1",
        "/blog/:resource/:id/show": "/:resource/:id",
      })
    );
    server.use(router);

    // Simulate Express request
    const req = {
      url: event.path,
      method: event.httpMethod,
      headers: event.headers,
      body: event.body ? JSON.parse(event.body) : null,
    };
    let statusCode = 200;
    let responseBody = "";

    await new Promise<void>((resolve, reject) => {
      server(
        req,
        {
          status: (code: number) => {
            statusCode = code;
            return {
              json: (body: any) => {
                responseBody = JSON.stringify(body);
                resolve();
              },
              end: () => resolve(),
            };
          },
        },
        (err: any) => {
          if (err) reject(err);
        }
      );
    });

    return {
      statusCode,
      headers,
      body: responseBody,
    };
  } catch (error: unknown) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({
        error: "Internal server error",
        details: String(error),
      }),
    };
  }
};

// CommonJS export for Netlify
module.exports = { handler };
