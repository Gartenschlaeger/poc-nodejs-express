import { Sequelize } from 'sequelize';
import { Store } from './Store';
import { initTodoModel, TodoModel, TodoModelAttributes } from '../models/TodoModel';
import * as logger from '../shared/Logger';

class SQLiteStore implements Store {
    private sequelize: Sequelize;

    async init(): Promise<void> {
        const connection = ':memory:';

        this.sequelize = new Sequelize(`sqlite:${connection}`, {
            logging: false
        });

        initTodoModel(this.sequelize);

        //await this.sequelize.sync({ force: true });
        await this.sequelize.sync({ alter: true });

        await this.sequelize.authenticate();

        logger.info('Database connection has been established successfully.');

        return Promise.resolve();
    }

    async noteTodo(description: string): Promise<string> {
        const values: TodoModelAttributes = {
            description,
            isDone: false
        };

        const result = await TodoModel.create(values);

        return Promise.resolve(result.getDataValue('id'));
    }

    async markTodoAsDone(id: string): Promise<boolean> {
        const result = await TodoModel.update({ isDone: true }, { where: { id, isDone: false } });

        return Promise.resolve(result[0] > 0);
    }

    async getRemainingTodos(): Promise<TodoModel[]> {
        const result = await TodoModel.findAll({
            where: { isDone: false }
        });

        return Promise.resolve(result);
    }
}

export { SQLiteStore };
