import express from 'express';
import { engine } from 'express-handlebars';
const app = express();
const port = 3000;
import path from 'path';

import indexRouter from '../src/routes/index.routes';

app.use('/', indexRouter);

app.engine(
	'hbs',
	engine({
		extname: '.hbs'
	})
);

app.set('view engine', 'hbs');

//thiết lập đường dẫn
app.set('views', path.join(__dirname, 'views'));

// Cấu hình tệp tĩnh
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
	console.log('http://localhost:' + port);
});

export default app;
