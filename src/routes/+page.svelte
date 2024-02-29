<script>
	import { enhance } from '$app/forms';
	import Todo from './Todo.svelte';

	export let data;

	$: todos = data.todos;

	$: completed_items = todos.filter((todo) => todo.completed).length;

	let new_todo = '';
</script>

<form use:enhance action="?/add" method="post">
	<input name="new_todo" bind:value={new_todo} />
	<button>Add todo</button>
</form>
Completed items: {completed_items}
<form action="?/toggle" method="post" use:enhance>
	{#each todos as todo (todo.id)}
		<Todo {...todo} />
	{/each}
</form>
<!-- svelte-ignore a11y-distracting-elements -->
<marquee>This is a veeeeeeery cool tag!</marquee>
