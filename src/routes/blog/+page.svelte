<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Henry Puspurs - Blog</title>
</svelte:head>

<h1>Blog</h1>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.metadata.title}
				</a>
			</h2>
			Published {post.meta.metadata.date}
		</li>
	{/each}
</ul>
