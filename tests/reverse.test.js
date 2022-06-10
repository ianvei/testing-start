import reverseString from "../code/reverse";

describe.skip('returns reversed string', () => {
    test('one word reversed', () => {
        expect(reverseString('parker')).toBe('rekrap')
    })
    test('include spaces', () => {
        expect(reverseString('parker is cool')).toBe('looc si rekrap')
    })
    test('include spaces', () => {
        expect(reverseString('parker is cool')).toBe('looc si rekrap')
    })
    test('include punctuation', () => {
        expect(reverseString('parker is cool!')).toBe('!looc si rekrap')
    })
    test('all together', () => {
        expect(reverseString('Parker iS so Cool!')).toBe('!looC os Si rekraP')
    })
})