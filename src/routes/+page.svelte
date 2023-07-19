<script>
	import Button from '$lib/components/Button.svelte';
</script>

<main class="xs:center mt-12 xs:mt-72">
	<div class="xs:center px-6 xs:px-3">
		<h1 class="xs:text-center text-2xl xs:text-5xl">Welcome to Localize!</h1>
		<p class="my-4 xs:text-center text-sm xs:text-xl">
			Please enter your location and support local merchants!
		</p>
		<div class="flex items-center flex-row xs:justify-center xs:items-center gap-1 xs:gap-3 mt-5">
			<input
				type="search"
				placeholder="Enter city or postal code"
				class="outline w-[200px] xs:w-[350px] sm:w-[400px] h-11"
			/>
			<Button label="Search" isAnimated={true} />
		</div>
	</div>
</main>

<style lang="postcss">
	::placeholder {
		@apply text-silver opacity-70;
	}
	@media (max-width: 590px) {
		::placeholder {
			@apply text-sm;
		}
	}
</style>
