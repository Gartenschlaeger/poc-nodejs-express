import { Todo } from '../entities/Todo';

interface Store {
    init(): Promise<boolean>;

    noteTodo(description: string): Promise<string>;

    getRemainingTodos(): Promise<Todo[]>;

    markTodoAsDone(id: string): Promise<boolean>;
}

export { Store };
