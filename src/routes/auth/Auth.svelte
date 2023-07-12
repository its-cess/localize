<script>
	import UserLoginForm from './UserLoginForm.svelte';
	import MerchantLoginForm from './MerchantLoginForm.svelte';
	import UserSignupForm from './UserSignupForm.svelte';
	import MerchantSignupForm from './MerchantSignupForm.svelte';

	let isUser;
	let isMerchant;
	let isSigningUp;
</script>

{#if isUser && isSigningUp}
	<div class="form-background small-form">
		<UserSignupForm bind:isUser bind:isMerchant bind:isSigningUp />
	</div>
{:else if isMerchant && isSigningUp}
	<div class="form-background merchantForm:w-1/2">
		<MerchantSignupForm bind:isUser bind:isMerchant bind:isSigningUp />
	</div>
{:else if isMerchant && !isSigningUp}
	<div class="form-background small-form">
		<MerchantLoginForm bind:isUser bind:isMerchant bind:isSigningUp />
	</div>
{:else}
	<div class="form-background small-form">
		<UserLoginForm bind:isUser bind:isMerchant bind:isSigningUp />
	</div>
{/if}

<style lang="postcss">
	.small-form {
		@apply flex w-full flex-col xs:w-1/2;
	}

	.form-background {
		@apply mx-auto mt-32 rounded-lg bg-whisper p-5 shadow-colored;
	}
</style>
