import { describe, expect, test } from "vitest";
import { key_map_equals, type KeyMap } from "../src";

describe("key_map_equals tests", () => {
    test("key_map_equals returns false if both key maps are nullary", () => {
	const key_map1 = undefined;
	const key_map2 = undefined;
	
	expect(key_map_equals(key_map1, key_map2)).false;
    });
    
    test("key_map_equals returns false if any key map is nullary", () => {
	const nullary_key_map1 = undefined;
	const key_map1 = { activation_keys: [], handlers: [] };;
	
	const key_map2: KeyMap = { activation_keys: [], handlers: [] };
	const nullary_key_map2 = undefined;
	
	expect(key_map_equals(nullary_key_map1, key_map2)).false;
	expect(key_map_equals(key_map1, nullary_key_map2)).false;
    });
    
    test("key_map_equals returns false if activation keys is nullary", () => {
	const key_map1: KeyMap = { activation_keys: [], handlers: [] };
	const key_map2: KeyMap = { activation_keys: [], handlers: [] };
	
	expect(key_map_equals({...key_map1, activation_keys: undefined }, {...key_map2, activation_keys: undefined })).false;
	expect(key_map_equals({...key_map1, activation_keys: undefined }, key_map2)).false;
	expect(key_map_equals(key_map1, {...key_map2, activation_keys: undefined })).false;
    });
    
    test("key_map_equals returns false if length of activation keys is 0 or are not same", () => {
	const key_map1: KeyMap = { activation_keys: [], handlers: [] };
	const key_map2: KeyMap = { activation_keys: [], handlers: [] };
	
	expect(key_map_equals(key_map1, key_map2)).false;
	expect(key_map_equals({...key_map1, activation_keys: [11] }, key_map2)).false;
	expect(key_map_equals(key_map1, {...key_map2, activation_keys: [11] })).false;
	expect(key_map_equals({...key_map1, activation_keys: [11, 12, 13, 14] }, {...key_map2, activation_keys: [11, 12, 13] })).false;
    });
    
    test("key_map_equals returns false even if same length activation keys but with mismatched sequence of keys", () => {
	const key_map1: KeyMap = { activation_keys: [11, 12, 13], handlers: [] };
	const key_map2: KeyMap = { activation_keys: [13, 11, 12], handlers: [] };
	
	expect(key_map_equals(key_map1, key_map2)).false;
    });
    
    test("key_map_equals returns true if activation keys of same length and with matching sequence of keys", () => {
	const key_map1: KeyMap = { activation_keys: [11, 12, 13], handlers: [] };
	const key_map2: KeyMap = { activation_keys: [11, 12, 13], handlers: [] };
	
	expect(key_map_equals(key_map1, key_map2)).true;
    });
});

