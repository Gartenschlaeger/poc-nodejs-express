import { RouteOptions } from './RouteOptions';
import { Request, Response } from 'express';

const markTodoAsDone = function (options: RouteOptions) {
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
