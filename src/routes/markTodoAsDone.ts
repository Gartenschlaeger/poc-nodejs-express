import { Store } from '../stores/Store';
import { Request, Response } from 'express';

export interface markTodoAsDoneOptions {
    store: Store;
}

const markTodoAsDone = function (options: markTodoAsDoneOptions) {
    const store = options.store;

    return async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const result = await store.markTodoAsDone(id);

            return res.json({ succeeded: result });
        } catch (err) {
            return res.json({ succeeded: false });
        }
    };
};

export { markTodoAsDone };
