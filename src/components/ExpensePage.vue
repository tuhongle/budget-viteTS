<template>
    <td>{{ expense.name }}</td>
    <td>${{ expense.amount }}</td>
    <td>{{ expense.createdAt }}</td>
    <td v-if="!wantDelete"><RouterLink :to="{ name: 'budget', params: { id: expense.budgetID}}" type="button" class="btn rounded-pill text-light" :style="{ backgroundColor: expense.budgetColor }">{{ expense.budgetName }}</RouterLink></td>
    <td><button class="btn btn-outline-danger" @click="if (!wantDelete) {budgetStore.deleteExpense(expense)} else {budgetStore.deleteExpenseOnDetail(expense)};"><i class="bi bi-trash3-fill"></i></button></td>
</template>

<script setup lang="ts">
import type { expenseType } from '@/types/budgetTypes';
import { useBudgetStore } from '@/stores/budgetStore';
import { RouterLink } from 'vue-router';

const budgetStore = useBudgetStore();
defineProps<{
    expense: expenseType,
    wantDelete: boolean
}>();
</script>