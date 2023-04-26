<script>
	import ShoppingCart from '../icons/ShoppingCart.svelte';
	import Button from './Button.svelte';
	import Cart from './Cart.svelte';
	import SlidePanel from './SlidePanel.svelte';

	let isCartOpen = false;
</script>

<nav class="flex justify-between items-center p-8 bg-carrotOrange shadow-lg">
	<a href="/" class="text-4xl font-quicksand hover:text-aqua">Localize</a>
	<!-- make icon a button that opens slideout cart panel -->
	<Button
		label=""
		style="primary"
		onClick={() => {
			isCartOpen = true;
		}}
	>
		<ShoppingCart />
	</Button>

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
