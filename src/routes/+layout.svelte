<script>
	import '../app.postcss';
	import Navbar from '../lib/components/navbar.svelte';
	import Footer from '../lib/components/footer.svelte';
</script>

<div class="flex flex-col min-h-screen bg-neutral-700">
	<Navbar />
	<div class="flex-grow ml-0 mr-0 md:ml-32 md:mr-32 lg:ml-60 lg:mr-60 prose prose-invert">
		<slot />
	</div>
	<Footer />
</div>
