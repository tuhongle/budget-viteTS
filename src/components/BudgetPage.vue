<template>
    <div class="card rounded-4 border-2" :style="{ borderColor: budget.color }">
        <div class="card-body px-4">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h3 class="card-title fw-bold fs-1" :style="{ 'color': budget.color }">{{ budget.name }}</h3>
                <p class="lead text-end fw-medium" :style="{ 'color': budget.color}">${{ budget.amount }} Budgeted</p>
            </div>
            <div class="progress mb-3" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" :style="{ backgroundColor: budget.color , width: `${(budget.spent / budget.amount) * 100}%` }"></div>
            </div>  
            <div class="d-flex justify-content-between align-items-center mb-3">
                <p :style="{ 'color': budget.color}">${{ budget.spent }} spent</p>
                <p class="opacity-50 text-end">${{ budget.amount - budget.spent }} remaining</p>
            </div>
            <div class="text-center">
                <button v-if="!wantDelete" class="btn btn-lg py-2 text-light" :style="{ backgroundColor: budget.color}" @click="Router.push({name: 'budget', params: {id: budget.id}})">
                    View Details
                    <i class="bi bi-cash-coin ms-1"></i>
                </button>
                <button v-else class="btn text-light btn-lg py-2" :style="{ backgroundColor: budget.color }" @click="budgetStore.deleteBudget(budget.id)">
                    Delete Budget
                    <i class="bi bi-trash3"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { budgetType } from '@/types/budgetTypes';
import { RouterLink } from 'vue-router';
import { useBudgetStore } from '@/stores/budgetStore';
import { useRouter } from 'vue-router';

const budgetStore = useBudgetStore();
const Router = useRouter();

const props = defineProps<{
    budget: budgetType,
    wantDelete: boolean
}>();

</script>