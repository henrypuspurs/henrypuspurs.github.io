<script lang="ts">
	export let data;

	const date = new Date(data.date);
</script>

<article>
	<h1>{data.title}</h1>
	<p>Published: {date.toLocaleDateString('en-GB')}</p>
	<svelte:component this={data.content} />
</article>
