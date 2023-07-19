<script>
	import { loginMerchant } from '$lib/stores/ClientStore';
	import Loader from '$lib/components/Loader.svelte';
	import ArrowUpRightSquare from '$lib/icons/ArrowUpRightSquare.svelte';

	export let isUser;
	export let isMerchant;
	export let isSigningUp;
	let isLoading = false;

	let email;
	let password;

	const handleSubmit = () => {
		isLoading = true;
		const loginFields = {
			email,
			password
		};

		loginMerchant(loginFields);
	};
</script>

<!-- TODO: add form validation (required, etc.) -->
<form on:submit|preventDefault={handleSubmit} class="flex flex-col">
	<h1 class="text-2xl xs:text-4xl">Merchant Login</h1>
	<label for="email">Email Address</label>
	<input type="email" id="email" name="email" placeholder="mail@example.com" bind:value={email} />
	<label for="password">Password</label>
	<input
		type="password"
		id="password"
		name="password"
		placeholder="password"
		bind:value={password}
	/>
	<button type="submit" class="submit-button">
		{#if isLoading}
			<Loader />
		{:else}
			Login
		{/if}
	</button>
</form>

<!--TODO: add logic for props to change if logging in/signing up and if theyre user or merchant. -->
<button
	{isUser}
	{isMerchant}
	{isSigningUp}
	on:click={() => {
		isUser = false;
		isMerchant = true;
		isSigningUp = true;
	}}
	class="mt-1 xs:mt-5 text-base xs:text-lg font-quicksand text-aqua hover:underline flex items-center gap-1"
	>Need an account?
	<ArrowUpRightSquare height={13} width={13} />
</button>

<style lang="postcss">
	.submit-button {
		@apply my-5 flex w-28 translate-y-0 items-center justify-center whitespace-nowrap rounded-lg bg-carrotOrange px-3 py-2 font-quicksand text-lg shadow-colored outline-none transition-all hover:-translate-y-2 hover:text-aqua hover:shadow-coloredHover;
	}

	@media (max-width: 590px) {
		.submit-button {
			@apply w-full text-base;
		}
	}
	label {
		@apply mt-5;
	}

	@media (max-width: 590px) {
		label {
			@apply text-sm;
		}
	}

	::placeholder {
		@apply text-silver opacity-40;
	}

	@media (max-width: 590px) {
		::placeholder {
			@apply text-sm;
		}
	}
</style>
