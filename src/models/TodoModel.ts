import { DataTypes, Model, Sequelize } from 'sequelize';

interface Todo {
    id: string;
    description: string;
    isDone: boolean;
}

class TodoModel extends Model {}

const initModel = async (sequelize: Sequelize) => {
    TodoModel.init(
        {
            id: {
                type: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            isDone: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        },
        { sequelize, modelName: 'Todo' }
    );
};

export { initModel, Todo, TodoModel };
