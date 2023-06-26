<script>
	import { user, logoutUser } from '$lib/stores/ClientStore';
	import ShoppingCart from '../icons/ShoppingCart.svelte';
	import Button from './Button.svelte';
	import Cart from './Cart.svelte';
	import SlidePanel from './SlidePanel.svelte';

	let isCartOpen = false;

	const handleClick = () => {
		logoutUser();
	};
</script>

<nav class="flex justify-between items-center p-4 bg-carrotOrange shadow-lg">
	<a href="/" class="text-4xl">Localize</a>
	<div class="flex items-center">
		{#if $user}
			<button on:click={handleClick} class="logout-btn text-xl">Logout</button>
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
