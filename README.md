# plotr-server

plotr-server is a backend written in Node.js that uses a chromium instance to render a html-string.
This html-string could either be a complete document or only the body of a html-document.

Currently this backend only supports the generation of **PDF-Documents in DIN-A4** format.

All endpoints are documented with swagger at _http://\<url\>/swagger_.

## docker

This backend is available as image on docker-hub. It uses node-js slim as a base-image and exposes the port 8080 (default-port)

```
docker run -P michaelbraun/plotr:latest
```

## environment variables

The following environment variables could be set:

| variable | description                                                                                                     | default |
|----------|-----------------------------------------------------------------------------------------------------------------|---------|
| PORT     | The port on which the api should be started. Should not be used to change the port when using the docker image. | 8080    |
