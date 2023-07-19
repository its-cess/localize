<script>
	import { signupUser } from '$lib/stores/ClientStore';
	import Loader from '$lib/components/Loader.svelte';
	import ArrowUpRightSquare from '$lib/icons/ArrowUpRightSquare.svelte';

	export let isUser;
	export let isMerchant;
	export let isSigningUp;
	let isLoading = false;

	let firstName;
	let lastName;
	let email;
	let password;

	const handleSubmit = () => {
		isLoading = true;
		const signupFields = {
			firstName,
			lastName,
			email,
			password
		};

		signupUser(signupFields);
	};
</script>

<!-- TODO: add form validation (required, etc.) -->
<form on:submit|preventDefault={handleSubmit} class="flex flex-col">
	<h1 class="text-2xl xs:text-4xl">User Signup</h1>
	<label for="firstName">First Name</label>
	<input type="text" id="firstName" bind:value={firstName} name="firstName" placeholder="John" />
	<label for="lastName">Last Name</label>
	<input type="text" id="lastName" bind:value={lastName} name="lastName" placeholder="Smith" />
	<label for="email">Email Address</label>
	<input
		type="email"
		id="email"
		bind:value={email}
		name="email"
		placeholder="johnsmith@example.com"
	/>
	<label for="password">Password</label>
	<input
		type="password"
		id="password"
		bind:value={password}
		name="password"
		placeholder="password"
	/>

	<button type="submit" class="submit-button">
		{#if isLoading}
			<Loader />
		{:else}
			Signup
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
		isSigningUp = false;
	}}
	class="page-links text-base text-monsoon"
	>Already have an account?
	<ArrowUpRightSquare height={13} width={13} />
</button>

<button
	{isUser}
	{isMerchant}
	{isSigningUp}
	on:click={() => {
		isUser = false;
		isMerchant = true;
		isSigningUp = true;
	}}
	class="page-links mt-1 xs:mt-5 text-base xs:text-lg text-aqua"
	>Register as a merchant?
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
		@apply mb-1 mt-5;
	}

	@media (max-width: 590px) {
		label {
			@apply text-sm;
		}
	}

	.page-links {
		@apply flex items-center gap-1 font-quicksand hover:underline;
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
