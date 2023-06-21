<script>
	import baseUrl from '$lib/utils/baseUrl';
	import { goto } from '$app/navigation';

	import ArrowUpRightSquare from '$lib/icons/ArrowUpRightSquare.svelte';

	let email;
	let password;

	const handleSubmit = async () => {
		const loginFields = {
			email,
			password
		};

		const response = await fetch(`${baseUrl}/auth/signin`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(loginFields)
		});

		if (response.ok) {
			console.log('Logged In');
			await response.json();
			// if successful, add user to store? set cookies/localStorage?
			// navigate to user homepage?
			goto('/');
		} else {
			// add alert message component that shows that they couldn't be logged in.
			console.log('Could not log you in. Please try again.');
			throw new Error(response.statusText);
		}
	};
</script>

<div class="flex flex-col form-container w-1/2">
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
		<button type="submit" class="submit-button">Login</button>
	</form>

	<a
		href="/signup/new-user"
		class="mt-5 text-lg font-quicksand text-aqua hover:underline flex items-center gap-1"
	>
		Need an account?
		<ArrowUpRightSquare height={13} width={13} />
	</a>
</div>

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
