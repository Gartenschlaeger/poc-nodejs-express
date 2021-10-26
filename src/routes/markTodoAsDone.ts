import { Request, Response } from 'express';

import { Store } from '../stores/Store';

export interface markTodoAsDoneOptions {
    store: Store;
}

const markTodoAsDone = function (options: markTodoAsDoneOptions) {
    const store = options.store;

    return async (req: Request, res: Response) => {
        const { id } = req.params;

        const result = await store.markTodoAsDone(id);

        return res.json({ succeeded: result });
    };
};

export { markTodoAsDone };
