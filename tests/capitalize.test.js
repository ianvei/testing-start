import captalizeString from "/Users/ianveilleux/repos/testing-start/code/capitalize.js";


describe.skip('capitalizeString', () => {
    test('first character is capitalized', () => {
        expect(captalizeString('apple')).toBe('Apple');
    })
    
    test('first character is capitalized', () => {
        expect(captalizeString('parker smith')).toBe('Parker smith');
    });
})


describe.skip('capitalize', () => {
test(' return first latter of string capitalized', () => {
    expect(captalizeString("aa")).toBe('Aa');
});
test(' return first latter of string capitalized', () => {
    expect(captalizeString("the boy")).toBe('The boy');
});
})