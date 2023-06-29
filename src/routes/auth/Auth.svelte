<script>
	import UserLoginForm from './UserLoginForm.svelte';
	import MerchantLoginForm from './MerchantLoginForm.svelte';
	import UserSignupForm from './UserSignupForm.svelte';
	import MerchantSignupForm from './MerchantSignupForm.svelte';

	let isUser;
	let isMerchant;
	let isSigningUp;
</script>

<div class="flex flex-col form-container w-1/2">
	{#if isUser && isSigningUp}
		<UserSignupForm bind:isUser bind:isMerchant bind:isSigningUp />
	{:else if isMerchant && isSigningUp}
		<MerchantSignupForm bind:isUser bind:isMerchant bind:isSigningUp />
	{:else if isMerchant && !isSigningUp}
		<MerchantLoginForm bind:isUser bind:isMerchant bind:isSigningUp />
	{:else}
		<UserLoginForm bind:isUser bind:isMerchant bind:isSigningUp />
	{/if}
</div>
