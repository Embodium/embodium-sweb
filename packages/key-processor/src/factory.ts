import { build_processor } from "./processor"
import { KeyMap, KeyProcessor } from "./processor-model";

export const make_processor = (key_maps: Array<KeyMap> = []): KeyProcessor => {
    return build_processor(key_maps);
}
