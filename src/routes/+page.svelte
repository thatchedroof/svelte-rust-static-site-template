<script lang="ts">
	import { onMount } from 'svelte';
	import { initSync, greet } from '../../{{project-name}}/pkg/{{crate_name}}';

	onMount(async () => {
		const response = await fetch('/{{project-name}}/pkg/{{crate_name}}_bg.wasm');
		const wasmBinary = await response.arrayBuffer();
		initSync(wasmBinary);
        greet("{{project-name}}");
	});
</script>

<h1>Welcome to {{project-name}}!</h1>
