document.addEventListener("DOMContentLoaded", function () {
    let budgetInput = document.querySelector("#budget input");
    let setBudgetButton = document.querySelector("#budget button");


    let expensesReasonInput = document.querySelector("#expenses input:nth-of-type(1)");
    let expensesAmountInput = document.querySelector("#expenses input:nth-of-type(2)");
    let checkAmountButton = document.querySelector("#expenses button");


    let addAmountDetails = document.querySelector(".add_amount_details");
    let expensesAmountDetails = document.querySelector(".expenses_amount_details");


    let totalBalance = document.querySelector(".total_belense");
    let amountDetails = document.querySelector(".amount_details");
    let expensesDetails = document.querySelector(".expenses");
    let balanceDetails = document.querySelector(".belense");
    let expensesList = document.createElement("ul");
    document.querySelector(".details_container").appendChild(expensesList);
    let resetButton = document.createElement("button");
    resetButton.textContent = "Reset All Data";
    resetButton.style.marginTop = "10px";
    document.querySelector(".details_container").appendChild(resetButton);

    let budget = parseFloat(localStorage.getItem("budget")) || 0;
    let totalExpenses = parseFloat(localStorage.getItem("totalExpenses")) || 0;
    let expensesData = JSON.parse(localStorage.getItem("expensesData")) || [];

    updateUI();

    setBudgetButton.addEventListener("click", function () {
        let budgetValue = parseFloat(budgetInput.value);
        if (!isNaN(budgetValue) && budgetValue > 0) {
            budget += budgetValue;
            localStorage.setItem("budget", budget);
            updateUI();     
            budgetInput.value = "";
        } else {
            alert("Please enter a valid budget amount.");
        }
    });

    checkAmountButton.addEventListener("click", function () {
        let expenseReason = expensesReasonInput.value.trim();
        let expenseAmount = parseFloat(expensesAmountInput.value);
        
        if (expenseReason === "" || isNaN(expenseAmount) || expenseAmount <= 0) {
            alert("Please enter a valid expense reason and amount.");
            return;
        }

        if (expenseAmount > budget - totalExpenses) {
            alert("Not enough budget left for this expense.");
            return;
        }

        totalExpenses += expenseAmount;
        expensesData.push({ reason: expenseReason, amount: expenseAmount });
        localStorage.setItem("totalExpenses", totalExpenses);
        localStorage.setItem("expensesData", JSON.stringify(expensesData));
        updateUI();
        expensesReasonInput.value = "";
        expensesAmountInput.value = "";
    });

    resetButton.addEventListener("click", function () {
        if (confirm("Are you sure you want to reset all data?")) {
            localStorage.clear();
            budget = 0;
            totalExpenses = 0;
            expensesData = [];
            updateUI();
        }
    });

    function updateUI() {
        addAmountDetails.textContent = budget.toFixed(2);
        amountDetails.textContent = budget.toFixed(2);
        expensesAmountDetails.textContent = totalExpenses.toFixed(2);
        expensesDetails.textContent = totalExpenses.toFixed(2);
        updateBalance();
        updateExpensesList();
    }

    function updateBalance() {
        let balance = budget - totalExpenses;
        totalBalance.textContent = balance.toFixed(2);
        balanceDetails.textContent = balance.toFixed(2);
    }

    function updateExpensesList() {
        expensesList.innerHTML = "";
        expensesData.forEach(expense => {
            let li = document.createElement("li");
            li.textContent = `${expense.reason}: ${expense.amount.toFixed(2)}`;
            expensesList.appendChild(li);
        });
    }
});
