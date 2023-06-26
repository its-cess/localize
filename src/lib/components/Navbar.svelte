<script>
	import { user, logoutUser } from '$lib/stores/UserStore';
	import { merchant, logoutMerchant } from '$lib/stores/MerchantStore';
	import ShoppingCart from '../icons/ShoppingCart.svelte';
	import Button from './Button.svelte';
	import Cart from './Cart.svelte';
	import SlidePanel from './SlidePanel.svelte';
	import { get_all_dirty_from_scope } from 'svelte/internal';

	let isCartOpen = false;

	const handleUserClick = () => {
		logoutUser();
	};

	const handleMerchantClick = () => {
		logoutMerchant();
	};
</script>

<nav class="flex justify-between items-center p-4 bg-carrotOrange shadow-lg">
	<a href="/" class="text-4xl">Localize</a>
	<div class="flex items-center">
		<!-- TODO: need to fix and figure out how to handle Merchant vs. User logout -->
		{#if $user}
			<button on:click={handleUserClick} class="logout-btn text-xl">Logout</button>
		{:else if $merchant}
			<button on:click={handleMerchantClick} class="logout-btn text-xl">Logout</button>
		{:else}
			<a href="/login/user" class="text-xl">Login</a>
		{/if}
		<Button
			label=""
			style="primary"
			onClick={() => {
				isCartOpen = true;
			}}
		>
			<ShoppingCart />
		</Button>
	</div>

	<!-- SLIDE PANEL -->
	{#if isCartOpen}
		<SlidePanel
			on:closePanel={() => {
				isCartOpen = false;
			}}
		>
			<Cart />
		</SlidePanel>
	{/if}
</nav>

<style lang="postcss">
	a,
	.logout-btn {
		@apply font-quicksand hover:text-aqua;
	}
</style>
