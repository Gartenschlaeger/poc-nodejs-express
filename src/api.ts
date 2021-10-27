import cors from 'cors';
import express from 'express';

import { SQLiteStore } from './stores/SQLiteStore';
import { getTodos } from './routes/getTotods';
import { noteTodo } from './routes/noteTodo';
import { markTodoAsDone } from './routes/markTodoAsDone';

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
        console.log(`Server is listening on http://localhost:${port}`);
    });
};

export { start };
