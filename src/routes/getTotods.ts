import { Request, Response } from 'express';

import { Store } from '../stores/Store';

export interface getTodosOptions {
    store: Store;
}

const getTodos = function (options: getTodosOptions) {
    const store = options.store;

    return async (req: Request, res: Response) => {
        const items = await store.getRemainingTodos();

        return res.json(items);
    };
};

export { getTodos };
