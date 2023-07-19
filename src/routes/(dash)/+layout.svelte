<script>
	import '../../app.css';
</script>

<div class="flex flex-row h-screen">
	<div class="bg-black text-white border-red-500 border-2 max-w-[40%]">
		<p>Add a sidebar menu component here.</p>
		ASIDE
	</div>
	<div class="border-blue-500 border-2 w-full">MAIN<slot /></div>
</div>
