import  BudgetCalculator  from './services/budgetCalculator';
import { BudgetPlan } from './models/budgetPlan';

const prompt = require('prompt-sync')();

function main() {
    const amount = parseFloat(prompt('Enter your total budget amount: '));
    
    if (isNaN(amount) || amount <= 0) {
        console.log('Please enter a valid budget amount.');
        return;
    }
    console.log('Select your category:');
    console.log('1. Student');
    console.log('2. Salaried Employee');
    console.log('3. Retired');
    const categoryChoice = parseInt(prompt('Enter the number corresponding to your category: '));

    let category: string;
    switch (categoryChoice) {
        case 1:
            category = 'student';
            break;
        case 2:
            category = 'salaried';
            break;
        case 3:
            category = 'retired';
            break;
        default:
            console.log('Invalid choice, defaulting to Salaried Employee.');
            category = 'salaried';
            break;
    }

    const budgetCalculator = new BudgetCalculator();
    const budgetPlan: BudgetPlan = budgetCalculator.generateBudgetPlan(amount , category);

    console.log('Your Smart Budget Plan:');
    // console.log(`Category: ${budgetPlan.category}`);
    console.log(`Household Needs: Rupees ${budgetPlan.householdNeeds.toFixed(2)}`);
    console.log(`External Expenses: Rupees ${budgetPlan.externalExpenses.toFixed(2)}`);
    console.log(`Subscriptions: Rupees ${budgetPlan.subscriptions.toFixed(2)}`);
    console.log(`Savings: Rupees ${budgetPlan.savings.toFixed(2)}`);
    console.log(`Investments: Rupees ${budgetPlan.investments.toFixed(2)}`);
}

main();