import { Request, Response } from 'express';

import { Store } from '../stores/Store';
import * as logger from '../shared/Logger';

export interface noteTodoOptions {
    store: Store;
}

const noteTodo = function (options: noteTodoOptions) {
    const store = options.store;

    return async (req: Request, res: Response) => {
        try {
            const { description } = req.body;

            const id = await store.noteTodo(description);

            return res.json({ succeeded: true, data: { id } });
        } catch (err) {
            logger.error(err);
            return res.json({ succeeded: false });
        }
    };
};

export { noteTodo };
