import express, { Request, Response } from 'express';
import cors from 'cors';
import BudgetCalculator from './services/budgetCalculator';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/budget', function (req: Request, res: Response): void {
    const { amount, category } = req.body;

    if (typeof amount !== 'number' || amount <= 0 || typeof category !== 'string') {
        res.status(400).json({ error: 'Invalid input' });
        return;
    }

    const calculator = new BudgetCalculator();
    const budgetPlan = calculator.generateBudgetPlan(amount, category);
    res.json(budgetPlan);
});

app.listen(PORT, function () {
    console.log(`Server running on http://localhost:${PORT}`);
});
