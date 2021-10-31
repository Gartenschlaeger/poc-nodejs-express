import cors from 'cors';
import express from 'express';
import { getTodos } from './routes/getTotods';
import { markTodoAsDone } from './routes/markTodoAsDone';
import { noteTodo } from './routes/noteTodo';
import { SQLiteStore } from './stores/SQLiteStore';
import * as logger from './shared/Logger';

const store = new SQLiteStore();

const api = express();

api.use(cors());
api.use(express.json());

api.get('/', (req, res) => {
    res.json({ message: 'OK' });
});

// Commands
api.post('/note-todo', noteTodo({ store }));
api.post('/mark-todo-as-done/:id', markTodoAsDone({ store }));

// Queries
api.get('/todos', getTodos({ store }));

const start = async (port: number) => {
    try {
        await store.init();
    } catch (err) {
        Promise.reject(err);
    }

    api.listen(port, () => {
        logger.info(`Server is listening on http://localhost:${port}`);
    });
};

export { start };
