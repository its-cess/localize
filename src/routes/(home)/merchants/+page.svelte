<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';

	let isUser;

	const handleSignupClick = () => {
		isUser = false;
		goto('/auth');
	};
</script>

<main class="center h-screen">
	<h1 class="text-5xl">Welcome to Localize!</h1>
	<p>
		Enhance your business's visibility with ease, expand your customer base, and increase your
		profits with our user-friendly platform
	</p>

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

	<!-- TODO: remove buttons for auth pages here. -->
	<div class="flex justify-center gap-10">
		<Button
			label="Signup"
			style="primary"
			size="large"
			isAnimated={true}
			onClick={handleSignupClick}
		/>
		<Button label="Login" style="secondary" size="large" isAnimated={true} />
		<!-- <a href="/auth" class="bg-carrotOrange outline-none hover:text-aqua">Signup </a> -->
		<!-- <a href="/auth" class="bg-whisper text-aqua hover:text-carrotOrange">Login</a> -->
	</div>
</main>

<style lang="postcss">
	a {
		@apply my-6 flex w-44 translate-y-0 items-center justify-center  whitespace-nowrap rounded-lg px-5 py-3 font-quicksand text-2xl shadow-colored transition-all hover:-translate-y-2 hover:shadow-coloredHover;
	}
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
