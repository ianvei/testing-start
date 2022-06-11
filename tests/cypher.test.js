import cypher from "../code/cypher.js";

describe.skip('ceaser cypher', () => {
    test('no wrap cypher', () => {
        expect(cypher("abc", 2)).toBe("cde")
    })
    test('one word wrap', () => {
        expect(cypher('wxyz', 4)).toBe("abcd")
    })
    test('full sentence and punctuation', () => {
        expect(cypher('parker is awesome!', 10)).toBe("zkbuob sc kgocywo!")
    })
})