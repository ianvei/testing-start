import cypher from "../code/cypher.js";

describe('ceaser cypher', () => {
    test('no wrap cypher', () => {
        expect(cypher("abc", 2)).toBe("cde")
    })
})