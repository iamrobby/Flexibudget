 async function submitBudget() {
      const amount = parseFloat(document.getElementById('amount').value);
      const category = document.getElementById('category').value;
      const resultDiv = document.getElementById('result');
    //   resultDiv.innerHTML = 'Loading...';

      try {
        const res = await fetch('http://localhost:3000/api/budget', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount, category })
        });

        if (!res.ok) {
          const error = await res.json();
          resultDiv.innerHTML = `<span style="color: red;">Error: ${error.error}</span>`;
          return;
        }

        const data = await res.json();
        resultDiv.innerHTML = `
          <h3>Personalized budget for ${data.category}</h3>
          <ul>
            <li>Household Needs: ₹${data.householdNeeds}</li>
            <li>External Expenses: ₹${data.externalExpenses}</li>
            <li>Subscriptions: ₹${data.subscriptions}</li>
            <li>Savings: ₹${data.savings}</li>
            <li>Investments: ₹${data.investments}</li>
          </ul>
        `;
      } catch (err) {
        resultDiv.innerHTML = `<span style="color: red;">Request failed: ${err.message}</span>`;
      }
    }