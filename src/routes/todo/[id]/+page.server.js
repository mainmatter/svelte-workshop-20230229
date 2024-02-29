import { error, fail, redirect } from '@sveltejs/kit';
import { todos } from '../../db';

export function load({ params: { id } }) {
	const todo = todos.find((todo) => todo.id === id);
	if (!todo) {
		error(404);
	}
	return {
		todo
	};
}

export const actions = {
	async edit({ request, params: { id } }) {
		const data = await request.formData();
		const new_content = data.get('content');
		const completed = data.has('completed');
		if (!new_content) {
			return fail(400, { message: 'no new content' });
		}
		const todo = todos.find((todo) => todo.id === id);
		if (!todo) {
			return fail(500, { message: 'no todo found' });
		}
		todo.completed = completed;
		todo.content = new_content.toString();
		redirect(301, '/');
	}
};
