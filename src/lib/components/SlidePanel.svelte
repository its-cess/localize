<script>
	import { createEventDispatcher } from 'svelte';
	import Portal from './Portal.svelte';
	import Overlay from './Overlay.svelte';
	import CircleX from '../icons/CircleX.svelte';

	const dispatch = createEventDispatcher();
</script>

<svelte:window
	on:keydown={(event) => {
		if (event.key === 'Escape') {
			dispatch('closePanel');
		}
	}}
/>

<Portal>
	<Overlay />
	<div
		class="fixed overflow-y-scroll bg-white w-1/2 h-screen py-20 px-32 right-0 top-0 z-slidePanel shadow-slidePanel"
	>
		<button
			on:click={() => dispatch('closePanel')}
			class="absolute top-5 left-7 bg-transparent text-black hover:text-aqua"
		>
			<CircleX height={30} width={30} />
		</button>
		<slot />
	</div>
</Portal>
