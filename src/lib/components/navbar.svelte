<script>
	import Pill from './pill.svelte';
</script>

<!-- Main navigation container -->
<nav
	class="flex-no-wrap relative flex w-full items-center justify-between bg-neutral-800 lg:flex-wrap lg:justify-start lg:py-4 text-xl"
	data-te-navbar-ref
>
	<div class="flex w-full flex-wrap items-center justify-between px-3">
		<!-- Hamburger button for mobile view -->
		<button
			class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
			type="button"
			data-te-collapse-init
			data-te-target="#navbarSupportedContent1"
			aria-controls="navbarSupportedContent1"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<!-- Hamburger icon -->
			<span class="[&>svg]:w-7">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="h-7 w-7"
				>
					<path
						fill-rule="evenodd"
						d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
						clip-rule="evenodd"
					/>
				</svg>
			</span>
		</button>

		<!-- Collapsible navigation container -->
		<div
			class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
			id="navbarSupportedContent1"
			data-te-collapse-item
		>
			<!-- Left navigation links -->
			<ul class="mr-auto flex flex-col lg:flex-row text-neutral-300 lg:px-2" data-te-navbar-nav-ref>
				<li
					class="mb-4 lg:mb-0 lg:pr-2 transition ease-in-out hover:text-indigo-500"
					data-te-nav-item-ref
				>
					<a href="/" data-te-nav-link-ref>Profile</a>
				</li>
				<li
					class="mb-4 lg:mb-0 lg:pr-2 transition ease-in-out hover:text-indigo-500"
					data-te-nav-item-ref
				>
					<a href="/resources" data-te-nav-link-ref>Resources</a>
				</li>
				<li
					class="mb-4 lg:mb-0 lg:pr-2 transition ease-in-out hover:text-indigo-500"
					data-te-nav-item-ref
				>
					<a href="/blog" data-te-nav-link-ref>Blog</a>
				</li>
			</ul>
		</div>

		<!-- Right elements -->
		<div class="text-indigo-500">
			<Pill>
				<a href="/"
					><img
						src="/HPuspursSM.jpg"
						class="h-8 rounded-full transition ease-in-out hover:brightness-125"
						alt="Henrijs Puspurs"
					/></a
				>
				<a href="https://www.linkedin.com/in/henrijs-puspurs/" target="_blank"
					><img
						src="/LI-In-Bug.png"
						class="h-8 transition ease-in-out hover:brightness-125"
						alt="LinkedIn"
					/></a
				>
				<a href="https://github.com/henrypuspurs" target="_blank"
					><img
						src="/github-mark-white.svg"
						class="h-8 brightness-75 transition ease-in-out hover:brightness-125"
						alt="GitHub"
					/></a
				>
			</Pill>
		</div>
	</div>
</nav>
