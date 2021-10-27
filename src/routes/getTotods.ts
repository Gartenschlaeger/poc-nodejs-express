import { Request, Response } from 'express';

import { Store } from '../stores/Store';

export interface getTodosOptions {
    store: Store;
}

const getTodos = function (options: getTodosOptions) {
    const store = options.store;

    return async (req: Request, res: Response) => {
        try {
            const items = await store.getRemainingTodos();

            return res.json({ succeeded: true, data: items });
        } catch (err) {
            return res.json({ succeeded: false });
        }
    };
};

export { getTodos };
