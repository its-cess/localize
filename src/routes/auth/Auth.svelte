<script>
	import UserLoginForm from './UserLoginForm.svelte';
	import MerchantLoginForm from './MerchantLoginForm.svelte';
	import UserSignupForm from './UserSignupForm.svelte';
	import MerchantSignupForm from './MerchantSignupForm.svelte';

	//export let isUser;
	let isSigningUp;
</script>

Auth Component
<div class="flex flex-col form-container w-1/2">
	{#if !isSigningUp}
		<UserLoginForm bind:isSigningUp />
	{:else}
		<UserSignupForm />
	{/if}
	<!-- {#if isUser}
		{#if !isSigningUp}
			<UserLoginForm isNewUser={isSigningUp} />
		{:else}
			<UserSignupForm />
		{/if}
	{:else if !isUser && !isSigningUp}
		<MerchantLoginForm />
	{:else}
		<MerchantSignupForm />
	{/if} -->
</div>
