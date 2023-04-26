<div class="flex flex-col mx-auto w-1/2 bg-silver rounded-lg p-10 mt-32 shadow-lg">
	<h1 class="text-4xl">Login</h1>
	<label for="email">Email Address</label>
	<input type="email" id="email" name="email" placeholder="mail@example.com" />
	<label for="password">Password</label>
	<input type="password" id="password" name="password" placeholder="password" />
</div>

<style lang="postcss">
	label {
		@apply mt-5;
	}

	::placeholder {
		@apply text-silver opacity-40;
	}
</style>
