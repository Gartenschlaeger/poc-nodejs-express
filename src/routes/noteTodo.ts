import { Request, Response } from 'express';

import { Store } from '../stores/Store';

export interface noteTodoOptions {
    store: Store;
}

const noteTodo = function (options: noteTodoOptions) {
    const store = options.store;

    return async (req: Request, res: Response) => {
        console.log('body', req.body);

        const { description } = req.body;

        const id = await store.noteTodo(description);

        return res.json({ id });
    };
};

export { noteTodo };
