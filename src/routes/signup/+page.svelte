<script>
	import ArrowUpRightSquare from '$lib/icons/ArrowUpRightSquare.svelte';
</script>

<div class="flex flex-col mx-auto w-1/2 bg-silver rounded-lg p-10 mt-32 shadow-lg">
	<h1 class="text-4xl">Signup</h1>
	<label for="firstName">First Name</label>
	<input type="text" id="firstName" name="firstName" placeholder="John" />
	<label for="lastName">Last Name</label>
	<input type="text" id="lastName" name="lastName" placeholder="Smith" />
	<label for="email">Email Address</label>
	<input type="email" id="email" name="email" placeholder="johnsmith@example.com" />
	<label for="password">Password</label>
	<input type="password" id="password" name="password" placeholder="password" />

	<a
		href="/signup/merchants"
		class="mt-5 text-lg font-quicksand text-aqua hover:underline flex items-center gap-1"
	>
		Register as a merchant?
		<ArrowUpRightSquare height={13} width={13} fill="#1C768F" />
	</a>
</div>

<style lang="postcss">
	label {
		@apply mb-1 mt-5;
	}

	::placeholder {
		@apply text-silver opacity-40;
	}
</style>
