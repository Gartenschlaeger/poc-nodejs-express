import { DataTypes, Model, Sequelize } from 'sequelize';

interface TodoModelAttributes {
    id?: string;
    description: string;
    isDone: boolean;
}

class TodoModel extends Model {}

const initModel = async (sequelize: Sequelize) => {
    TodoModel.init(
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            isDone: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            }
        },
        { sequelize, modelName: 'Todo' }
    );
};

export { initModel, TodoModelAttributes, TodoModel };
