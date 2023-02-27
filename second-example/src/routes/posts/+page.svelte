<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
    onMount(() => console.log("Mount Post"))
    onDestroy(() => console.log("Destroy Post"))
</script>

<h1>
    it's posts, buddy!
</h1>


<p>    
    You can create a new post here: <a href="/posts/create">Link</a>
</p>