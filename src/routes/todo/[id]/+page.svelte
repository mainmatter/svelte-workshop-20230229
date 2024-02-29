<script lang="ts">
	import { enhance } from '$app/forms';

	export let data;
	export let form;
</script>

{#if form?.message}
	<strong>{form.message}</strong>
{/if}
<form
	use:enhance={({ cancel, formData }) => {
		const new_content = formData.get('content');
		if (!new_content) {
			form = {
				message: 'no new content'
			};
			cancel();
		}
	}}
	method="post"
	action="?/edit"
>
	<input name="content" value={data.todo?.content} />
	<label>
		<input name="completed" type="checkbox" checked={data.todo?.completed} />
		Completed
	</label>
	<button>Save</button>
</form>
