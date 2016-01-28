var _ = require("lodash")

var incomeAnalyze = function(freelancers) {
    var freelancers = _.sortBy(freelancers, "income");

    var totalIncome = _.reduce(freelancers, function(sum, freelancer) {
        return sum + freelancer.income;
    }, 0);

    average = totalIncome / freelancers.length;

    var under = _.filter(freelancers, function(freelancer) {
        return freelancer.income <= average;
    });

    var over = _.filter(freelancers, function(freelancer) {
        return freelancer.income > average;
    });

    return { average: average, underperform: under, overperform: over };
};

module.exports = incomeAnalyze;
