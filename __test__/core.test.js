import createCore from "../src/core.js";


describe('Testing core when imported', () => {

    test('should contain the method #start and #stop', () => {

        const core = createCore();

        console.log(core);

        expect(core).toHaveProperty('start');
    });
});