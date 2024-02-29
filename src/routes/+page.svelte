<script>
	let todos = [
		{
			completed: true,
			content: 'Learn HTML',
			id: '1'
		},
		{
			completed: false,
			content: 'Learn CSS',
			id: '2'
		}
	];

	$: completed_items = todos.filter((todo) => todo.completed).length;

	let new_todo = '';
</script>

<input bind:value={new_todo} />
<button
	on:click={() => {
		todos.push({
			completed: false,
			id: crypto.randomUUID(),
			content: new_todo
		});
		todos = todos;
		new_todo = '';
	}}>Add todo</button
>
Completed items: {completed_items}

{#each todos as todo (todo.id)}
	<button
		class:completed={todo.completed}
		on:click={() => {
			todo.completed = !todo.completed;
			todos = todos;
		}}
	>
		{todo.content} - {todo.completed}
	</button>
{/each}

<style>
	.completed {
		text-decoration: line-through;
	}
	button {
		all: unset;
		display: block;
	}
</style>
