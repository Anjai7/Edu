import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Button } from "~/components/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Budget Tracker - EduHub" },
    { name: "description", content: "Manage your student finances and optimize spending" },
  ];
};

export default function Budget() {
  const [expenses] = useState([
    { id: "1", category: "textbooks", amount: 250, description: "Calculus Textbook", date: "2024-01-15" },
    { id: "2", category: "food", amount: 45, description: "Campus Lunch", date: "2024-01-15" },
    { id: "3", category: "supplies", amount: 30, description: "Lab Materials", date: "2024-01-14" },
    { id: "4", category: "transport", amount: 25, description: "Bus Pass", date: "2024-01-14" },
  ]);

  const [monthlyBudget] = useState({
    textbooks: { budget: 500, spent: 250 },
    food: { budget: 400, spent: 180 },
    supplies: { budget: 150, spent: 75 },
    transport: { budget: 100, spent: 50 },
    entertainment: { budget: 200, spent: 120 },
  });

  const totalBudget = Object.values(monthlyBudget).reduce((sum, cat) => sum + cat.budget, 0);
  const totalSpent = Object.values(monthlyBudget).reduce((sum, cat) => sum + cat.spent, 0);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Budget Tracker</h1>
          <p className="text-xl text-gray-600">
            Manage your student finances and optimize spending
          </p>
        </div>
        <Button variant="primary">Add Expense</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Total Budget</h3>
          <div className="text-3xl font-bold text-blue-600">${totalBudget}</div>
          <p className="text-sm text-gray-500">This month</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Total Spent</h3>
          <div className="text-3xl font-bold text-red-600">${totalSpent}</div>
          <p className="text-sm text-gray-500">{((totalSpent / totalBudget) * 100).toFixed(1)}% of budget</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Remaining</h3>
          <div className="text-3xl font-bold text-green-600">${totalBudget - totalSpent}</div>
          <p className="text-sm text-gray-500">Available to spend</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Category Breakdown</h3>
          <div className="space-y-4">
            {Object.entries(monthlyBudget).map(([category, data]) => {
              const percentage = (data.spent / data.budget) * 100;
              const isOverBudget = percentage > 100;
              
              return (
                <div key={category} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium capitalize">{category}</span>
                    <span className={`text-sm ${isOverBudget ? 'text-red-600' : 'text-gray-600'}`}>
                      ${data.spent} / ${data.budget}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        isOverBudget ? 'bg-red-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500">
                    {percentage.toFixed(1)}% used
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Expenses</h3>
          <div className="space-y-3">
            {expenses.map((expense) => (
              <div key={expense.id} className="flex justify-between items-center p-3 border border-gray-200 rounded-md">
                <div>
                  <div className="font-medium">{expense.description}</div>
                  <div className="text-sm text-gray-500">
                    {expense.date} • {expense.category}
                  </div>
                </div>
                <div className="text-lg font-semibold text-red-600">
                  -${expense.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Textbook Optimization</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-md">
            <h4 className="font-medium mb-2">Buy Used</h4>
            <p className="text-sm text-gray-600 mb-2">
              Save up to 75% on textbooks by buying used copies
            </p>
            <Button variant="secondary" className="w-full">Find Used Books</Button>
          </div>
          <div className="p-4 border border-gray-200 rounded-md">
            <h4 className="font-medium mb-2">Digital Rentals</h4>
            <p className="text-sm text-gray-600 mb-2">
              Rent digital textbooks for short-term access
            </p>
            <Button variant="secondary" className="w-full">Browse Rentals</Button>
          </div>
          <div className="p-4 border border-gray-200 rounded-md">
            <h4 className="font-medium mb-2">Library Access</h4>
            <p className="text-sm text-gray-600 mb-2">
              Check if your library has the books you need
            </p>
            <Button variant="secondary" className="w-full">Search Library</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
