# REST API sample

Express 5.2.1, express-validator 7.3.2, Mongoose 9.10.3, Nodemon 3.1.14; Node 26.10.0.

```sh
npm ci
npm test
npm start
```

API: http://127.0.0.1:8080/feed/posts. Stop with Ctrl+C. Use `npm run dev` for watch mode.

This sample returns a bundled demonstration post and acknowledges validated new posts. The original code had no database model or connection: acknowledged posts are not persisted. The Mongoose dependency is retained/upgraded for future implementation, and no remote database/service is contacted. There is no existing frontend to migrate.

Fixed removed express-validator `/check` imports and the validation-result condition; invalid inputs now return 422. The bundled image is served locally, and OPTIONS preflight requests return 204. Tests exercise all of these contracts through an actual ephemeral HTTP server.

The pre-migration source snapshot is saved in `../.dependency-migration/baseline-diffs/rest_api-before-major.tar.gz`.
