This is a test for how to detect the deployed URL of a NextJS app on the server.

In this example, I have CNAME'd nextjs-host-check.micahrl.com to cname.vercel-dns.com, and added the hostname to the project in the Vercel dashboard. Then I query the API.

```
> http https://nextjs-host-check.micahrl.com/api/hello
HTTP/1.1 200 OK
Connection: keep-alive
Content-Type: application/json; charset=utf-8
age: 0
cache-control: public, max-age=0, must-revalidate
content-length: 167
date: Fri, 22 Jan 2021 23:07:28 GMT
etag: "a7-rak3CccDju7geBycERySpMG1oZY"
server: Vercel
strict-transport-security: max-age=63072000
x-nextjs-page: /api/hello
x-vercel-cache: MISS
x-vercel-id: cle1::iad1::2t2dd-1611356847670-d65d755aaac9

{
    "hostFromDevEnv": "unset",
    "hostFromHeaders": "nextjs-host-check.micahrl.com",
    "hostFromVercelEnv": "nextjs-server-side-url-jmdyvfm4r.vercel.app",
    "vercelEnv": "production"
}


> http https://nextjs-server-side-url-jmdyvfm4r.vercel.app/api/hello
HTTP/1.1 200 OK
Connection: keep-alive
Content-Type: application/json; charset=utf-8
X-Robots-Tag: noindex
age: 0
cache-control: public, max-age=0, must-revalidate
content-length: 181
date: Fri, 22 Jan 2021 23:07:41 GMT
etag: "b5-JqKSCWRL8/Pr8tQIJhKP27NToSg"
server: Vercel
strict-transport-security: max-age=63072000; includeSubDomains; preload
x-nextjs-page: /api/hello
x-vercel-cache: MISS
x-vercel-id: cle1::iad1::bd6nv-1611356861363-c45263e06fdb

{
    "hostFromDevEnv": "unset",
    "hostFromHeaders": "nextjs-server-side-url-jmdyvfm4r.vercel.app",
    "hostFromVercelEnv": "nextjs-server-side-url-jmdyvfm4r.vercel.app",
    "vercelEnv": "production"
}


```


What if I pass a custom Host header?

```
17:15:25 E0 Haluth J1 nextjs-server-side-url > http https://nextjs-host-check.micahrl.com/api/hello Host:cistercian.micahrl.com
HTTP/1.1 404 Not Found
Connection: keep-alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Fri, 22 Jan 2021 23:15:33 GMT
Transfer-Encoding: chunked
access-control-allow-origin: *
age: 0
cache-control: public, max-age=0, must-revalidate
content-disposition: inline; filename="404"
etag: W/"30d09b7237ecee9fe3dcbacccad03f599989dba39eeb47c8eb16402a7ef317c1"
server: Vercel
strict-transport-security: max-age=63072000
x-vercel-cache: MISS
x-vercel-id: cle1::x496l-1611357332949-d140cc1ae680

<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width"/><meta charSet="utf-8"/><title>404: This page could not be found</title><meta name="next-head-count" content="3"/><link rel="preload" href="/_next/static/css/7ab78968d0ad7ba3dc14.css" as="style"/><link rel="stylesheet" href="/_next/static/css/7ab78968d0ad7ba3dc14.css" data-n-g=""/><noscript data-n-css=""></noscript><link rel="preload" href="/_next/static/chunks/main-ae4733327bd95c4ac325.js" as="script"/><link rel="preload" href="/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js" as="script"/><link rel="preload" href="/_next/static/chunks/framework.9d524150d48315f49e80.js" as="script"/><link rel="preload" href="/_next/static/chunks/commons.d4b356e1775ff36b9e2d.js" as="script"/><link rel="preload" href="/_next/static/chunks/pages/_app-53febf22e9c25cc240ce.js" as="script"/><link rel="preload" href="/_next/static/chunks/pages/_error-52d303bd6bd28fd31953.js" as="script"/></head><body><div id="__next"><div style="color:#000;background:#fff;font-family:-apple-system, BlinkMacSystemFont, Roboto, &quot;Segoe UI&quot;, &quot;Fira Sans&quot;, Avenir, &quot;Helvetica Neue&quot;, &quot;Lucida Grande&quot;, sans-serif;height:100vh;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center"><div><style>body { margin: 0 }</style><h1 style="display:inline-block;border-right:1px solid rgba(0, 0, 0,.3);margin:0;margin-right:20px;padding:10px 23px 10px 0;font-size:24px;font-weight:500;vertical-align:top">404</h1><div style="display:inline-block;text-align:left;line-height:49px;height:49px;vertical-align:middle"><h2 style="font-size:14px;font-weight:normal;line-height:inherit;margin:0;padding:0">This page could not be found<!-- -->.</h2></div></div></div></div><script id="__NEXT_DATA__" type="application/json">{"props":{"pageProps":{"statusCode":404}},"page":"/_error","query":{},"buildId":"vU26eUNp53lsKFtZd_BBC","runtimeConfig":{},"nextExport":true,"isFallback":false,"gip":true}</script><script nomodule="" src="/_next/static/chunks/polyfills-99d808df29361cf7ffb1.js"></script><script src="/_next/static/chunks/main-ae4733327bd95c4ac325.js" async=""></script><script src="/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js" async=""></script><script src="/_next/static/chunks/framework.9d524150d48315f49e80.js" async=""></script><script src="/_next/static/chunks/commons.d4b356e1775ff36b9e2d.js" async=""></script><script src="/_next/static/chunks/pages/_app-53febf22e9c25cc240ce.js" async=""></script><script src="/_next/static/chunks/pages/_error-52d303bd6bd28fd31953.js" async=""></script><script src="/_next/static/vU26eUNp53lsKFtZd_BBC/_buildManifest.js" async=""></script><script src="/_next/static/vU26eUNp53lsKFtZd_BBC/_ssgManifest.js" async=""></script></body></html>
```

In the above example, <cistercian.micahrl.com> is deployed to Vercel, so it tries to find `/api/hello` on that deployment -- but that doesn't exist for CistercianJS, so it returns a 404 not found page.

So it turns out you _might actually_ be able to trust the Host header when deployed to Vercel.

However, if Vercel changes something, or if you move your deployment to another host, you might not be able to trust the host header.
