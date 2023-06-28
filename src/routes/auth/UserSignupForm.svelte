<script>
	import Button from '$lib/components/Button.svelte';
	import ArrowUpRightSquare from '$lib/icons/ArrowUpRightSquare.svelte';
</script>

<h1 class="text-4xl">User Signup</h1>
<label for="firstName">First Name</label>
<input type="text" id="firstName" name="firstName" placeholder="John" />
<label for="lastName">Last Name</label>
<input type="text" id="lastName" name="lastName" placeholder="Smith" />
<label for="email">Email Address</label>
<input type="email" id="email" name="email" placeholder="johnsmith@example.com" />
<label for="password">Password</label>
<input type="password" id="password" name="password" placeholder="password" />
<Button label="Signup" isAnimated={true} />

<a href="/signup/new-merchant" class="page-links mt-5 text-lg text-aqua">
	Register as a merchant?
	<ArrowUpRightSquare height={13} width={13} />
</a>
<a href="/login/user" class="page-links text-base text-monsoon">
	Already have an account?
	<ArrowUpRightSquare height={10} width={10} />
</a>

<style lang="postcss">
	label {
		@apply mb-1 mt-5;
	}

	.page-links {
		@apply flex items-center gap-1 font-quicksand hover:underline;
	}
	::placeholder {
		@apply text-silver opacity-40;
	}
</style>
