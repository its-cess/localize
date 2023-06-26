<script>
	import { user } from '$lib/stores/UserStore';

	let userName = `${$user.firstName} ${$user.lastName}`;
</script>

<h1>User Dashboard</h1>
<h2>Welcome back, {userName}</h2>
