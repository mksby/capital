module.exports = class TestBed {
    #assertCount = {
        false: 0,
        true: 0
    };

    #assert(condition, message) {
        ++this.#assertCount[condition];

        if (!condition) {
            console.log('\n');
        }

        console.assert(condition, message);
    };

    it = (message, callback) => {
        const expect = (result, testInput) => {
            const resultMessage = `\n\n• ${message}\n Expected a string but received "${testInput}"\n\n`;

            return {
                toBeFalsy: () => this.#assert(!result, resultMessage),
                toBeTruthy: () => this.#assert(result, resultMessage),
            }
        };

        callback(expect);
    };

    define = (message, callback) => {
        console.log(`####### ${message} ######## `);

        callback();

        console.log(`# ${this.#assertCount.false} tests have been failed 🚫 `);
        console.log(`# ${this.#assertCount.true} tests have been passed successfully ✅ `);
        console.log(`############################## `);
    };
};
