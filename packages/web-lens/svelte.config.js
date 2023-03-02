// import fg from "fast-glob";
// import { fileURLToPath } from 'url';
// import { readdirSync, statSync } from "fs";
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
// import { join, dirname, extname, normalize } from 'path';

function has_custom_element_marker(code) {
    const svelteOptionsIdx = code.indexOf('<svelte:options ')
    if(svelteOptionsIdx < 0) {
        return false
    }
    const tagOptionIdx = code.indexOf('tag=', svelteOptionsIdx)
    const svelteOptionsEndIdx = code.indexOf('>',svelteOptionsIdx);
    return tagOptionIdx > svelteOptionsIdx && tagOptionIdx < svelteOptionsEndIdx
}

///** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),
    emitCss: false,
    kit: {
        adapter: adapter()
    },
    vitePlugin: {
        experimental: {
            dynamicCompileOptions(args) {
		if (has_custom_element_marker(args.code)) {
		    return {
		 	customElement: true
		    };
		}
            }
        }
    }
};

export default config;
