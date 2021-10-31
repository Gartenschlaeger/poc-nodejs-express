import { RouteOptions } from './RouteOptions';
import { Request, Response } from 'express';

const getTodos = function (options: RouteOptions) {
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
