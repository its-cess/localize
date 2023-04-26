<script>
	export let label;
	export let style = 'primary';
	export let size = 'medium';
	export let isAnimated = false;
	export let onClick = () => {};
</script>

<button
	on:click|preventDefault={() => onClick()}
	class="flex justify-center items-center whitespace-nowrap rounded-lg font-quicksand"
	class:primary={style === 'primary'}
	class:secondary={style === 'secondary'}
	class:destructive={style === 'destructive'}
	class:outline={style === 'outline'}
	class:textOnly={style === 'textOnly'}
	class:textOnlyDestructive={style === 'textOnlyDestructive'}
	class:small={size === 'small'}
	class:medium={size === 'medium'}
	class:large={size === 'large'}
	class:isAnimated
>
	{label}
	<slot />
</button>

<style lang="postcss">
	.primary {
		@apply bg-carrotOrange outline-none;
	}

	.primary:hover {
		@apply text-aqua;
	}

	.secondary {
		@apply bg-whisper text-aqua;
	}

	.secondary:hover {
		@apply text-carrotOrange;
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

	.textOnlyDestructive {
		@apply bg-transparent text-scarlet underline hover:no-underline;
	}

	.small {
		@apply my-2 w-24 px-2 py-1 text-base;
	}

	.medium {
		@apply my-5 w-28 px-3 py-2 text-lg;
	}
	.large {
		@apply my-6 w-44 px-5 py-3 text-2xl;
	}

	.isAnimated {
		@apply translate-y-0 shadow-colored transition-all hover:-translate-y-2 hover:shadow-coloredHover;
	}
</style>
