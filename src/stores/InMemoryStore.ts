import { randomUUID } from 'node:crypto';

import { Todo } from '../entities/Todo';
import { Store } from './Store';

class InMemoryStore implements Store {
    private todos: Todo[] = [];

    async init(): Promise<boolean> {
        return Promise.resolve(true);
    }

    async noteTodo(description: string): Promise<string> {
        const todo = new Todo();
        todo.id = randomUUID();
        todo.description = description;
        todo.isDone = false;

        this.todos.push(todo);

        return Promise.resolve(todo.id);
    }

    async getRemainingTodos(): Promise<any> {
        return Promise.resolve(this.todos);
    }
}

export { InMemoryStore };
