"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BudgetCalculator = /** @class */ (function () {
    function BudgetCalculator() {
    }
    BudgetCalculator.prototype.generateBudgetPlan = function (amount, category) {
        var percentage;
        switch (category.toLowerCase()) {
            case 'student':
                percentage = [40, 30, 10, 10, 10];
                break;
            case 'salaried':
                percentage = [50, 20, 10, 10, 10];
                break;
            case 'retired':
                percentage = [60, 15, 10, 10, 5];
                break;
            default:
                console.log('Category not recognized, using default percentages.');
                percentage = [50, 20, 10, 10, 10];
                break;
        }
        var householdNeedsPt = percentage[0], externalExpensesPt = percentage[1], subscriptionsPt = percentage[2], savingsPt = percentage[3], investmentsPt = percentage[4];
        var householdNeeds = this.calculatePercentage(amount, householdNeedsPt);
        var externalExpenses = this.calculatePercentage(amount, externalExpensesPt);
        var subscriptions = this.calculatePercentage(amount, subscriptionsPt);
        var savings = this.calculatePercentage(amount, savingsPt);
        var investments = this.calculatePercentage(amount, investmentsPt);
        return {
            householdNeeds: householdNeeds,
            externalExpenses: externalExpenses,
            subscriptions: subscriptions,
            savings: savings,
            investments: investments,
            category: category
        };
    };
    BudgetCalculator.prototype.calculatePercentage = function (amount, percentage) {
        return amount * (percentage / 100);
    };
    return BudgetCalculator;
}());
exports.default = BudgetCalculator;
