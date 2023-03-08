import type { KeyMap } from "./key-map";

export type KeyProcessor = {
    readonly abort: () => void;
    readonly registered_key_maps: Array<KeyMap>;
}
