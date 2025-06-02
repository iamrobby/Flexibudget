import { BudgetPlan } from '../models/budgetPlan';
class BudgetCalculator {
    generateBudgetPlan(amount: number , category : string): BudgetPlan {
        let percentage;
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
         const [householdNeedsPt, externalExpensesPt, subscriptionsPt, savingsPt, investmentsPt] = percentage;
        const householdNeeds = this.calculatePercentage(amount, householdNeedsPt );
        const externalExpenses = this.calculatePercentage(amount, externalExpensesPt);
        const subscriptions = this.calculatePercentage(amount, subscriptionsPt);
        const savings = this.calculatePercentage(amount, savingsPt);
        const investments = this.calculatePercentage(amount, investmentsPt);

       return {
            householdNeeds,
            externalExpenses,
            subscriptions,
            savings,
            investments,
            category 
        };
    }

    private calculatePercentage(amount: number, percentage: number): number {
        return amount * (percentage/100);
    }
}

export default BudgetCalculator;