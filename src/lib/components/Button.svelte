<script>
	export let label;
	export let style = 'primary';
	export let isAnimated = false;
</script>

<button
	class="flex justify-center items-center text-2xl w-36 whitespace-nowrap rounded-lg px-5 py-2 font-quicksand shadow-sm"
	class:primary={style === 'primary'}
	class:secondary={style === 'secondary'}
	class:destructive={style === 'destructive'}
	class:outline={style === 'outline'}
	class:textOnly={style === 'textOnly'}
	class:isAnimated
>
	{label}
	<slot />
</button>

<style lang="postcss">
	.primary {
		@apply bg-carrotOrange outline-none;
	}

	.secondary {
		@apply bg-whisper text-aqua;
	}

	.destructive {
		@apply bg-scarlet text-naplesYellow;
	}

	.outline {
		@apply border-iceBlue bg-transparent text-aqua hover:bg-iceBlue hover:text-black hover:outline-none;
	}

	.textOnly {
		@apply bg-transparent text-xl text-daisyBush shadow-none outline-none hover:underline;
	}

	.isAnimated {
		@apply translate-y-0 shadow-colored transition-all hover:-translate-y-2 hover:shadow-coloredHover;
	}
</style>
