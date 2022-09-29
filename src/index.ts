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
      const formatted = new Intl.NumberFormat("kr-KO").format(newHits);
      return Response.redirect(
        `https://badgen.net/badge/hits/${formatted}/black`
      );
    }
    return makeStatusResponse(statusCodes.NOT_FOUND);
  },
};
