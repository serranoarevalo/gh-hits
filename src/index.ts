import { home } from "./pages/home";
import { makeBadge, makeStatusResponse } from "./utils";

export interface Env {
  DB: KVNamespace;
}

const statusCodes = {
  METHOD_NOT_ALLOWED: 405,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const { url, method } = request;
    if (method !== "GET") {
      return makeStatusResponse(statusCodes.METHOD_NOT_ALLOWED);
    }
    const { searchParams, pathname } = new URL(url);
    if (pathname === "/") {
      return new Response(home, {
        headers: { "content-type": "text/html" },
      });
    }
    if (pathname === "/view") {
      const username = searchParams.get("username");
      if (!username) {
        return makeStatusResponse(statusCodes.BAD_REQUEST);
      }
      if (username === "$USERNAME") {
        return makeStatusResponse(statusCodes.BAD_REQUEST);
      }
      const exists = await fetch(`https://api.github.com/users/${username}`);
      if (exists.status === 404) {
        return makeStatusResponse(statusCodes.NOT_FOUND);
      }
      const hits = await env.DB.get(username);
      let newHits = 0;
      if (hits === null) {
        newHits = newHits + 1;
      } else {
        newHits = parseInt(hits) + 1;
      }
      await env.DB.put(username, String(newHits));
      return new Response(makeBadge(newHits), {
        headers: {
          "content-type": "image/svg+xml;charset=utf-8",
          "Cache-Control": "no-cache, no-store",
          Expire: "Mon, 01 Jan 1990 00:00:00 GMT",
          "Last-Modified": "Mon, 01 Jan 2999 00:00:00 GMT",
          Etag: Date.now(),
        },
      });
    }
    return makeStatusResponse(statusCodes.NOT_FOUND);
  },
};
