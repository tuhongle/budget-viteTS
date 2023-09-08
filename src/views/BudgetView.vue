<script setup lang="ts">
import BudgetPage from "../components/BudgetPage.vue"
import ExpensePage from "../components/ExpensePage.vue"
import type { budgetType } from "@/types/budgetTypes"
import { useBudgetStore } from "@/stores/budgetStore"
import { storeToRefs } from "pinia"
import { useRoute } from "vue-router"

const Route = useRoute();
const id : any = Route.params.id;
const budgetStore = useBudgetStore();
const { budgetDetail, expenseName, expenseAmount } = storeToRefs(budgetStore);

budgetStore.getBudget(id);
</script>

<template>
  <main class="home">
    <div class="container-xl py-4">
      <div class="row mb-3">
        <h2 class="fw-bold display-4"><span class="text-info">Groceries</span> Overview</h2>
      </div>
      <div class="row mb-4">
        <div class="col-12 col-md-5 mb-3 mb-md-0">
          <BudgetPage :budget="budgetDetail" :wantDelete=true />
        </div>
        <div class="col-12 col-md-7">
          <div class="card shadow p-3 rounded-3">
            <div class="card-body p-3 border-2 border-dark rounded-3" style="border: dashed">
              <h3 class="card-title fw-bolder mb-4">Add New <span class="text-info">{{ budgetDetail.name }}</span> Expense</h3>
              <form @submit.prevent="budgetStore.addExpenseOnDetail($event, budgetDetail)">
                <div class="row">
                  <div class="col-12 col-md-6 mb-3">
                    <label for="expenseName" class="form-label fw-bold mb-2">Expense Name</label>
                    <input type="text" id="expenseName" class="form-control py-2" placeholder="e.g., Coffee" v-model="expenseName" required>
                  </div>
                  <div class="col-12 col-md-6 mb-3">
                    <label for="expenseAmount" class="form-label fw-bold mb-2">Amount</label>
                    <input type="number" id="expenseAmount" class="form-control py-2" step="0.01" placeholder="e.g., $3.00" v-model="expenseAmount" required>
                  </div>
                </div>
                <button class="btn btn-dark px-4 py-2">
                  Add Expense
                  <i class="bi bi-plus-circle-fill ms-1"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <h2 class="fw-bold display-5 mb-4"><span class="text-info">Groceries</span> Expenses</h2>
        <div class="col px-0 px-md-5">
          <div class="card border-0 overflow-auto">
            <table class="table table-striped table-hover table-borderless text-center">
              <thead>
                  <tr class="fs-3">
                      <th scope="col">Name</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Date</th>
                      <th scope="col">Budget</th>
                      <th scope="col"></th>
                  </tr>
              </thead>
              <tbody class="align-middle">
                <TransitionGroup appear name="expense">
                  <tr class="lead" v-for="(expense, index) in budgetDetail.expenses" :key="index">
                    <ExpensePage :expense="expense" :wantDelete="true" />
                  </tr>
                </TransitionGroup>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
