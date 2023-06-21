<script>
	import ShoppingCart from '../icons/ShoppingCart.svelte';
	import Button from './Button.svelte';
	import Cart from './Cart.svelte';
	import SlidePanel from './SlidePanel.svelte';

	let isCartOpen = false;
</script>

<nav class="flex justify-between items-center p-4 bg-carrotOrange shadow-lg">
	<a href="/" class="text-4xl">Localize</a>
	<div class="flex items-center">
		<!-- change login to say logout if logged in, login if no user -->
		<a href="/login/user" class="text-xl">Login</a>
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
	a {
		@apply font-quicksand hover:text-aqua;
	}
</style>
