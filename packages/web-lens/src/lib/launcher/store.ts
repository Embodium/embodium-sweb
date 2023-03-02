import type { Writable } from "svelte/store";
import type { ExpanderState } from "./expand";

export type LauncherStore = {
    state?: Writable<ExpanderState>;
}
