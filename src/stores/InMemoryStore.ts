import { randomUUID } from 'node:crypto';
import { Sequelize } from 'sequelize';

import { Store } from './Store';
import * as TodoModel from '../models/TodoModel';

class InMemoryStore implements Store {
    private sequelize: Sequelize;
    private todos: TodoModel.TodoModel[] = [];

    async init(): Promise<void> {
        this.sequelize = new Sequelize('sqlite::memory:');

        TodoModel.initModel(this.sequelize);

        await this.sequelize.sync({ force: true });

        try {
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully.');

            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
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
        const result = await TodoModel.TodoModel.update({ isDone: true }, { where: { id } });
        console.log(result);

        return Promise.resolve(result[0] > 0);
    }

    async getRemainingTodos(): Promise<any> {
        const result = await TodoModel.TodoModel.findAll({
            where: { isDone: false },
        });

        return Promise.resolve(result);
    }
}

export { InMemoryStore };
