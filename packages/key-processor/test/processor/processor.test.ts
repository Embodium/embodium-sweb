import { KeyProcessor, make_processor } from "../../src";
import { beforeAll, describe, expectTypeOf, test } from 'vitest';


beforeAll(() => {
    
});

describe("factory tests", () => {
    test("make-processor is a function", () => {
	expectTypeOf(make_processor).toBeFunction();
    });

    test("make-processor returns a non-nullable Keyprocessor object", () => {
	let fixture = make_processor();
	expectTypeOf(fixture).toBeObject();
	expectTypeOf(fixture).not.toBeUndefined();
	expectTypeOf(fixture).not.toBeNullable();
	expectTypeOf(fixture).toMatchTypeOf<KeyProcessor>();
    });

    
});
