import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import fetch from 'node-fetch';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    const parsedUrl = parse(req.url!, true);
    const { pathname, query } = parsedUrl;

    const cmsResponse = await fetch(
      `https://api-dev.devatech.us/api/v2/pages/find/?site=2&html_path=${pathname}`,
    );

    if (cmsResponse.status >= 400) {
      handle(req, res, parsedUrl);
    } else {
      const cmsData = await cmsResponse.json();
      app.render(req, res, `/wagtail/${cmsData.meta.type}`, {
        ...query,
        wagtailPageId: cmsData.id,
      });
    }
  }).listen(port);

  // tslint:disable-next-line:no-console
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`,
  );
});
