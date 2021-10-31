import { TodoModel } from '../models/TodoModel';

interface Store {
    init(): Promise<void>;

    noteTodo(description: string): Promise<string>;

    getRemainingTodos(): Promise<TodoModel[]>;

    markTodoAsDone(id: string): Promise<boolean>;
}

export { Store };
