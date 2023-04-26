<script>
	import Button from '$lib/components/Button.svelte';
	import ArrowUpRightSquare from '$lib/icons/ArrowUpRightSquare.svelte';
</script>

<div class="flex flex-col form-container w-1/2">
	<h1 class="text-4xl">Login</h1>
	<label for="email">Email Address</label>
	<input type="email" id="email" name="email" placeholder="mail@example.com" />
	<label for="password">Password</label>
	<input type="password" id="password" name="password" placeholder="password" />
	<Button label="Login" isAnimated={true} />

	<a
		href="/signup"
		class="mt-5 text-lg font-quicksand text-aqua hover:underline flex items-center gap-1"
	>
		Need an account?
		<ArrowUpRightSquare height={13} width={13} fill="#1C768F" />
	</a>
</div>

<style lang="postcss">
	label {
		@apply mt-5;
	}

	::placeholder {
		@apply text-silver opacity-40;
	}
</style>
