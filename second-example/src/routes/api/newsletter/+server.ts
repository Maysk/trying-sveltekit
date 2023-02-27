import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
	const options: ResponseInit = {
		status: 418,
		headers: {
			X: 'gona give to ya'
		}
	};
	return new Response('Hi', options);
};

export const POST: RequestHandler = async (event) => {
	const data = await event.request.formData();

	const email = data.get('email');

	console.log(email);

	return new Response(
		JSON.stringify({
			success: true,
			headers: {
				'Content-Type': 'application/json'
			}
		})
	);
};
