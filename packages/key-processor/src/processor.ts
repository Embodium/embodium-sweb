import { KeyMap, KeyProcessor } from "./processor-model";

export const build_processor = (key_maps: Array<KeyMap> = []): KeyProcessor => {
    return {
        registered_key_maps: key_maps ?? [],

        abort: () => {
            console.log('[KeyProcessor]', 'Aborting...');
        }
    };
}
