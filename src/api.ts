import cors from 'cors';
import express from 'express';

import { getTodos } from './routes/getTotods';
import { noteTodo } from './routes/noteTodo';
import { InMemoryStore } from './stores/InMemoryStore';

const store = new InMemoryStore();

const api = express();

api.use(cors());
api.use(express.json());

api.get('/', (req, res) => {
    res.json({ message: 'OK' });
});

// Commands
api.post('/note-todo', noteTodo({ store }));

// Queries
api.get('/todos', getTodos({ store }));

const start = async (port: number) => {
    await store.init();

    api.listen(port, () => {
        console.log(`Server is listening on http://localhost:${port}`);
    });
};

export { start };
