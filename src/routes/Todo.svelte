<script>
	/**
	 * @type {boolean}
	 */
	export let completed;
	/**
	 * @type {string}
	 */
	export let content;
	/**
	 * @type {string}
	 */
	export let id;
</script>

<button value={id} name="todo_id" class:completed on:click>
	{content}
</button>
<a href="/todo/{id}">Edit</a>

<style>
	.completed {
		text-decoration: line-through;
	}
	button {
		all: unset;
		display: block;
	}
</style>
