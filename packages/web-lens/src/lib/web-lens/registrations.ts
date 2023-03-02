import type { WebLensStore } from "./store";
import WebLensWebComponent from "./wl-custom";

export const register_custom = async <TElement>(comp_name: string, comp_type: TElement) => {
    const tag_name = (comp_name ?? "").trim();
    if (tag_name && comp_type) {
        if (!customElements.get(tag_name)) {
            customElements.define(tag_name, comp_type as any);
            const tagged_element = await customElements.whenDefined(tag_name);
            dispatchEvent(new CustomEvent("embodium-web:custom-elements:defined", {
                detail: {
                    name: tag_name,
                    element: tagged_element
                }
            }));
        }
    }
}

export const do_registrations = async (lens_store: WebLensStore) => {
    (globalThis as any)['embodium'] = {
        ...(globalThis as any)['embodium'],
        ['web-lens']: {
            ...(globalThis as any)['embodium']?.['web-lens'],
            toggle_lens: () => {
		const unsubscriber = lens_store.accessible.subscribe((curr_value: boolean) => {
		    lens_store.accessible.set(!curr_value);
		    unsubscriber();
		});
            }
        }
    }
    
   await register_custom("web-lens", WebLensWebComponent);
}
