export type KeyMap = {
    readonly id?: string;
    readonly activation_keys: Array<number>;
    readonly handlers: Array<(active_command: KeyMap) => void>;
}

const match_sequence = (sequence_1: Array<number>, sequence_2: Array<number>): boolean => {
    if(!sequence_1.length) {
	return true;
    }
    
    return (sequence_1[0] === sequence_2[0]) && match_sequence(sequence_1.slice(1), sequence_2.slice(1));
}

export const key_map_equals = (key_map1: KeyMap, key_map2: KeyMap) => {
    if (key_map1 && key_map2) {
        if (key_map1.activation_keys && key_map2.activation_keys) {
            if (key_map1.activation_keys.length && key_map2.activation_keys.length) {
                if (key_map1.activation_keys.length === key_map2.activation_keys.length) {
                    return match_sequence(key_map1.activation_keys, key_map2.activation_keys);
                }
            }
        }
    }
    return false;
}
