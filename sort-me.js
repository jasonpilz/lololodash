var _ = require("lodash");

var sortQuantityDesc = function(data) {
    return _.sortBy(data, 'quantity').reverse();
};

module.exports = sortQuantityDesc;
