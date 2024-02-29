import { fail } from '@sveltejs/kit';
import { todos } from './db';

export async function load() {
	return {
		todos
	};
}

export const actions = {
	async add({ request }) {
		const data = await request.formData();
		const new_todo = data.get('new_todo');
		if (!new_todo) {
			return fail(400);
		}
		todos.push({
			id: crypto.randomUUID(),
			completed: false,
			content: new_todo.toString()
		});
	},
	async toggle({ request }) {
		const data = await request.formData();
		const todo_id = data.get('todo_id');
		if (!todo_id) {
			return fail(400);
		}
		const todo = todos.find((todo) => todo.id === todo_id.toString());
		if (!todo) {
			return fail(500, { message: 'No todo found' });
		}
		todo.completed = !todo.completed;
	}
};
