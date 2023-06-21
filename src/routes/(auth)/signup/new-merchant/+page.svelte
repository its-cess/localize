<script>
	import Button from '$lib/components/Button.svelte';
</script>

<div class="form-container w-3/4">
	<h1 class="text-4xl">Merchant Registration</h1>
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
		<Button label="Register" size="large" isAnimated={true} />
	</div>
</div>

<style lang="postcss">
	h3 {
		@apply -m-2 mt-3 font-quicksand text-xl;
	}

	.info-section {
		@apply flex flex-col;
	}

	label {
		@apply mb-1 mt-3;
	}

	::placeholder {
		@apply text-silver opacity-40;
	}
</style>
