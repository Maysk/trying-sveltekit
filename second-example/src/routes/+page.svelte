<!-- <script lang="ts">
	async function subscribe(event: Event) {
		const form = event.target as HTMLFormElement;
		const data = new FormData(form);
		await fetch('/api/newsletter', { method: 'POST', body: data });
	}
</script>

<h1>It's home, buddy!</h1>

<form on:submit|preventDefault={subscribe}>
	<input type="email" name="email" />
	<button>Ok</button>
</form> -->
<script lang="ts">
	import type { Post } from '@prisma/client';

	async function getPosts() {
		const response = await fetch('/api/posts');
		const posts: Post[] = await response.json();
		return posts;
	}
</script>

<h1>Posts</h1>

{#await getPosts()}
	<p>Loading...</p>
{:then posts}
	<p>Showing {posts.length} posts.</p>

	<ul>
		{#each posts as { title, slug }}
			<li>
				<a href="/posts/{slug}">{title}</a>
			</li>
		{/each}
	</ul>
{:catch error}
	<p>{error.message}</p>
{/await}
