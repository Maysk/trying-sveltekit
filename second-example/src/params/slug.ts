import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
	return /^[a-zA-Z0-9_.-]*$/.test(param);
};
