import { randomUUID } from 'node:crypto';
import { Sequelize } from 'sequelize';

import { Store } from './Store';
import * as TodoModel from '../models/TodoModel';

class SQLiteStore implements Store {
    private sequelize: Sequelize;

    async init(): Promise<void> {
        const connection = ':memory:';
        //const connection = 'data.sqlite';

        this.sequelize = new Sequelize(`sqlite:${connection}`, {
            logging: true,
        });

        TodoModel.initModel(this.sequelize);

        await this.sequelize.sync({ force: true });

        await this.sequelize.authenticate();

        console.log('Connection has been established successfully.');

        return Promise.resolve();
    }

    async noteTodo(description: string): Promise<string> {
        const values: TodoModel.Todo = {
            id: randomUUID(),
            description,
            isDone: false,
        };

        await TodoModel.TodoModel.create(values);
        return Promise.resolve(values.id);
    }

    async markTodoAsDone(id: string): Promise<boolean> {
        const result = await TodoModel.TodoModel.update({ isDone: true }, { where: { id, isDone: false } });

        return Promise.resolve(result[0] > 0);
    }

    async getRemainingTodos(): Promise<any> {
        const result = await TodoModel.TodoModel.findAll({
            where: { isDone: false },
        });

        return Promise.resolve(result);
    }
}

export { SQLiteStore };