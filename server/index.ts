import * as express from 'express';
import * as compression from 'compression';
import { Application } from 'express';
import { join } from 'path';

const port: string | number = process.env.PORT || 3000;

const app: Application = express();

app.use(compression());
app.use('/', express.static(join(__dirname, '..', 'dist', 'angular6-material-demo')));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
