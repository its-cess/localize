<script>
	import Button from '$lib/components/Button.svelte';
	import ArrowUpRightSquare from '$lib/icons/ArrowUpRightSquare.svelte';
</script>

<main class="center mt-60 sm:mt-72">
	<div class="center px-3">
		<h1 class="text-5xl">Welcome to Localize!</h1>
		<p class="my-4 text-center text-xl">Please enter your location and support local merchants!</p>
		<div class="flex items-center gap-1 sm:gap-3 mt-5">
			<input
				type="search"
				placeholder="Enter city or postal code"
				class="outline w-[350px] sm:w-[400px] h-11"
			/>
			<Button label="Search" isAnimated={true} />
		</div>
	</div>
</main>

<style lang="postcss">
	.center {
		@apply flex flex-col items-center justify-center text-center;
	}
	::placeholder {
		@apply text-silver opacity-70;
	}
</style>
