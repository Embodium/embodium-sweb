import { writable, type Writable } from "svelte/store";
import type { LauncherStore } from "$lib/launcher/store";

export type WebLensStore = {
    accessible: Writable<boolean>;
    readonly launcher: LauncherStore;
};

export const lens_store = {
    accessible: writable(false),
    launcher: {
	state: writable('collapsed')
    }
};
