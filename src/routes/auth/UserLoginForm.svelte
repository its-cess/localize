<script>
	import { loginUser } from '$lib/stores/ClientStore';
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

		loginUser(loginFields);
	};
</script>

<form on:submit|preventDefault={handleSubmit} class="flex flex-col">
	<h1 class="text-4xl">User Login</h1>
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

<button
	{isUser}
	{isMerchant}
	{isSigningUp}
	on:click={() => {
		isUser = true;
		isMerchant = false;
		isSigningUp = true;
	}}
	class="mt-5 text-lg font-quicksand text-aqua hover:underline flex items-center gap-1"
	>Need an account?
	<ArrowUpRightSquare height={13} width={13} />
</button>

<style lang="postcss">
	.submit-button {
		@apply my-5 flex w-28 translate-y-0 items-center justify-center whitespace-nowrap rounded-lg bg-carrotOrange px-3 py-2 font-quicksand text-lg shadow-colored outline-none transition-all hover:-translate-y-2 hover:text-aqua hover:shadow-coloredHover;
	}
	label {
		@apply mt-5;
	}

	::placeholder {
		@apply text-silver opacity-40;
	}
</style>
