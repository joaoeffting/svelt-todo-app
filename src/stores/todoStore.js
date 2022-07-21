import { writable } from 'svelte/store';

export const todos = writable([]);

export const addTodo = (text) => {
	todos.update((curr) => {
		return [
			...curr,
			{
				text,
				completed: false,
				id: Date.now()
			}
		];
	});
};

export const deleteTodo = (id) => {
	todos.update((curr) => curr.filter((todo) => todo.id !== id));
};

export const toggleTodoComplete = (id) => {
	todos.update((curr) => {
		return curr.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
	});
};
