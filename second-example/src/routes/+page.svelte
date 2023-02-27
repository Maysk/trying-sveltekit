<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
    onMount(() => console.log("Mount Home"))
    onDestroy(() => console.log("Destroy Home"))
</script>
<h1>
    It's home, buddy!
</h1>