var NameReg = require("../index");

// Note: This uses describe(), instead of contract(), which means this is
// a normal javascript test and doesn't have the state provided by contract().
describe("library interface", function () {
    it("should have a donation address", function (done) {
        NameReg.get("donate", function (err, address) {
            assert.equal(address, "0x9c8341a08ad2162cabd6146a42d38c22e6159b60");
            done();
        })
    })
});
