export type KeyProcessor = {
    readonly abort: () => void;
    readonly registered_key_maps: Array<KeyMap>;
}

export type KeyMap = {
    readonly id?: string;
    readonly activation_keys: Array<number>;
    readonly handlers: Array<(active_command: KeyMap) => void>;
}
