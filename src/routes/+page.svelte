<script>
	import SearchIcon from '$lib/icons/SearchIcon.svelte';
</script>

<main class="flex-col bg-silver h-screen">
	<h1 class="text-4xl">Welcome to <span class="text-5xl font-quicksand">Localize</span></h1>
	<p class="text-2xl mt-2">Please enter your location to support local merchants!</p>
	<div class="w-full h-28 mt-5">
		<input type="search" class="w-1/2 rounded-l-lg" />
		<button class="bg-carrotOrange py-3 px-5 rounded-r-lg">
			<SearchIcon />
		</button>
	</div>
</main>

<style lang="postcss">
	main,
	div {
		@apply flex items-center justify-center;
	}
</style>
