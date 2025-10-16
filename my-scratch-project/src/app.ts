import express from 'express';
import { IndexController } from './controllers/index';
import { json } from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(json());

// Routes
const indexController = new IndexController();
app.get('/', indexController.getIndex.bind(indexController));
app.post('/', indexController.postIndex.bind(indexController));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});