<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
    import '../app.css'
    onMount(() => console.log("Mount Layout"))
    onDestroy(() => console.log("Destroy Layout"))
</script>

<nav>
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/posts">Posts</a>
        </li>
    </ul>
</nav>

<slot />