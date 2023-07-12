<script>
	import ArrowUpRightSquare from '$lib/icons/ArrowUpRightSquare.svelte';
	import Loader from '$lib/components/Loader.svelte';

	export let isUser;
	export let isMerchant;
	export let isSigningUp;
	let isLoading = false;
</script>

<!--TODO: add signup functionality.-->
<form class="flex flex-col">
	<h1 class="text-2xl md:text-4xl">Merchant Registration</h1>
	<div class="grid grid-cols-2 gap-8 mt-5">
		<div class="info-section">
			<h3>Owner Information</h3>
			<label for="companyName">Company Name</label>
			<input type="text" id="companyName" name="companyName" placeholder="My Business" />

			<label for="ownerFirstName">Owner First Name</label>
			<input type="text" id="ownerFirstName" name="ownerFirstName" placeholder="John" />

			<label for="ownerLastName">Owner Last Name</label>
			<input type="text" id="ownerLastName" name="ownerLastName" placeholder="Smith" />

			<div class="info-section">
				<h3>Account Information</h3>
				<label for="email">Email Address</label>
				<input type="email" id="email" name="email" placeholder="johnsmith@example.com" />

				<label for="password">Password</label>
				<input type="password" id="password" name="password" placeholder="password" />
			</div>
		</div>

		<div class="info-section">
			<h3>Bussiness Information</h3>
			<label for="address">Street Address</label>
			<input type="text" id="address" name="address" placeholder="123 Main Street" />

			<label for="city">City</label>
			<input type="text" id="city" name="city" placeholder="Toronto" />

			<label for="postalCode">Postal Code</label>
			<input type="number" id="postalCode" name="postalCode" placeholder="123456" />

			<!-- Make Country a Dropdown Picker -->
			<label for="country">Country</label>
			<input type="text" id="country" name="country" placeholder="Canada" />

			<label for="phoneNumber">Phone Number</label>
			<input type="number" id="phoneNumber" name="phoneNumber" placeholder="(123) 456-7890" />
		</div>
	</div>
	<div class="flex justify-end">
		<div class="flex flex-col">
			<button type="submit" class="submit-button">
				{#if isLoading}
					<Loader />
				{:else}
					Register
				{/if}
			</button>

			<button
				{isUser}
				{isMerchant}
				{isSigningUp}
				on:click={() => {
					isUser = false;
					isMerchant = true;
					isSigningUp = false;
				}}
				class="page-links text-base text-monsoon"
				>Already a merchant?
				<ArrowUpRightSquare height={13} width={13} />
			</button>
		</div>
	</div>
</form>

<style lang="postcss">
	h3 {
		@apply -m-2 mt-3 font-quicksand text-xl;
	}

	@media (max-width: 640px) {
		h3 {
			@apply text-lg;
		}
	}

	.info-section {
		@apply flex flex-col;
	}

	.page-links {
		@apply flex items-center gap-1 font-quicksand hover:underline;
	}

	label {
		@apply mb-1 mt-3;
	}

	@media (max-width: 640px) {
		label {
			@apply text-sm;
		}
	}

	::placeholder {
		@apply text-silver opacity-40;
	}

	@media (max-width: 640px) {
		::placeholder {
			@apply text-sm;
		}
	}

	.submit-button {
		@apply my-5 flex w-28 translate-y-0 items-center justify-center whitespace-nowrap rounded-lg bg-carrotOrange px-3 py-2 font-quicksand text-lg shadow-colored outline-none transition-all hover:-translate-y-2 hover:text-aqua hover:shadow-coloredHover;
	}

	@media (max-width: 640px) {
		.submit-button {
			@apply w-full text-base;
		}
	}
</style>
