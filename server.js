const app = require('./app');
const server = app.listen(Number(process.env.PORT || 8080), '127.0.0.1', () => {
  console.log(`REST API listening at http://127.0.0.1:${server.address().port}`);
});
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
