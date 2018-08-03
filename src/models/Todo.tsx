export type TodoStatus = 'OPEN' | 'CLOSE';

export interface ITodo {
    id: number;
    createdAt: string;
    title: string;
    description: string;
    status: TodoStatus;
}