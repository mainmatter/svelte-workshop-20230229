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

<button class:completed on:click>
	{content} - {completed}
</button>

<style>
	.completed {
		text-decoration: line-through;
	}
	button {
		all: unset;
		display: block;
	}
</style>
