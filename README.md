# REST API — feed example

A minimal Express API demonstrating a blog-style feed, JSON request validation, and local image serving. It has no frontend or database persistence: GET returns a bundled example post, while POST validates and acknowledges the submitted content.

## Run locally

Use the Node version in `.nvmrc` (currently 26.10.0) and npm. From the repository root:

```sh
npm ci
npm start
```

The API runs at [http://127.0.0.1:8080/feed/posts](http://127.0.0.1:8080/feed/posts). Stop the foreground process with **Ctrl+C**. Use `npm run dev` for watch mode.

## API

- `GET /feed/posts`: retrieve the example feed.
- `POST /feed/post`: submit JSON with `title` and `content`; invalid input returns 422. Acknowledged posts are not saved.
- Local example images are served by Express; OPTIONS preflight requests return 204.

## Checks

```sh
npm test
```

Tests exercise the HTTP routes and validation. Mongoose remains a dependency, but this sample has no active database model or connection.
