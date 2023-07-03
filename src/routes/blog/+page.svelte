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
			Published {new Date(post.meta.metadata.date).toLocaleDateString('en-GB')}
			<p>{post.meta.metadata.short ?? ""}</p>
		</li>
	{/each}
</ul>
