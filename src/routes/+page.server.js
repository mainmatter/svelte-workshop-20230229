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
	async toggle() {}
};
