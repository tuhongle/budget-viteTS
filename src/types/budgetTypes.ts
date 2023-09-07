export interface expenseType {
    name: string,
    amount: number,
    createdAt: string
}

export interface budgetType {
    id: string,
    color: string,
    name: string,
    amount: number,
    spent: number,
    expenses: expenseType[],
    createdAt: string
}