<script>
	import Auth from './Auth.svelte';

	let isUser = true;
	let isMerchant = false;
	let isSigningUp = false;
</script>

<Auth bind:isUser bind:isMerchant bind:isSigningUp />
