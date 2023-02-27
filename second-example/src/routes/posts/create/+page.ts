import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    // throw new Error("Yikes (Eita)!")
    throw error(404, {message: 'Eita Fih!'})
};