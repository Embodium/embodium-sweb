import { make_processor } from "../../src";
import { beforeAll, describe, expectTypeOf, test } from 'vitest'


beforeAll(() => {
    
});

describe("make-processor tests", () => {
    test("make-processor", () => {
	let fixture = make_processor();
	expectTypeOf(fixture).toBeFunction();
    });
});
