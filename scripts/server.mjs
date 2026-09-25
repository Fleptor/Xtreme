import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { build, dist } from './build.mjs';

await build();
const args = process.argv.slice(2);
const portIndex = args.indexOf('--port');
const hostIndex = args.indexOf('--host');
const port = Number(portIndex >= 0 ? args[portIndex+1] : process.env.PORT || 4173);
const host = hostIndex >= 0 ? args[hostIndex+1] : '127.0.0.1';
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.ico':'image/x-icon','.webp':'image/webp','.ttf':'font/ttf','.txt':'text/plain; charset=utf-8','.ics':'text/calendar; charset=utf-8'};
const server = createServer(async (req,res) => {
  if (!['GET','HEAD'].includes(req.method)) {res.writeHead(405,{'Allow':'GET, HEAD'}).end(); return;}
  try {
    const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const file = path.resolve(dist, '.' + (pathname.endsWith('/') ? pathname+'index.html' : pathname));
    if (!file.startsWith(dist+path.sep)) {res.writeHead(403).end('Forbidden'); return;}
    if (!(await stat(file)).isFile()) throw new Error('Not a file');
    const data = await readFile(file);
    res.writeHead(200,{'Content-Type':types[path.extname(file)] || 'application/octet-stream','X-Content-Type-Options':'nosniff','Cache-Control':'no-cache'});
    res.end(req.method === 'HEAD' ? undefined : data);
  } catch {res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'}).end('الصفحة غير موجودة — Page not found');}
});
server.on('error',error => {console.error(error.message);process.exitCode=1;});
server.listen(port,host,()=>console.log(`IEEEXtreme 20.0 → http://${host}:${port}\nRebuild with npm run build after editing; refresh your browser.`));
