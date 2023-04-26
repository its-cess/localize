<script>
	import Button from '$lib/components/Button.svelte';
</script>

<main class="center h-screen">
	<div class="center">
		<h1 class="text-5xl">Welcome to Localize!</h1>
		<p>
			Enhance your business's visibility with ease, expand your customer base, and increase your
			profits with our user-friendly platform
		</p>
		<div class="flex justify-center gap-10 my-8">
			<a href="/signup"><Button label="Signup" style="primary" isAnimated={true} /></a>
			<a href="/signin"><Button label="Login" style="secondary" isAnimated={true} /></a>
		</div>
	</div>

	<div class="center">
		<h2 class="text-3xl">Why Choose Us?</h2>
		<p>
			Our platform aims to be as inclusive as possible. All businesses can create an account and
			start selling locally today! We know the challenges that small business owners can face when
			trying to access an internet-based market -- the costs are high, the learning curve is steep,
			and maintenance can be exhausting. With our platform, you get to reach out to your local
			customers in an easy way without the hassle.
		</p>
	</div>
</main>

<style lang="postcss">
	.center {
		@apply flex flex-col items-center justify-center px-20;
	}

	div.center {
		@apply my-8;
	}

	h2 {
		@apply font-quicksand;
	}

	p {
		@apply my-4 text-center text-xl;
	}
</style>
