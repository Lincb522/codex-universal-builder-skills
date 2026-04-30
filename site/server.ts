const root = new URL("./", import.meta.url);
const port = Number(Deno.env.get("PORT") ?? "8080");

const contentTypes: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json; charset=utf-8",
};

function contentType(pathname: string): string {
  const match = pathname.match(/\.[^.]+$/);
  return match ? contentTypes[match[0]] ?? "application/octet-stream" : "text/plain";
}

Deno.serve({ port }, async (request) => {
  const url = new URL(request.url);
  const cleanPath = url.pathname === "/" ? "/index.html" : url.pathname;
  const fileUrl = new URL(`.${cleanPath}`, root);

  if (!fileUrl.pathname.startsWith(root.pathname)) {
    return new Response("Forbidden", { status: 403 });
  }

  try {
    const file = await Deno.readFile(fileUrl);
    return new Response(file, {
      headers: { "content-type": contentType(fileUrl.pathname) },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
});
