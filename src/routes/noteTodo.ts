import { RouteOptions } from './RouteOptions';
import { Request, Response } from 'express';
import * as logger from '../shared/Logger';

const noteTodo = function (options: RouteOptions) {
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
