var SimpleNameRegistry = artifacts.require("SimpleNameRegistry");

contract('SimpleNameRegistry', function (accounts) {
    it("should set the donate address as the first name", function () {
        SimpleNameRegistry.deployed().then(function (instance) {
            return instance.names("donate");
        }).then(function (address) {
            assert.equal(address, accounts[0]);
        })
    });

    it("registers new names", function () {
        var namereg;
        SimpleNameRegistry.deployed().then(function (instance) {
            namereg=instance;
            return instance.register("newname", "0x1234567890123456789012345678901234567890");
        }).then(function () {
            namereg.names("newname");
        }).then(function (address) {
            assert.equal(address, "0x1234567890123456789012345678901234567890");
        })


    });

    it("won't override pre-registered names", function () {
        // var namereg = SimpleNameRegistry.deployed();
        var namereg;
        SimpleNameRegistry.deployed().then(function (instance) {
            namereg=instance;
            return instance.register("newname", "0x1111111111111111111111111111111111111111");
        }).then(function () {
            namereg.names("newname");
        }).then(function (address) {
            assert.equal(address, "0x1234567890123456789012345678901234567890");
        })

    });
});
